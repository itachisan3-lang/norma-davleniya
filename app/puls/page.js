import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import FaqBlock from '@/components/FaqBlock';
import { PULSE_GROUPS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма пульса — таблица по возрасту, у взрослых и детей',
  description: 'Нормальный пульс у взрослых 60–100 уд/мин, у детей выше. Таблица нормы пульса по возрасту. Брадикардия, тахикардия — когда пульс опасен.',
  alternates: { canonical: `${BASE_URL}/puls` },
};

const faq = [
  { q: 'Какой нормальный пульс у взрослого?', a: 'Нормальный пульс у взрослого человека в покое — 60–100 ударов в минуту. Оптимальным считается 60–80 уд/мин. У тренированных спортсменов пульс может быть 40–60 уд/мин — это тоже норма.' },
  { q: 'Что такое брадикардия?', a: 'Брадикардия — пульс менее 60 уд/мин. У здоровых спортсменов это норма. У нетренированных людей может указывать на нарушения проводимости сердца, гипотиреоз, приём бета-блокаторов.' },
  { q: 'Что такое тахикардия?', a: 'Тахикардия — пульс более 100 уд/мин. Физиологическая (при нагрузке, стрессе, температуре) — норма. Постоянная тахикардия в покое требует обследования.' },
  { q: 'Как измерить пульс?', a: 'Приложите указательный и средний пальцы к запястью (лучевая артерия) или к шее (сонная артерия). Считайте удары за 30 секунд и умножьте на 2. Или считайте ровно 60 секунд для точного результата.' },
];

export default function PulsPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Норма пульса'}]} />
        <section className="page-hero">
          <h1>Норма пульса по возрасту</h1>
          <p className="lead">Нормальный пульс у взрослых — 60–100 ударов в минуту. У детей частота сердечных сокращений выше. Подробные нормы — в таблице ниже.</p>
        </section>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:20}}>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Пульс взрослого</div>
            <div style={{fontSize:'1.8rem',fontWeight:900,color:'var(--green)'}}>60–100</div>
            <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>уд/мин</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Пульс новорождённого</div>
            <div style={{fontSize:'1.8rem',fontWeight:900,color:'var(--accent)'}}>120–160</div>
            <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>уд/мин</div>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Таблица нормы пульса по возрасту</h2>
          <div className="data-table">
            <table aria-label="Нормы пульса по возрасту">
              <thead>
                <tr>
                  <th scope="col">Возраст</th>
                  <th scope="col">Норма (уд/мин)</th>
                </tr>
              </thead>
              <tbody>
                {PULSE_GROUPS.map(p => (
                  <tr key={p.slug}>
                    <td><Link href={`/puls/${p.slug}`}>{p.label}</Link></td>
                    <td>{p.min}–{p.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Брадикардия и тахикардия</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div className="info-block" style={{background:'rgba(59,130,246,0.08)',borderLeft:'4px solid var(--accent)',margin:0}}>
              <h3 style={{marginTop:0,color:'var(--accent)'}}>Брадикардия</h3>
              <p style={{margin:0}}>Пульс менее 60 уд/мин. У спортсменов — норма. У остальных — обследование.</p>
            </div>
            <div className="info-block danger" style={{margin:0}}>
              <h3 style={{marginTop:0}}>Тахикардия</h3>
              <p style={{margin:0}}>Пульс более 100 уд/мин. В покое постоянно — требует осмотра врача.</p>
            </div>
          </div>
        </div>
        <div className="cards-grid" style={{marginTop:16}}>
          {PULSE_GROUPS.map(p => (
            <Link key={p.slug} href={`/puls/${p.slug}`} className="nav-card">
              <div className="nc-label">{p.label}</div>
              <div className="nc-value">{p.min}–{p.max} уд/мин</div>
            </Link>
          ))}
        </div>
        <FaqBlock items={faq} />
      </div>
    </div>
  );
}
