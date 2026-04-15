import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { HYPERTENSION_GRADES, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Гипертония — степени, симптомы, классификация давления по ВОЗ и ESC',
  description: 'Классификация гипертонии по степеням: 1 степень (140–159/90–99), 2 степень (160–179/100–109), 3 степень (180+/110+). Симптомы, риски, лечение и профилактика.',
  alternates: { canonical: `${BASE_URL}/gipertoniya` },
};

const faq = [
  { q: 'Что такое гипертония?', a: 'Артериальная гипертония — хроническое заболевание, при котором артериальное давление систематически превышает 140/90 мм рт.ст. Для постановки диагноза повышение должно фиксироваться на двух и более измерениях в разные дни.' },
  { q: 'Гипертония 1 степени — это опасно?', a: 'Гипертония 1 степени (140–159/90–99) увеличивает риск инсульта, инфаркта и поражения почек. При отсутствии лечения она прогрессирует. Около 30% случаев 1 степени можно скорректировать изменением образа жизни без медикаментов.' },
  { q: 'Как понизить давление без таблеток?', a: 'Снижение веса на 1 кг уменьшает давление на 1 мм рт.ст. Ограничение соли до 5 г/сут снижает на 2–8 мм. Регулярная аэробная нагрузка 30 мин/день — на 4–9 мм. Отказ от алкоголя — ещё 2–4 мм. Совместно эти меры могут давать эффект до 20 мм рт.ст.' },
  { q: 'Каковы симптомы высокого давления?', a: 'При давлении до 160/100 симптомы часто отсутствуют — поэтому гипертонию называют «тихим убийцей». При более высоких значениях могут быть: головная боль в затылке, шум в ушах, мелькание «мушек», покраснение лица, учащённое сердцебиение. При давлении выше 180/110 — риск гипертонического криза.' },
  { q: 'Нужно ли принимать таблетки при гипертонии 1 степени?', a: 'Это решает врач индивидуально. При низком общем сердечно-сосудистом риске — сначала 3–6 месяцев изменения образа жизни. При среднем и высоком риске (диабет, курение, ожирение, поражение органов-мишеней) — медикаменты назначаются сразу.' },
];

export default function GipertoniyaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Гипертония'}]} />

        <section className="page-hero">
          <h1>Гипертония: степени, симптомы и классификация</h1>
          <p className="lead">Классификация артериальной гипертонии по степеням согласно рекомендациям ВОЗ и Европейского общества кардиологов (ESC/ESH 2018). Порог диагноза — систематическое давление от 140/90 мм рт.ст.</p>
        </section>

        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {HYPERTENSION_GRADES.map(g => (
            <Link key={g.slug} href={`/gipertoniya/${g.slug}`} className="nav-card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
                <div>
                  <div className="nc-label" style={{fontSize:'1.05rem'}}>Гипертония {g.label}</div>
                  <div className="nc-desc" style={{marginTop:4}}>{g.desc}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{color:g.color,fontWeight:700,fontSize:'1.1rem'}}>
                    {g.sysMin}–{g.sysMax === 999 ? '…' : g.sysMax} / {g.diaMin}–{g.diaMax === 999 ? '…' : g.diaMax}
                  </div>
                  <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>мм рт.ст.</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="card" style={{marginTop:20}}>
          <h2 style={{marginTop:0}}>Классификация давления по ВОЗ и ESC/ESH 2018</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Категория</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систол., мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Диастол., мм рт.ст.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Оптимальное','< 120','< 80','#10b981'],
                  ['Нормальное','120–129','80–84','#22c55e'],
                  ['Высокое нормальное','130–139','85–89','#fbbf24'],
                  ['Гипертония 1 степени','140–159','90–99','#f97316'],
                  ['Гипертония 2 степени','160–179','100–109','#dc2626'],
                  ['Гипертония 3 степени','≥ 180','≥ 110','#991b1b'],
                  ['Изолированная систолическая','≥ 140','< 90','#7c3aed'],
                ].map(([cat,sys,dia,color]) => (
                  <tr key={cat} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:500,color}}>{cat}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{sys}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{dia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Симптомы гипертонии по степеням</h2>
          <p>Коварство гипертонии — длительное бессимптомное течение. Пациент годами не знает о болезни, пока не происходит сосудистое осложнение.</p>
          <div style={{overflowX:'auto',marginTop:12}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Степень</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Типичные симптомы</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Поражение органов</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1 степень','Часто нет. Иногда головная боль утром, лёгкая утомляемость','Органы не поражены'],
                  ['2 степень','Тяжесть в затылке, одышка при нагрузке, снижение остроты зрения','ГЛЖ, микроальбуминурия, сужение артерий сетчатки'],
                  ['3 степень','Постоянная головная боль, боли в груди, мелькание «мушек», отёки','Инсульт, инфаркт, почечная недостаточность, ретинопатия'],
                ].map(([deg, sym, org]) => (
                  <tr key={deg} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:600}}>{deg}</td>
                    <td style={{padding:'9px 12px'}}>{sym}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12,fontSize:'0.88rem',color:'var(--text-dim)'}}>ГЛЖ — гипертрофия левого желудочка. Микроальбуминурия — ранний маркер поражения почек.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Факторы риска развития гипертонии</h2>
          <p>Знание факторов риска позволяет начать профилактику до постановки диагноза.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:12}}>
            <div>
              <h3 style={{marginTop:0,color:'var(--accent)'}}>Изменяемые факторы</h3>
              <ul>
                <li>Избыточный вес и ожирение</li>
                <li>Высокое потребление соли ({'>'} 5 г/сут)</li>
                <li>Курение и алкоголь</li>
                <li>Малоподвижный образ жизни</li>
                <li>Хронический стресс</li>
                <li>Нарушения сна, апноэ</li>
                <li>Дефицит калия и магния</li>
              </ul>
            </div>
            <div>
              <h3 style={{marginTop:0,color:'var(--text-muted)'}}>Неизменяемые факторы</h3>
              <ul>
                <li>Возраст: мужчины {'>'} 55 лет, женщины {'>'} 65 лет</li>
                <li>Наследственность (гипертония у родителей)</li>
                <li>Мужской пол до 55 лет</li>
                <li>Хронические болезни почек</li>
                <li>Сахарный диабет 2 типа</li>
                <li>Дислипидемия</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Лечение и профилактика гипертонии</h2>
          <p>Лечение включает два направления — изменение образа жизни и медикаментозную терапию. При 1 степени и низком сердечно-сосудистом риске начинают с немедикаментозных методов на 3–6 месяцев.</p>
          <div style={{overflowX:'auto',marginTop:12}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Мера</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Снижение давления</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Снижение веса на 10 кг','−5–20 мм рт.ст.'],
                  ['Диета DASH (овощи, фрукты, нежирные молочные)','−8–14 мм рт.ст.'],
                  ['Ограничение соли до 5 г/сут','−2–8 мм рт.ст.'],
                  ['Аэробная нагрузка 30 мин × 5 дней/нед','−4–9 мм рт.ст.'],
                  ['Отказ от алкоголя','−2–4 мм рт.ст.'],
                  ['Отказ от курения','−2–4 мм рт.ст. + снижение сосудистого риска'],
                  ['Медикаментозная терапия (АРА, иАПФ, ТД)','−10–20 мм рт.ст. на один препарат'],
                ].map(([m,r]) => (
                  <tr key={m} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px'}}>{m}</td>
                    <td style={{padding:'9px 12px',textAlign:'center',fontWeight:600,color:'var(--accent)'}}>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{borderLeft:'4px solid var(--orange)'}}>
          <h2 style={{marginTop:0}}>Высокое нормальное давление (предгипертония)</h2>
          <p>Давление 130–139/85–89 мм рт.ст. считается высоким нормальным. Гипертония ещё не диагностирована, но риск её развития значительно выше среднего. У людей с сахарным диабетом, хронической болезнью почек или перенесённым инсультом лечение рекомендуется уже с этого уровня.</p>
          <p>Требуемые действия: ограничение соли, снижение веса, отказ от курения, контроль давления раз в 3 месяца.</p>
        </div>

        <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link href="/gipotoniia" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">Гипотония</div>
            <div className="nc-desc">Пониженное давление {'<'} 90/60</div>
          </Link>
          <Link href="/tablitsa" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">Таблица норм</div>
            <div className="nc-desc">По возрасту и полу</div>
          </Link>
          <Link href="/pozhilyh" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">Пожилые</div>
            <div className="nc-desc">Нормы после 60 лет</div>
          </Link>
        </div>

        <FaqBlock items={faq} title="FAQ по гипертонии" />
      </div>
    </div>
  );
}
