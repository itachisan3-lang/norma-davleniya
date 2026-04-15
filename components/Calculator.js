'use client';
import { useState } from 'react';
import Link from 'next/link';

const AGE_NORMS = [
  { minAge:1,  maxAge:3,  label:'1–3 года',   sysMin:90,  sysMax:112, diaMin:50, diaMax:74, pulseMin:90, pulseMax:120 },
  { minAge:4,  maxAge:6,  label:'4–6 лет',    sysMin:92,  sysMax:114, diaMin:58, diaMax:76, pulseMin:80, pulseMax:110 },
  { minAge:7,  maxAge:11, label:'7–11 лет',   sysMin:95,  sysMax:119, diaMin:60, diaMax:79, pulseMin:68, pulseMax:107 },
  { minAge:12, maxAge:17, label:'12–17 лет',  sysMin:105, sysMax:130, diaMin:65, diaMax:84, pulseMin:60, pulseMax:95 },
  { minAge:18, maxAge:29, label:'18–29 лет',  sysMin:112, sysMax:126, diaMin:72, diaMax:82, pulseMin:60, pulseMax:90 },
  { minAge:30, maxAge:39, label:'30–39 лет',  sysMin:116, sysMax:130, diaMin:74, diaMax:83, pulseMin:60, pulseMax:90 },
  { minAge:40, maxAge:49, label:'40–49 лет',  sysMin:120, sysMax:135, diaMin:76, diaMax:85, pulseMin:60, pulseMax:90 },
  { minAge:50, maxAge:59, label:'50–59 лет',  sysMin:125, sysMax:140, diaMin:78, diaMax:86, pulseMin:60, pulseMax:90 },
  { minAge:60, maxAge:69, label:'60–69 лет',  sysMin:130, sysMax:145, diaMin:80, diaMax:87, pulseMin:60, pulseMax:80 },
  { minAge:70, maxAge:200,label:'70+ лет',    sysMin:135, sysMax:155, diaMin:79, diaMax:86, pulseMin:60, pulseMax:80 },
];

function getNorm(age) {
  return AGE_NORMS.find(n => age >= n.minAge && age <= n.maxAge) || AGE_NORMS[4];
}

function classifyBP(sys, dia) {
  if (sys < 90 || dia < 60)      return { key:'very-low', label:'Очень низкое',       color:'#dc2626', gaugePos:3 };
  if (sys < 100 || dia < 65)     return { key:'low',      label:'Пониженное',         color:'#ea580c', gaugePos:10 };
  if (sys <= 119 && dia <= 79)   return { key:'optimal',  label:'Оптимальное',        color:'#16a34a', gaugePos:28 };
  if (sys <= 129 && dia <= 84)   return { key:'normal',   label:'Нормальное',         color:'#22c55e', gaugePos:38 };
  if (sys <= 139 && dia <= 89)   return { key:'high-normal', label:'Высокое нормальное', color:'#ca8a04', gaugePos:52 };
  if (sys <= 159 && dia <= 99)   return { key:'grade1',   label:'Гипертония 1 ст.',   color:'#ea580c', gaugePos:66 };
  if (sys <= 179 && dia <= 109)  return { key:'grade2',   label:'Гипертония 2 ст.',   color:'#dc2626', gaugePos:80 };
  return                                { key:'grade3',   label:'Гипертония 3 ст.',   color:'#7f1d1d', gaugePos:94 };
}

function classifyPulse(pulse) {
  if (pulse < 40)   return { label:'Очень редкий', ok:false, color:'#dc2626' };
  if (pulse < 60)   return { label:'Брадикардия', ok:false, color:'#ea580c' };
  if (pulse <= 90)  return { label:'Норма', ok:true, color:'#16a34a' };
  if (pulse <= 100) return { label:'Верхняя граница', ok:true, color:'#ca8a04' };
  return                   { label:'Тахикардия', ok:false, color:'#dc2626' };
}

const RECS = {
  'very-low': ['Немедленно вызовите скорую помощь (103)', 'Лягте горизонтально, поднимите ноги', 'Не давайте лекарства без назначения врача'],
  'low':      ['Лягте или сядьте, выпейте воды', 'Можно принять крепкий чай или кофе', 'При частых эпизодах — обратитесь к терапевту'],
  'optimal':  ['Давление в идеальном диапазоне', 'Продолжайте здоровый образ жизни', 'Измеряйте давление раз в год профилактически'],
  'normal':   ['Давление в норме', 'Следите за весом и питанием', 'Регулярная физическая активность'],
  'high-normal': ['Ограничьте соль до 5 г в сутки', 'Контролируйте вес и откажитесь от курения', 'Измеряйте давление регулярно', 'Рекомендуется консультация терапевта'],
  'grade1':   ['Обратитесь к кардиологу или терапевту', 'Ограничьте соль, алкоголь, жирную пищу', 'Измеряйте давление дважды в день', 'Обычно поддаётся коррекции без таблеток'],
  'grade2':   ['Необходима медикаментозная терапия', 'Срочно обратитесь к врачу', 'Не отменяйте назначенные препараты', 'Высокий риск инсульта и инфаркта'],
  'grade3':   ['СРОЧНО вызовите скорую помощь (103)', 'Возможен гипертонический криз', 'До приезда врача — покой, полулёжа', 'Не принимайте нефлекарства без врача'],
};

function findSlug(sys, dia) {
  const pairs = [
    [60,40],[70,40],[80,50],[90,50],[90,60],[95,60],[100,60],[100,65],[100,70],
    [105,65],[105,70],[110,60],[110,65],[110,70],[110,80],[115,75],
    [120,70],[120,75],[120,80],[125,80],[125,85],[130,70],[130,80],[130,85],
    [130,90],[135,85],[135,90],[140,80],[140,85],[140,90],[145,90],[150,90],
    [150,95],[155,95],[160,90],[160,100],[165,100],[170,95],[170,100],[175,100],
    [180,100],[180,110],[190,110],[200,110],[200,120],
  ];
  let best = null, bestDist = Infinity;
  for (const [s,d] of pairs) {
    const dist = Math.abs(s-sys) + Math.abs(d-dia);
    if (dist < bestDist) { bestDist = dist; best = [s,d]; }
  }
  return best ? `${best[0]}-na-${best[1]}` : null;
}

export default function Calculator() {
  const [age, setAge]       = useState('');
  const [gender, setGender] = useState('any');
  const [sys, setSys]       = useState('');
  const [dia, setDia]       = useState('');
  const [pulse, setPulse]   = useState('');
  const [result, setResult] = useState(null);
  const [error, setError]   = useState('');

  function calculate() {
    setError('');
    const ageN = parseInt(age);
    if (!ageN || ageN < 1 || ageN > 120) {
      setError('Введите корректный возраст от 1 до 120 лет');
      return;
    }
    const norm = getNorm(ageN);
    const sN = sys ? parseInt(sys) : null;
    const dN = dia ? parseInt(dia) : null;
    const pN = pulse ? parseInt(pulse) : null;

    if ((sN && (sN < 40 || sN > 280)) || (dN && (dN < 20 || dN > 180))) {
      setError('Проверьте введённые значения давления');
      return;
    }

    const bpClass = (sN && dN) ? classifyBP(sN, dN) : null;
    const pulseClass = pN ? classifyPulse(pN) : null;
    const pulsePressure = (sN && dN) ? sN - dN : null;
    const slug = (sN && dN) ? findSlug(sN, dN) : null;

    let genderAdj = '';
    if (gender === 'female') {
      genderAdj = ' (у женщин норма чуть ниже)';
    } else if (gender === 'male') {
      genderAdj = ' (у мужчин норма чуть выше)';
    }

    setResult({ norm, ageN, sN, dN, pN, bpClass, pulseClass, pulsePressure, slug, genderAdj });
  }

  const handleKey = e => { if (e.key === 'Enter') calculate(); };

  return (
    <div className="calc-card">
      <h2 style={{marginTop:0,marginBottom:4,fontSize:'1.4rem'}}>Калькулятор нормы давления</h2>
      <p style={{color:'var(--text-muted)',fontSize:'0.88rem',marginBottom:20}}>
        Введите возраст и показания тонометра — получите оценку и рекомендации
      </p>

      <div className="calc-grid" style={{marginBottom:14}}>
        <div className="field">
          <label htmlFor="calc-age">Возраст (лет) *</label>
          <input id="calc-age" type="number" min="1" max="120" placeholder="Например: 45"
            value={age} onChange={e => setAge(e.target.value)} onKeyDown={handleKey}
            aria-label="Введите возраст в годах" />
        </div>
        <div className="field">
          <label htmlFor="calc-gender">Пол</label>
          <select id="calc-gender" value={gender} onChange={e => setGender(e.target.value)}
            aria-label="Выберите пол">
            <option value="any">Не указывать</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
      </div>

      <div className="calc-grid-3">
        <div className="field">
          <label htmlFor="calc-sys">Верхнее (сис.), мм рт.ст.</label>
          <input id="calc-sys" type="number" min="40" max="280" placeholder="Напр.: 130"
            value={sys} onChange={e => setSys(e.target.value)} onKeyDown={handleKey}
            aria-label="Введите верхнее давление" />
        </div>
        <div className="field">
          <label htmlFor="calc-dia">Нижнее (диас.), мм рт.ст.</label>
          <input id="calc-dia" type="number" min="20" max="180" placeholder="Напр.: 85"
            value={dia} onChange={e => setDia(e.target.value)} onKeyDown={handleKey}
            aria-label="Введите нижнее давление" />
        </div>
        <div className="field">
          <label htmlFor="calc-pulse">Пульс, уд/мин</label>
          <input id="calc-pulse" type="number" min="20" max="250" placeholder="Напр.: 72"
            value={pulse} onChange={e => setPulse(e.target.value)} onKeyDown={handleKey}
            aria-label="Введите пульс" />
        </div>
      </div>

      {error && (
        <div style={{marginTop:12,color:'var(--red)',fontSize:'0.88rem',background:'var(--red-light)',padding:'10px 14px',borderRadius:'var(--radius-sm)'}}>
          ⚠ {error}
        </div>
      )}

      <button className="calc-btn" onClick={calculate} aria-label="Рассчитать норму давления">
        Рассчитать →
      </button>

      {result && (
        <div className="calc-result" role="status" aria-live="polite">
          {/* Header */}
          <div className="calc-result-header">
            {result.sN && result.dN ? (
              <div className="calc-pressure-display">
                <span style={{color: result.bpClass?.color}}>{result.sN}</span>
                <span className="dia-sep">/</span>
                <span style={{color: result.bpClass?.color}}>{result.dN}</span>
                <span style={{fontSize:'1rem',color:'var(--text-dim)',marginLeft:6}}>мм рт.ст.</span>
              </div>
            ) : null}
            {result.bpClass && (
              <span className={`calc-badge ${result.bpClass.key}`}>
                {result.bpClass.key === 'optimal' ? '✓' : result.bpClass.key.startsWith('grade') ? '⚠' : result.bpClass.key === 'low' || result.bpClass.key === 'very-low' ? '↓' : '→'}{' '}
                {result.bpClass.label}
              </span>
            )}
            {!result.sN && (
              <div style={{color:'var(--text-muted)',fontSize:'0.88rem'}}>
                Норма для {result.ageN} лет{result.genderAdj}
              </div>
            )}
          </div>

          {/* Gauge */}
          {result.bpClass && (
            <div style={{marginBottom:16}}>
              <div className="calc-gauge">
                <div className="calc-gauge-marker" style={{left:`${result.bpClass.gaugePos}%`}} />
              </div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.72rem',color:'var(--text-dim)',marginTop:4}}>
                <span>Гипотония</span><span>Норма</span><span>Гипертония 1</span><span>Гипертония 3</span>
              </div>
            </div>
          )}

          {/* Compare table */}
          <div className="calc-compare">
            <div className="compare-col">
              <div className="compare-col-label">Ваши показатели</div>
              {result.sN && <div className="compare-row"><span className="compare-key">Систолическое</span><span className="compare-val">{result.sN} мм рт.ст.</span></div>}
              {result.dN && <div className="compare-row"><span className="compare-key">Диастолическое</span><span className="compare-val">{result.dN} мм рт.ст.</span></div>}
              {result.pulsePressure && <div className="compare-row"><span className="compare-key">Пульсовое</span><span className="compare-val">{result.pulsePressure} мм рт.ст.</span></div>}
              {result.pN && <div className="compare-row"><span className="compare-key">Пульс</span><span className={`compare-val ${result.pulseClass?.ok ? 'ok' : 'warn'}`}>{result.pN} уд/мин</span></div>}
            </div>
            <div className="compare-col">
              <div className="compare-col-label">Норма для {result.ageN} лет{result.genderAdj}</div>
              <div className="compare-row">
                <span className="compare-key">Систолическое</span>
                <span className={`compare-val ${result.sN ? (result.sN >= result.norm.sysMin && result.sN <= result.norm.sysMax ? 'ok' : 'warn') : ''}`}>
                  {result.norm.sysMin}–{result.norm.sysMax}
                </span>
              </div>
              <div className="compare-row">
                <span className="compare-key">Диастолическое</span>
                <span className={`compare-val ${result.dN ? (result.dN >= result.norm.diaMin && result.dN <= result.norm.diaMax ? 'ok' : 'warn') : ''}`}>
                  {result.norm.diaMin}–{result.norm.diaMax}
                </span>
              </div>
              <div className="compare-row">
                <span className="compare-key">Пульсовое</span>
                <span className="compare-val">40–50</span>
              </div>
              <div className="compare-row">
                <span className="compare-key">Пульс</span>
                <span className="compare-val">{result.norm.pulseMin}–{result.norm.pulseMax} уд/мин</span>
              </div>
            </div>
          </div>

          {/* Pulse assessment */}
          {result.pN && result.pulseClass && (
            <div style={{
              marginTop:12, padding:'10px 14px', borderRadius:'var(--radius-sm)', fontSize:'0.88rem',
              background: result.pulseClass.ok ? 'var(--green-light)' : 'var(--orange-light)',
              color: result.pulseClass.ok ? '#15803d' : '#c2410c',
            }}>
              <strong>Пульс {result.pN} уд/мин:</strong> {result.pulseClass.label}
              {result.pN < 60 && ' — может быть нормой для тренированных людей'}
              {result.pN > 100 && ' — при постоянной тахикардии в покое обратитесь к врачу'}
            </div>
          )}

          {/* Recommendations */}
          {result.bpClass && RECS[result.bpClass.key] && (
            <div className="calc-recs">
              <div className="calc-recs-title">Рекомендации</div>
              <ul>
                {RECS[result.bpClass.key].map((r,i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}

          {/* Link to znachenie */}
          {result.slug && (
            <Link href={`/znachenie/${result.slug}`} className="calc-result-link">
              📖 Подробная расшифровка давления {result.sN}/{result.dN} →
            </Link>
          )}

          <div style={{marginTop:12,fontSize:'0.75rem',color:'var(--text-dim)',borderTop:'1px solid var(--border)',paddingTop:10}}>
            Это ориентировочная оценка. Для постановки диагноза обратитесь к врачу.
          </div>
        </div>
      )}
    </div>
  );
}
