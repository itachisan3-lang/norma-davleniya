import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления при беременности — по триместрам, таблица, когда опасно',
  description: 'Нормальное давление при беременности по триместрам: 1 триместр 100–130/60–85, 2 триместр возможно снижение, 3 триместр не выше 140/90. Гестационная гипертензия и преэклампсия.',
  alternates: { canonical: `${BASE_URL}/beremennyh` },
};

const faq = [
  { q: 'Какое давление норма при беременности?', a: 'Нормальное давление при беременности: систолическое 100–130 мм рт.ст., диастолическое 60–85 мм рт.ст. Давление выше 140/90 при беременности требует немедленного обращения к врачу — это признак гестационной гипертензии.' },
  { q: 'Почему во 2 триместре давление снижается?', a: 'Во 2 триместре (13–26 недель) прогестерон расслабляет стенки сосудов. Это снижает давление на 5–15 мм рт.ст. по сравнению с исходным. Женщины с исходно нормальным давлением могут чувствовать лёгкое головокружение — это физиологически нормально.' },
  { q: 'Что такое гестационная гипертензия?', a: 'Гестационная гипертензия — повышение давления выше 140/90 мм рт.ст. после 20 недели беременности без предшествующей гипертонии и без белка в моче. Встречается у 6–8% беременных. Требует наблюдения и нередко госпитализации.' },
  { q: 'Что такое преэклампсия?', a: 'Преэклампсия — тяжёлое осложнение: давление выше 160/110 + белок в моче более 300 мг/сут. Угрожает жизни матери и ребёнка. При симптомах (сильная головная боль, отёки лица и рук, нарушения зрения) — срочно вызвать скорую.' },
  { q: 'Как снизить давление при беременности без лекарств?', a: 'Постельный режим на левом боку улучшает почечный кровоток и снижает давление. Ограничение соли до 5–6 г/сут, достаточный питьевой режим, отдых, снижение стресса. Самолечение при беременности недопустимо — любое повышение давления требует консультации акушера.' },
];

export default function BeremennyhPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Норма давления при беременности'}]} />

        <section className="page-hero">
          <h1>Норма давления при беременности</h1>
          <p className="lead">Нормальные показатели артериального давления по триместрам, признаки опасных отклонений и тактика при гестационной гипертензии.</p>
        </section>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12,marginBottom:20}}>
          {[
            {href:'/beremennyh/1-trimestr',label:'1 триместр',sub:'1–12 недели',sys:'100–130',dia:'60–85',note:'Близко к исходному'},
            {href:'/beremennyh/2-trimestr',label:'2 триместр',sub:'13–26 недели',sys:'90–120',dia:'60–80',note:'Физиологическое снижение'},
            {href:'/beremennyh/3-trimestr',label:'3 триместр',sub:'27–40 недели',sys:'110–130',dia:'65–85',note:'Постепенный рост'},
          ].map(t => (
            <Link key={t.href} href={t.href} className="nav-card">
              <div className="nc-label">{t.label}</div>
              <div className="nc-value">{t.sys} / {t.dia}</div>
              <div className="nc-desc">{t.sub} · {t.note}</div>
            </Link>
          ))}
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Изменение давления по триместрам — таблица</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Период</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Систолическое, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Диастолическое, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Особенности</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1 триместр (1–12 нед.)','100–130','60–85','Близко к исходному. При рвоте беременных — возможно снижение'],
                  ['2 триместр (13–26 нед.)','90–120','60–80','Прогестерон расслабляет сосуды — давление снижается на 5–15 мм'],
                  ['3 триместр (27–40 нед.)','110–130','65–85','Постепенный рост к исходному. Отёки — дополнительный фактор'],
                  ['Роды','130–150','80–100','Физиологический стресс — временное повышение'],
                  ['После родов (1–2 нед.)','↑ 3–5 дней','↑ 3–5 дней','Возможно повышение в ранний послеродовой период'],
                ].map(([per, sys, dia, note]) => (
                  <tr key={per} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:600}}>{per}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{sys}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{dia}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Гипертензивные расстройства беременности</h2>
          <p>По классификации ВОЗ выделяют четыре основных формы нарушения давления при беременности:</p>
          <div style={{overflowX:'auto',marginTop:12}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Форма</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Давление</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Характеристика</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Хроническая гипертония','>140/90','Существовала до беременности или выявлена до 20 нед.','#f97316'],
                  ['Гестационная гипертензия','>140/90','Появилась после 20 нед., нет белка в моче, проходит после родов','#f97316'],
                  ['Преэклампсия','>140/90 + белок','После 20 нед. с протеинурией > 300 мг/сут или поражением органов','#dc2626'],
                  ['Эклампсия','>160/110','Преэклампсия с судорогами — неотложное состояние','#991b1b'],
                ].map(([form, bp, desc, color]) => (
                  <tr key={form} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:600,color}}>{form}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{bp}</td>
                    <td style={{padding:'9px 12px',fontSize:'0.82rem'}}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Факторы риска гестационной гипертензии</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:8}}>
            <div>
              <h3 style={{marginTop:0}}>Высокий риск</h3>
              <ul>
                <li>Гипертония до беременности</li>
                <li>Преэклампсия в прошлой беременности</li>
                <li>Сахарный диабет 1 или 2 типа</li>
                <li>Болезни почек</li>
                <li>Аутоиммунные заболевания (волчанка, АФС)</li>
              </ul>
            </div>
            <div>
              <h3 style={{marginTop:0}}>Умеренный риск</h3>
              <ul>
                <li>Первая беременность</li>
                <li>Возраст старше 35 лет</li>
                <li>ИМТ {'>'} 30</li>
                <li>Многоплодная беременность</li>
                <li>Семейный анамнез преэклампсии</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Правила измерения давления при беременности</h2>
          <p>Точность измерения особенно важна при беременности — ошибка на 10 мм может повлечь необоснованную госпитализацию или пропуск опасного состояния.</p>
          <ul>
            <li>Измеряйте в положении <strong>сидя</strong>, после 5 минут отдыха. Положение лёжа на спине в 3 триместре повышает давление из-за сдавления полой вены.</li>
            <li>Используйте плечевой тонометр — запястные менее точны при беременности из-за отёков.</li>
            <li>Манжета должна соответствовать размеру плеча: при обхвате {'>'} 33 см — манжета L.</li>
            <li>Фиксируйте результаты в дневник — динамика важнее разовых цифр.</li>
            <li>При значениях {'>'} 140/90 — повторите измерение через 15 минут. Если сохраняется — звоните врачу.</li>
          </ul>
        </div>

        <div className="info-block danger">
          <h3 style={{marginTop:0}}>При давлении выше 160/110 при беременности — срочно вызвать скорую (103)</h3>
          <p>Это признак тяжёлой преэклампсии или угрозы эклампсии. Дополнительные симптомы опасности: сильная головная боль, нарушения зрения («мушки», туман), боль в правом подреберье, внезапные выраженные отёки лица и рук.</p>
        </div>

        <div style={{marginTop:16,display:'flex',gap:12,flexWrap:'wrap'}}>
          <Link href="/beremennyh/1-trimestr" className="nav-card" style={{flex:1,minWidth:130}}>
            <div className="nc-label">1 триместр</div>
            <div className="nc-desc">1–12 недели</div>
          </Link>
          <Link href="/beremennyh/2-trimestr" className="nav-card" style={{flex:1,minWidth:130}}>
            <div className="nc-label">2 триместр</div>
            <div className="nc-desc">13–26 недели</div>
          </Link>
          <Link href="/beremennyh/3-trimestr" className="nav-card" style={{flex:1,minWidth:130}}>
            <div className="nc-label">3 триместр</div>
            <div className="nc-desc">27–40 недели</div>
          </Link>
        </div>

        <FaqBlock items={faq} title="FAQ: давление при беременности" />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/gipertoniya">Степени гипертонии</Link> ·{' '}
          <Link href="/tablitsa">Таблица норм по возрасту</Link> ·{' '}
          <Link href="/tonometr">Как правильно измерять давление</Link>
        </div>
      </div>
    </div>
  );
}
