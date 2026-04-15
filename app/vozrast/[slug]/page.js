import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { ADULT_NORMS, BASE_URL } from '@/lib/data';

export async function generateStaticParams() {
  return ADULT_NORMS.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const n = ADULT_NORMS.find(a => a.slug === slug);
  if (!n) return {};
  return {
    title: `Норма давления ${n.label} — мужчины и женщины, таблица, что считается высоким`,
    description: `Нормальное давление ${n.label}: мужчины ${n.sysMinM}–${n.sysMaxM}/${n.diaMinM}–${n.diaMaxM}, женщины ${n.sysMinW}–${n.sysMaxW}/${n.diaMinW}–${n.diaMaxW} мм рт.ст. Пульсовое давление, когда обращаться к врачу, калькулятор.`,
    alternates: { canonical: `${BASE_URL}/vozrast/${slug}` },
  };
}

function getAgeContext(n) {
  const midSys = Math.round((n.sysMinM + n.sysMaxM + n.sysMinW + n.sysMaxW) / 4);
  const midDia = Math.round((n.diaMinM + n.diaMaxM + n.diaMinW + n.diaMaxW) / 4);
  const pulse = midSys - midDia;

  const isYoung = n.sysMaxM <= 130;
  const isMid = n.sysMaxM > 130 && n.sysMaxM <= 145;
  const isElder = n.sysMaxM > 145;

  const ageDesc = isYoung
    ? `Молодой возраст характеризуется хорошей эластичностью артерий и стабильной вегетативной регуляцией. Давление держится в нижнем диапазоне нормы и редко требует медикаментозной коррекции.`
    : isMid
    ? `В этом возрасте начинается постепенное уплотнение артерий. Систолическое давление медленно смещается вверх. Важно регулярно контролировать давление и соблюдать меры профилактики гипертонии.`
    : `В пожилом возрасте снижение эластичности крупных артерий (аорты) приводит к изолированному росту систолического давления при нормальном или сниженном диастолическом. Пульсовое давление нередко превышает 60 мм рт.ст.`;

  return { midSys, midDia, pulse, ageDesc };
}

export default async function VozrastPage({ params }) {
  const { slug } = await params;
  const n = ADULT_NORMS.find(a => a.slug === slug);
  if (!n) notFound();

  const idx = ADULT_NORMS.findIndex(a => a.slug === slug);
  const prev = idx > 0 ? ADULT_NORMS[idx - 1] : null;
  const next = idx < ADULT_NORMS.length - 1 ? ADULT_NORMS[idx + 1] : null;

  const { midSys, midDia, pulse, ageDesc } = getAgeContext(n);

  const highSys = Math.max(n.sysMaxM, n.sysMaxW);
  const highDia = Math.max(n.diaMaxM, n.diaMaxW);

  const faq = [
    { q: `Какое давление норма ${n.label}?`, a: `Нормальное давление ${n.label}: у мужчин ${n.sysMinM}–${n.sysMaxM}/${n.diaMinM}–${n.diaMaxM} мм рт.ст., у женщин ${n.sysMinW}–${n.sysMaxW}/${n.diaMinW}–${n.diaMaxW} мм рт.ст. Если давление систематически выше верхней границы — обратитесь к терапевту.` },
    { q: `Что значит пульсовое давление ${pulse} мм рт.ст.?`, a: `Пульсовое давление — разница между систолическим и диастолическим. В норме 30–60 мм рт.ст. Значение ${pulse} мм рт.ст. ${pulse < 30 ? 'ниже нормы — возможны проблемы с насосной функцией сердца' : pulse <= 60 ? 'в норме' : 'выше нормы — требует наблюдения кардиолога'}.` },
    { q: `Почему нормы давления различаются у мужчин и женщин ${n.label}?`, a: `У мужчин систолическое давление обычно на 3–7 мм рт.ст. выше из-за большей мышечной массы и объёма крови. ${n.sysMinM > 130 ? 'После менопаузы (после 50 лет) защитный эффект эстрогенов исчезает, и у женщин давление начинает обгонять мужские показатели.' : 'До 50 лет у женщин давление ниже — эстрогены защищают сосуды.'}` },
    { q: `Какое давление считается высоким ${n.label}?`, a: `Если систолическое давление стабильно выше ${highSys + 5} мм рт.ст. или диастолическое выше ${highDia + 5} мм рт.ст. при двух и более измерениях — это требует консультации врача. По классификации ВОЗ гипертония начинается от 140/90 мм рт.ст.` },
    { q: 'Как снизить давление без таблеток?', a: 'Снизить давление помогают: ограничение соли до 5 г/сут (−2–8 мм рт.ст.), снижение веса на каждые 5 кг (−4–5 мм), аэробная нагрузка 30 мин/день (−4–9 мм), отказ от курения и алкоголя. В сумме эти меры дают эффект до 15–20 мм рт.ст.' },
  ];

  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[
          { label: 'Нормы по возрасту', href: '/tablitsa' },
          { label: n.label },
        ]} />

        <section className="page-hero">
          <h1>Норма давления {n.label}</h1>
          <p className="lead">Нормальные показатели артериального давления для мужчин и женщин {n.label} — таблица, пульсовое давление, когда обращаться к врачу.</p>
        </section>

        {/* Карточки мужчины/женщины */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:6}}>Мужчины {n.label}</div>
            <div style={{fontSize:'1.7rem',fontWeight:900,color:'var(--accent)'}}>{n.sysMinM}–{n.sysMaxM}</div>
            <div style={{color:'var(--text-dim)',fontSize:'0.85rem',marginTop:2}}>/ {n.diaMinM}–{n.diaMaxM} мм рт.ст.</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:6}}>Женщины {n.label}</div>
            <div style={{fontSize:'1.7rem',fontWeight:900,color:'#e879a0'}}>{n.sysMinW}–{n.sysMaxW}</div>
            <div style={{color:'var(--text-dim)',fontSize:'0.85rem',marginTop:2}}>/ {n.diaMinW}–{n.diaMaxW} мм рт.ст.</div>
          </div>
        </div>

        {/* Таблица норм */}
        <div className="card">
          <h2 style={{marginTop:0}}>Таблица нормы давления {n.label}</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Пол</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систолическое, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Диастолическое, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Пульсовое, мм рт.ст.</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom:'1px solid var(--border)'}}>
                  <td style={{padding:'10px 12px',fontWeight:600}}>Мужчины</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.sysMinM}–{n.sysMaxM}</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.diaMinM}–{n.diaMaxM}</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.sysMinM - n.diaMaxM}–{n.sysMaxM - n.diaMinM}</td>
                </tr>
                <tr style={{borderBottom:'1px solid var(--border)'}}>
                  <td style={{padding:'10px 12px',fontWeight:600}}>Женщины</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.sysMinW}–{n.sysMaxW}</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.diaMinW}–{n.diaMaxW}</td>
                  <td style={{padding:'10px 12px',textAlign:'center'}}>{n.sysMinW - n.diaMaxW}–{n.sysMaxW - n.diaMinW}</td>
                </tr>
                <tr>
                  <td style={{padding:'10px 12px',fontWeight:600,color:'var(--text-muted)'}}>Среднее</td>
                  <td style={{padding:'10px 12px',textAlign:'center',color:'var(--text-muted)'}}>{midSys}</td>
                  <td style={{padding:'10px 12px',textAlign:'center',color:'var(--text-muted)'}}>{midDia}</td>
                  <td style={{padding:'10px 12px',textAlign:'center',color:'var(--text-muted)'}}>{pulse}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Описание возраста */}
        <div className="card">
          <h2 style={{marginTop:0}}>Особенности давления {n.label}</h2>
          <p>{ageDesc}</p>

          <h3>Что считается повышенным давлением {n.label}</h3>
          <p>Независимо от возраста порог гипертонии по критериям ВОЗ и ESC 2018 — <strong>140/90 мм рт.ст.</strong> Если давление систематически превышает {highSys}/{highDia} мм рт.ст. — это выходит за верхнюю границу нормы для данного возраста. При значениях выше 140/90 — обязательна консультация терапевта или кардиолога.</p>

          <h3>Что считается пониженным давлением {n.label}</h3>
          <p>Гипотония диагностируется при давлении ниже 90/60 мм рт.ст. Если давление ниже {n.sysMinM}/{n.diaMinM} мм рт.ст. и сопровождается слабостью, головокружением или обмороками — обратитесь к врачу.</p>

          <h3>Пульсовое давление в {n.label}</h3>
          <p>Нормальное пульсовое давление (разница между верхним и нижним) составляет 30–60 мм рт.ст. Среднее значение для {n.label} — около {pulse} мм рт.ст. {pulse > 60 ? 'Это выше нормы — характерно для возрастного уплотнения аорты. Необходим контроль кардиолога.' : 'Это укладывается в допустимый диапазон.'}</p>
        </div>

        {/* Рекомендации */}
        <div className="card">
          <h2 style={{marginTop:0}}>Как поддерживать нормальное давление</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Мера</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Эффект</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Комментарий</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ограничение соли до 5 г/сут','−2–8 мм рт.ст.','Читайте этикетки: соль скрыта в хлебе, колбасах, сырах'],
                  ['Аэробная нагрузка 30 мин × 5/нед','−4–9 мм рт.ст.','Ходьба, плавание, велосипед — любая нагрузка без одышки'],
                  ['Снижение веса на 5 кг','−2–5 мм рт.ст.','Каждый лишний килограмм повышает давление на ≈ 1 мм'],
                  ['Ограничение алкоголя','−2–4 мм рт.ст.','Норма: не более 1 бокала вина в день для женщин'],
                  ['Отказ от курения','−2–4 мм + ↓ риск ИМ','Никотин вызывает спазм сосудов и ускоряет атеросклероз'],
                  ['Управление стрессом','−3–6 мм рт.ст.','Медитация, йога, достаточный сон (7–9 ч)'],
                ].map(([m, e, c]) => (
                  <tr key={m} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px'}}>{m}</td>
                    <td style={{padding:'9px 12px',textAlign:'center',fontWeight:600,color:'var(--green)'}}>{e}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Навигация между возрастами */}
        <div style={{display:'flex',gap:12,marginTop:20,flexWrap:'wrap'}}>
          {prev && (
            <Link href={`/vozrast/${prev.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
              <div className="nc-desc">← Моложе</div>
              <div className="nc-label">{prev.label}</div>
              <div className="nc-value" style={{fontSize:'0.8rem'}}>М: {prev.sysMinM}–{prev.sysMaxM}/{prev.diaMinM}–{prev.diaMaxM}</div>
            </Link>
          )}
          {next && (
            <Link href={`/vozrast/${next.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
              <div className="nc-desc">Старше →</div>
              <div className="nc-label">{next.label}</div>
              <div className="nc-value" style={{fontSize:'0.8rem'}}>М: {next.sysMinM}–{next.sysMaxM}/{next.diaMinM}–{next.diaMaxM}</div>
            </Link>
          )}
        </div>

        <FaqBlock items={faq} title={`FAQ: давление ${n.label}`} />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/tablitsa">Полная таблица норм</Link> ·{' '}
          <Link href="/gipertoniya">Гипертония — степени</Link> ·{' '}
          <Link href="/tonometr">Как измерять давление</Link>
        </div>
      </div>
    </div>
  );
}
