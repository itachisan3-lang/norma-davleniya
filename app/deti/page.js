import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { CHILDREN_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у детей — таблица по возрасту от 0 до 17 лет, пульс',
  description: 'Нормальные показатели артериального давления у детей по возрасту: от новорождённых до 17 лет. Таблица норм систолического и диастолического давления, пульс, когда обращаться к врачу.',
  alternates: { canonical: `${BASE_URL}/deti` },
};

const faq = [
  { q: 'Какое давление норма у ребёнка 5 лет?', a: 'У ребёнка 5 лет нормальное систолическое давление 95–110 мм рт.ст., диастолическое 60–74 мм рт.ст., пульс 78–112 уд/мин. Давление растёт с возрастом: у школьника 10 лет — уже 100–119/60–79.' },
  { q: 'Как правильно измерить давление ребёнку?', a: 'Главное условие — подходящий размер манжеты. Ширина манжеты должна составлять 40% длины плеча ребёнка. Для детей до 2 лет — манжета 5–7 см, 3–8 лет — 9–10 см, 9–12 лет — 12 см. Неправильная манжета даёт ошибку 10–20 мм рт.ст.' },
  { q: 'Когда у ребёнка начинается гипертония?', a: 'Детская гипертония диагностируется, если давление систематически выше 95-го перцентиля для данного возраста, роста и пола. Для ориентира: у ребёнка 10 лет порог гипертонии ≈ 124/82 мм рт.ст. Точные перцентили определяет врач.' },
  { q: 'Почему у детей давление ниже, чем у взрослых?', a: 'У детей более высокая эластичность сосудов, меньший объём крови и лучше работает вегетативная регуляция. Это обеспечивает меньшее сопротивление кровотоку. По мере роста и взросления давление постепенно повышается и к 18 годам достигает взрослых значений.' },
  { q: 'Что делать если у ребёнка часто высокое давление?', a: 'Разово повышенное давление у ребёнка — не диагноз. Нужно измерить три раза в разные дни. Если превышение сохраняется — обратитесь к педиатру для исключения вторичной гипертонии (болезни почек, эндокринные нарушения). У детей первичная гипертония встречается реже, чем вторичная.' },
];

export default function DetiIndexPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Нормы у детей'}]} />

        <section className="page-hero">
          <h1>Норма давления у детей по возрасту</h1>
          <p className="lead">Нормальные показатели артериального давления для детей от рождения до 17 лет — таблица норм по возрасту и пульсу.</p>
        </section>

        <div className="cards-grid" style={{marginTop:8}}>
          {CHILDREN_NORMS.map(n => (
            <Link key={n.slug} href={`/deti/${n.slug}`} className="nav-card">
              <div className="nc-label">{n.label}</div>
              <div className="nc-value">{n.sysMin}–{n.sysMax} / {n.diaMin}–{n.diaMax}</div>
              <div className="nc-desc">Пульс {n.pulseMin}–{n.pulseMax} уд/мин</div>
            </Link>
          ))}
        </div>

        <div className="card" style={{marginTop:20}}>
          <h2 style={{marginTop:0}}>Таблица норм давления у детей по возрасту</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.85rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'9px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Возраст</th>
                  <th style={{padding:'9px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систол., мм рт.ст.</th>
                  <th style={{padding:'9px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Диастол., мм рт.ст.</th>
                  <th style={{padding:'9px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Пульс, уд/мин</th>
                </tr>
              </thead>
              <tbody>
                {CHILDREN_NORMS.map(n => (
                  <tr key={n.slug} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'8px 12px',fontWeight:500}}>
                      <Link href={`/deti/${n.slug}`} style={{color:'var(--accent)',textDecoration:'none'}}>{n.label}</Link>
                    </td>
                    <td style={{padding:'8px 12px',textAlign:'center'}}>{n.sysMin}–{n.sysMax}</td>
                    <td style={{padding:'8px 12px',textAlign:'center'}}>{n.diaMin}–{n.diaMax}</td>
                    <td style={{padding:'8px 12px',textAlign:'center'}}>{n.pulseMin}–{n.pulseMax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Почему давление у детей ниже, чем у взрослых</h2>
          <p>Норма давления у детей значительно ниже взрослых показателей. Это связано с несколькими физиологическими факторами:</p>
          <ul>
            <li><strong>Высокая эластичность сосудов</strong> — детские артерии более гибкие, сопротивление кровотоку ниже.</li>
            <li><strong>Меньший объём крови</strong> — у новорождённого около 300 мл крови, у взрослого 5–6 л.</li>
            <li><strong>Малый диаметр сосудов</strong> — при пересчёте на килограмм массы тела давление относительно высокое, но абсолютные цифры ниже.</li>
            <li><strong>Незрелость регуляторных систем</strong> — в первые годы жизни вегетативная регуляция ещё формируется.</li>
          </ul>
          <p>К 14–16 годам показатели приближаются к взрослым нормам. У подростков в период активного роста возможны временные колебания давления.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Как правильно измерить давление у ребёнка</h2>
          <p>Точный результат зависит от соблюдения нескольких правил:</p>
          <div style={{overflowX:'auto',marginTop:8}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'9px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Возраст</th>
                  <th style={{padding:'9px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Ширина манжеты</th>
                  <th style={{padding:'9px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Примечание</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['До 1 года','3,5–5 см','Специальная педиатрическая манжета'],
                  ['1–3 года','6–7 см','Манжета «дошкольная»'],
                  ['3–6 лет','8–9 см','Стандарт для дошкольников'],
                  ['6–10 лет','9–10 см','Малая взрослая манжета'],
                  ['10–14 лет','12 см','Стандартная взрослая подходит'],
                  ['14+ лет','12–14 см','Взрослая манжета'],
                ].map(([age, w, note]) => (
                  <tr key={age} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'8px 12px',fontWeight:500}}>{age}</td>
                    <td style={{padding:'8px 12px',textAlign:'center'}}>{w}</td>
                    <td style={{padding:'8px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12}}>Дополнительные правила: ребёнок должен сидеть спокойно 5 минут перед измерением. Для детей до 3 лет допустимо положение лёжа. Всегда измеряйте на правой руке, если не назначено иное.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Когда обращаться к врачу</h2>
          <p>Единственное повышение давления у ребёнка — не повод для паники: плач, бег, температура могут временно увеличить показатели. Обратитесь к педиатру если:</p>
          <ul>
            <li>Давление выше нормы на трёх и более измерениях в разные дни в спокойном состоянии.</li>
            <li>Ребёнок жалуется на головную боль, головокружение, боль в груди.</li>
            <li>Отмечается снижение физической выносливости, одышка.</li>
            <li>Давление резко упало: бледность, слабость, потеря сознания.</li>
            <li>Разница давления на правой и левой руке более 15 мм рт.ст.</li>
          </ul>
          <p>У детей гипертония чаще бывает вторичной — за ней стоит болезнь почек, эндокринное нарушение или коарктация аорты. Поэтому детская гипертония требует обязательного обследования.</p>
        </div>

        <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link href="/tablitsa/deti" className="nav-card" style={{flex:1,minWidth:140}}>
            <div className="nc-label">Полная таблица</div>
            <div className="nc-desc">Все возрасты 0–17 лет</div>
          </Link>
          <Link href="/podrostkov" className="nav-card" style={{flex:1,minWidth:140}}>
            <div className="nc-label">Подростки</div>
            <div className="nc-desc">12–17 лет, особенности</div>
          </Link>
          <Link href="/tablitsa/puls" className="nav-card" style={{flex:1,minWidth:140}}>
            <div className="nc-label">Нормы пульса</div>
            <div className="nc-desc">По возрасту и нагрузке</div>
          </Link>
        </div>

        <FaqBlock items={faq} title="FAQ: давление у детей" />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/tablitsa">Таблица норм взрослых</Link> ·{' '}
          <Link href="/beremennyh">Давление при беременности</Link> ·{' '}
          <Link href="/tonometr">Как измерять давление</Link>
        </div>
      </div>
    </div>
  );
}
