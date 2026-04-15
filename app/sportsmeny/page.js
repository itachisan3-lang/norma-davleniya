import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у спортсменов — в покое и при нагрузке, таблица',
  description: 'Нормальное давление у спортсменов: в покое 100–130/60–80 мм рт.ст., пульс 40–60 уд/мин. Допустимые значения при нагрузке. Когда высокое давление у спортсмена опасно.',
  alternates: { canonical: `${BASE_URL}/sportsmeny` },
};

const faq = [
  { q: 'Какое давление норма у спортсменов?', a: 'У тренированных спортсменов в покое давление обычно 100–120/60–80 мм рт.ст. — чуть ниже среднего для возраста. Пульс в покое 40–60 уд/мин. Это физиологическая адаптация сердца к регулярным нагрузкам («спортивное сердце»).' },
  { q: 'Какое давление нормально при физической нагрузке?', a: 'При интенсивной нагрузке систолическое давление может подниматься до 180–200 мм рт.ст. — это физиологическая норма. Диастолическое при этом остаётся стабильным или незначительно снижается. После нагрузки давление должно вернуться к исходному за 5–10 минут.' },
  { q: 'Когда высокое давление у спортсмена опасно?', a: 'Тревожные признаки: систолическое давление при умеренной нагрузке выше 210 мм рт.ст., давление не снижается через 20–30 минут после тренировки, диастолическое при нагрузке превышает 110 мм рт.ст. Необходима консультация спортивного кардиолога.' },
  { q: 'Может ли занятие спортом навсегда снизить давление?', a: 'Да. Регулярные аэробные тренировки (30 минут × 5 дней/нед) снижают давление покоя на 4–9 мм рт.ст. при гипертонии. Эффект сохраняется при продолжении тренировок. Это сопоставимо с действием одного гипотензивного препарата.' },
  { q: 'Что такое гипертрофия левого желудочка у спортсменов?', a: 'У спортсменов развивается физиологическая гипертрофия левого желудочка — «спортивное сердце». Это адаптационное утолщение стенок, не связанное с болезнью. Отличается от патологической гипертрофии при гипертонии по данным ЭхоКГ. Требует наблюдения кардиолога.' },
];

export default function SportsmenyPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Нормы у спортсменов'}]} />

        <section className="page-hero">
          <h1>Норма давления у спортсменов</h1>
          <p className="lead">Нормальные показатели артериального давления и пульса у тренированных людей — в покое и при физических нагрузках.</p>
        </section>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:12,marginBottom:20}}>
          {[
            {label:'Давление в покое',val:'100–130/60–80',unit:'мм рт.ст.',color:'var(--green)'},
            {label:'Пульс в покое',val:'40–60',unit:'уд/мин',color:'var(--accent)'},
            {label:'Давление при нагрузке',val:'до 200/90',unit:'мм рт.ст.',color:'var(--orange)'},
            {label:'Пульс при нагрузке',val:'150–190',unit:'уд/мин',color:'var(--orange)'},
          ].map(m => (
            <div key={m.label} className="card" style={{textAlign:'center'}}>
              <div style={{fontSize:'0.78rem',color:'var(--text-muted)',marginBottom:4}}>{m.label}</div>
              <div style={{fontSize:'1.6rem',fontWeight:900,color:m.color}}>{m.val}</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>{m.unit}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Как физические нагрузки влияют на давление</h2>
          <p>Регулярные аэробные тренировки запускают долгосрочную адаптацию сердечно-сосудистой системы. Это не болезнь, а физиологически выгодная перестройка:</p>
          <div style={{overflowX:'auto',marginTop:12}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Параметр</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Нетренированный человек</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Тренированный спортсмен</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Механизм</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Систолическое давление покоя','115–130 мм','100–120 мм','Снижение сосудистого сопротивления'],
                  ['Диастолическое давление покоя','75–85 мм','60–75 мм','Улучшение расслабления миокарда'],
                  ['Пульс покоя','60–90 уд/мин','40–60 уд/мин','Увеличение ударного объёма'],
                  ['Объём сердца','600–800 мл','800–1000+ мл','Гипертрофия левого желудочка'],
                  ['Восстановление после нагрузки','10–30 мин','3–10 мин','Более активная парасимпатика'],
                ].map(([par, unt, tr, mech]) => (
                  <tr key={par} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:500}}>{par}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{unt}</td>
                    <td style={{padding:'9px 12px',textAlign:'center',fontWeight:600,color:'var(--green)'}}>{tr}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{mech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Давление при нагрузках разной интенсивности</h2>
          <p>Систолическое давление растёт пропорционально интенсивности нагрузки — это норма. Диастолическое практически не меняется или незначительно снижается.</p>
          <div style={{overflowX:'auto',marginTop:12}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Интенсивность</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систолическое, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Пульс, уд/мин</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Оценка</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Покой','100–120','40–60','Норма','#22c55e'],
                  ['Лёгкая ходьба','120–140','60–80','Норма','#22c55e'],
                  ['Умеренная нагрузка (50% МПК)','140–170','80–130','Норма','#22c55e'],
                  ['Интенсивная нагрузка (75% МПК)','170–190','130–160','Допустимо','#fbbf24'],
                  ['Максимальная нагрузка (95% МПК)','190–210','160–190','Допустимо кратковременно','#f97316'],
                  ['{'>'} 210 при умеренной нагрузке','≥210','любой','Требует обследования','#dc2626'],
                ].map(([int, sys, pul, ev, color]) => (
                  <tr key={int} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px'}}>{int}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{sys}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{pul}</td>
                    <td style={{padding:'9px 12px',color,fontWeight:500,fontSize:'0.82rem'}}>{ev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Медицинский допуск к спорту — на что смотрит кардиолог</h2>
          <p>Перед профессиональными и любительскими соревнованиями рекомендуется кардиологическое обследование. Особенно важно для людей старше 35 лет, начинающих интенсивные тренировки.</p>
          <ul>
            <li><strong>ЭКГ в покое и при нагрузке</strong> — исключение нарушений ритма и ишемии.</li>
            <li><strong>ЭхоКГ</strong> — оценка структуры сердца, исключение гипертрофической кардиомиопатии.</li>
            <li><strong>Суточное мониторирование давления (СМАД)</strong> — выявление скрытой гипертонии.</li>
            <li><strong>Нагрузочный тест (велоэргометрия)</strong> — оценка реакции давления на нагрузку.</li>
          </ul>
          <p>При давлении в покое {'>'} 160/100 интенсивные аэробные и особенно силовые нагрузки противопоказаны до нормализации давления под контролем врача.</p>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Силовые тренировки и давление</h2>
          <p>Силовые (изометрические) нагрузки дают наибольший подъём давления во время выполнения упражнения. При натуживании с задержкой дыхания (маневр Вальсальвы) систолическое давление может кратковременно достигать 250–300 мм рт.ст. Это кратковременная нагрузка, но она создаёт высокий риск при гипертонии и сердечно-сосудистых заболеваниях.</p>
          <p>Для людей с гипертонией предпочтительны аэробные нагрузки (ходьба, плавание, велосипед) с умеренной интенсивностью. При желании заниматься силовым тренингом — начинать с лёгких весов, избегать задержки дыхания.</p>
        </div>

        <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link href="/sportsmeny/posle-trenirovki" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">После тренировки</div>
            <div className="nc-desc">Норма и патология</div>
          </Link>
          <Link href="/puls/sportsmeny" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">Пульс спортсменов</div>
            <div className="nc-desc">40–60 уд/мин в покое</div>
          </Link>
          <Link href="/tablitsa" className="nav-card" style={{flex:1,minWidth:160}}>
            <div className="nc-label">Таблица норм</div>
            <div className="nc-desc">По возрасту и полу</div>
          </Link>
        </div>

        <FaqBlock items={faq} title="FAQ: давление у спортсменов" />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/gipertoniya">Гипертония — степени и лечение</Link> ·{' '}
          <Link href="/gipotoniia">Гипотония</Link> ·{' '}
          <Link href="/puls">Нормы пульса</Link>
        </div>
      </div>
    </div>
  );
}
