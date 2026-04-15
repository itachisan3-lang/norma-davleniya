import Breadcrumb from '@/components/Breadcrumb';
import PressureTable from '@/components/PressureTable';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { ADULT_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Таблица норм артериального давления по возрасту и полу — мужчины и женщины 18–80+ лет',
  description: 'Полная таблица норм артериального давления по возрасту: от 18 до 80+ лет для мужчин и женщин. Систолическое, диастолическое, пульсовое давление — все значения с пояснениями.',
  alternates: { canonical: `${BASE_URL}/tablitsa` },
};

const faq = [
  { q: 'Какое давление считается нормальным по таблице ВОЗ?', a: 'По классификации ВОЗ/ESC 2018 оптимальным считается давление ниже 120/80 мм рт.ст. Нормальным — 120–129/80–84. Высоким нормальным — 130–139/85–89. Гипертония диагностируется при стойком давлении от 140/90 мм рт.ст.' },
  { q: 'Почему нормы давления у мужчин и женщин разные?', a: 'До 40–45 лет давление у мужчин в среднем выше на 3–5 мм рт.ст. из-за большей мышечной массы и объёма крови. После менопаузы у женщин давление быстро растёт и к 65 годам превышает показатели мужчин того же возраста.' },
  { q: 'Как пользоваться таблицей нормы давления?', a: 'Найдите свою возрастную группу в левой колонке. Сравните измеренное давление с диапазоном нормы для вашего пола. Если показатели систематически выше верхней границы нормы — обратитесь к терапевту или кардиологу.' },
  { q: 'В какое время суток лучше измерять давление?', a: 'Оптимально измерять утром через 15–30 минут после подъёма (до завтрака и лекарств) и вечером в 17–19 часов. Записывайте показания в дневник. Для диагноза гипертонии нужно минимум 2 измерения в день на протяжении 7 дней.' },
  { q: 'На какой руке мерить давление?', a: 'На первом измерении — на обеих руках. Разница до 10 мм рт.ст. — норма. Если разница больше — следует использовать руку с более высокими показателями. Чаще разница выше на правой руке.' },
];

export default function TablitsaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{ label: 'Таблица норм' }]} />

        <section className="page-hero">
          <h1>Таблица норм давления по возрасту и полу</h1>
          <p className="lead">Нормальные показатели артериального давления для мужчин и женщин от 18 до 80+ лет. Данные соответствуют рекомендациям ВОЗ и Европейского общества кардиологов (ESC/ESH 2018).</p>
        </section>

        <div className="card">
          <h2 style={{marginTop:0}}>Нормы давления: мужчины и женщины по возрасту</h2>
          <PressureTable rows={ADULT_NORMS} showGender caption="Нормы систолического/диастолического давления (мм рт.ст.)" />
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Как читать таблицу давления</h2>
          <p>Формат записи: <strong>систолическое (верхнее) / диастолическое (нижнее)</strong> в мм рт.ст. Например, 120–130/75–82 означает: верхнее давление от 120 до 130, нижнее от 75 до 82 мм рт.ст.</p>
          <p><strong>Пульсовое давление</strong> — разница между систолическим и диастолическим. В норме составляет 30–60 мм рт.ст. Значение менее 30 требует обследования сердца, более 60 — консультации кардиолога.</p>
          <p>Важно: таблица отражает <em>среднестатистические нормы</em>. Индивидуальные показатели могут отличаться. При хроническом давлении ниже или выше табличного значения — обратитесь к врачу.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Классификация артериального давления</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Категория</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систолическое (верхнее)</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Диастолическое (нижнее)</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Что делать</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Критически низкое','< 90','< 60','Срочно к врачу','#ef4444'],
                  ['Низкое (гипотония)','90–99','60–69','Наблюдение, при симптомах — врач','#f97316'],
                  ['Оптимальное','< 120','< 80','Поддерживать образ жизни','#10b981'],
                  ['Нормальное','120–129','80–84','Контроль раз в год','#22c55e'],
                  ['Высокое нормальное','130–139','85–89','Изменение образа жизни','#fbbf24'],
                  ['Гипертония 1 ст.','140–159','90–99','Консультация врача','#f97316'],
                  ['Гипертония 2 ст.','160–179','100–109','Медикаментозное лечение','#dc2626'],
                  ['Гипертония 3 ст.','≥ 180','≥ 110','Срочная медицинская помощь','#991b1b'],
                ].map(([cat, sys, dia, action, color]) => (
                  <tr key={cat} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:600,color}}>{cat}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{sys}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{dia}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12,fontSize:'0.82rem',color:'var(--text-dim)'}}>Источник: ESC/ESH Guidelines for the Management of Arterial Hypertension, 2018.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Изменение нормы давления с возрастом</h2>
          <p>С возрастом нормальные показатели давления постепенно смещаются вверх. Это связано с несколькими физиологическими процессами:</p>
          <ul>
            <li><strong>Снижение эластичности артерий</strong> — стенки сосудов уплотняются, сопротивление кровотоку растёт.</li>
            <li><strong>Атеросклероз</strong> — отложение холестерина сужает просвет артерий.</li>
            <li><strong>Изменение гормонального фона</strong> — особенно выражено у женщин после менопаузы: исчезает защитный эффект эстрогенов.</li>
            <li><strong>Снижение чувствительности барорецепторов</strong> — система регуляции давления становится менее точной.</li>
          </ul>
          <p>В возрасте 18–25 лет нормальное систолическое давление — 112–125 мм рт.ст. К 80 годам верхняя граница нормы смещается до 150–160 мм рт.ст. для мужчин и несколько выше для женщин. Однако это не значит, что высокое давление в пожилом возрасте «нормально» — его лечение снижает риск инсульта и инфаркта даже в 80+.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Правила измерения давления для точного результата</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Условие</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Требование</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Почему важно</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Поза','Сидя, спина прямая, ноги на полу','Полулежачая поза завышает показатели на 5–10 мм'],
                  ['Рука','На уровне сердца, без напряжения','Рука ниже сердца — цифры завышены, выше — занижены'],
                  ['Манжета','Нижний край на 2–3 см выше локтя','Неправильное положение — ошибка до 15 мм рт.ст.'],
                  ['Покой','Отдых 5 минут до измерения','После ходьбы давление временно выше на 10–20 мм'],
                  ['Кофе/никотин','Не употреблять за 30 мин до','Кофеин и никотин временно повышают давление'],
                  ['Разговор','Молчать во время измерения','Разговор повышает давление на 5–8 мм рт.ст.'],
                  ['Повтор','Через 1–2 мин для подтверждения','Первый результат может быть выше из-за стресса'],
                ].map(([cond, req, why]) => (
                  <tr key={cond} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:600}}>{cond}</td>
                    <td style={{padding:'9px 12px'}}>{req}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <nav aria-label="Детальные страницы по возрасту" style={{marginTop:20}}>
          <h2>Нормы по возрастным группам — подробно</h2>
          <div className="cards-grid">
            {ADULT_NORMS.map(n => (
              <Link key={n.slug} href={`/vozrast/${n.slug}`} className="nav-card">
                <div className="nc-label">{n.label}</div>
                <div className="nc-value">М: {n.sysMinM}–{n.sysMaxM}/{n.diaMinM}–{n.diaMaxM}</div>
                <div className="nc-desc">Ж: {n.sysMinW}–{n.sysMaxW}/{n.diaMinW}–{n.diaMaxW}</div>
              </Link>
            ))}
          </div>
        </nav>

        <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
          {[
            {href:'/tablitsa/zhenshchiny',label:'Женщины',desc:'Подробная таблица'},
            {href:'/tablitsa/muzhchiny',label:'Мужчины',desc:'Подробная таблица'},
            {href:'/tablitsa/deti',label:'Дети',desc:'0–17 лет'},
            {href:'/tablitsa/puls',label:'Пульс',desc:'Нормы ЧСС'},
          ].map(c => (
            <Link key={c.href} href={c.href} className="nav-card" style={{flex:1,minWidth:160}}>
              <div className="nc-label">{c.label}</div>
              <div className="nc-desc">{c.desc}</div>
            </Link>
          ))}
        </div>

        <FaqBlock items={faq} title="Часто задаваемые вопросы о нормах давления" />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/gipertoniya">Степени гипертонии</Link> ·{' '}
          <Link href="/gipotoniia">Гипотония (низкое давление)</Link> ·{' '}
          <Link href="/verkhneye-davlenie">Верхнее давление</Link> ·{' '}
          <Link href="/nizhneye-davlenie">Нижнее давление</Link>
        </div>
      </div>
    </div>
  );
}
