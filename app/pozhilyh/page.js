import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { ADULT_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у пожилых людей — после 60, 70, 80 лет, таблица',
  description: 'Нормальное давление у пожилых людей после 60, 70 и 80 лет. Таблица норм, особенности возрастной гипертонии, ортостатическая гипотония, когда давление критически высокое.',
  alternates: { canonical: `${BASE_URL}/pozhilyh` },
};

const elderNorms = ADULT_NORMS.filter(n => ['60-65-let','65-70-let','70-75-let','75-80-let','80-i-starshe'].includes(n.slug));

const faq = [
  { q: 'Какое давление норма у пожилых после 60 лет?', a: 'После 60 лет нормальным считается давление до 140–150/85–90 мм рт.ст. Точные нормы зависят от состояния здоровья. У людей с сахарным диабетом или хронической болезнью почек целевое давление жёстче — до 130/80 мм рт.ст.' },
  { q: 'Почему давление растёт с возрастом?', a: 'Стенки артерий постепенно теряют эластичность (артериосклероз). Сосуды становятся жёсткими — сердцу нужно больше усилий для продвижения крови. Это повышает систолическое давление. Диастолическое при этом может оставаться нормальным или даже снижаться, увеличивая пульсовое давление.' },
  { q: 'Какое давление опасно для пожилых?', a: 'Давление выше 180/110 у пожилых — критически высокое, требует немедленной медицинской помощи. Опасно и резкое снижение (ниже 110/60) — может вызвать обмороки и падения. У пожилых с хрупкостью костей перелом при падении из-за обморока от гипотонии — серьёзная угроза.' },
  { q: 'Что такое ортостатическая гипотония у пожилых?', a: 'Ортостатическая гипотония — падение давления на 20/10 мм рт.ст. и более при переходе из положения лёжа в положение стоя. Встречается у 20–30% пожилых. Проявляется головокружением и потемнением в глазах при вставании. Главная опасность — обморок и падение.' },
  { q: 'Нужно ли лечить давление 150/90 у человека 75 лет?', a: 'Да. Исследования HYVET, SPRINT и STEP показали, что снижение давления у пожилых до 130–140/80 мм рт.ст. уменьшает риск инсульта на 30–40% и инфаркта на 20–25%. Ключевое условие — снижение постепенное, без резких перепадов.' },
];

export default function PozhilyhPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Нормы у пожилых'}]} />

        <section className="page-hero">
          <h1>Норма давления у пожилых людей</h1>
          <p className="lead">Нормальные показатели давления после 60, 70 и 80 лет. Особенности возрастной гипертонии, ортостатическая гипотония и риски.</p>
        </section>

        <div className="cards-grid">
          {elderNorms.map(n => (
            <Link key={n.slug} href={`/vozrast/${n.slug}`} className="nav-card">
              <div className="nc-label">{n.label}</div>
              <div className="nc-value">М: {n.sysMinM}–{n.sysMaxM}/{n.diaMinM}–{n.diaMaxM}</div>
              <div className="nc-desc">Ж: {n.sysMinW}–{n.sysMaxW}/{n.diaMinW}–{n.diaMaxW}</div>
            </Link>
          ))}
        </div>

        <div className="card" style={{marginTop:20}}>
          <h2 style={{marginTop:0}}>Таблица норм давления после 60 лет</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Возраст</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Мужчины, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Женщины, мм рт.ст.</th>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Особенности</th>
                </tr>
              </thead>
              <tbody>
                {elderNorms.map(n => (
                  <tr key={n.slug} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px',fontWeight:500}}>
                      <Link href={`/vozrast/${n.slug}`} style={{color:'var(--accent)',textDecoration:'none'}}>{n.label}</Link>
                    </td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{n.sysMinM}–{n.sysMaxM}/{n.diaMinM}–{n.diaMaxM}</td>
                    <td style={{padding:'9px 12px',textAlign:'center'}}>{n.sysMinW}–{n.sysMaxW}/{n.diaMinW}–{n.diaMaxW}</td>
                    <td style={{padding:'9px 12px',color:'var(--text-dim)',fontSize:'0.82rem'}}>
                      {n.slug === '60-65-let' && 'Риск гипертонии нарастает. Контроль 2 раза/год.'}
                      {n.slug === '65-70-let' && 'У женщин давление выше из-за менопаузы. Контроль ежемесячно.'}
                      {n.slug === '70-75-let' && 'Риск ортостатической гипотонии. Широкое пульсовое давление.'}
                      {n.slug === '75-80-let' && 'Изолированная систолическая гипертония — наиболее частая форма.'}
                      {n.slug === '80-i-starshe' && 'Лечение всё равно снижает риск инсульта. Целевое — 130–150/80 мм.'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Особенности давления в пожилом возрасте</h2>
          <p>У пожилых людей характер изменений давления принципиально отличается от среднего возраста:</p>
          <ul>
            <li><strong>Изолированная систолическая гипертония</strong> — систолическое выше 140, диастолическое нормальное. Наиболее частая форма у людей старше 65 лет. Причина — потеря эластичности крупных артерий (аорта, подвздошные артерии).</li>
            <li><strong>Широкое пульсовое давление</strong> — разница между систолическим и диастолическим более 60 мм рт.ст. Независимый фактор риска сердечно-сосудистых осложнений у пожилых.</li>
            <li><strong>Повышенная вариабельность давления</strong> — у пожилых давление колеблется сильнее в течение суток. Это увеличивает органный стресс и связано с худшим прогнозом.</li>
            <li><strong>Утренний подъём давления</strong> — в первые часы после пробуждения давление резко растёт. Именно в это время у пожилых наиболее высок риск инсульта и инфаркта.</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Ортостатическая гипотония у пожилых</h2>
          <p>При быстром вставании давление резко падает — кровь «уходит» в нижние конечности, мозг получает меньше крови. У молодых это компенсируется рефлекторным сужением сосудов, у пожилых — эта реакция замедлена.</p>
          <div className="info-block warn" style={{marginTop:12}}>
            <h3 style={{marginTop:0}}>Как проверить ортостатическую гипотонию</h3>
            <p>Измерьте давление лёжа (после 5 мин отдыха). Встаньте и через 1 минуту измерьте стоя. Падение систолического на ≥ 20 мм или диастолического на ≥ 10 мм — признак ортостатической гипотонии. При головокружении при вставании — обязательно сообщите врачу.</p>
          </div>
          <h3>Как снизить риск падений</h3>
          <ul>
            <li>Вставайте медленно: сначала сядьте на кровати, посидите 30 секунд, только потом вставайте.</li>
            <li>Используйте опору (спинку стула, перила) при вставании.</li>
            <li>Пейте достаточно жидкости — обезвоживание усиливает ортостатическую гипотонию.</li>
            <li>Компрессионные чулки снижают отток крови к ногам.</li>
            <li>Обсудите с врачом дозы препаратов, снижающих давление.</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Целевые уровни давления у пожилых по рекомендациям</h2>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.88rem'}}>
              <thead>
                <tr style={{background:'var(--surface2)'}}>
                  <th style={{padding:'10px 12px',textAlign:'left',borderBottom:'2px solid var(--border)'}}>Группа пациентов</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Целевое систолическое</th>
                  <th style={{padding:'10px 12px',textAlign:'center',borderBottom:'2px solid var(--border)'}}>Целевое диастолическое</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['65–79 лет без тяжёлых сопутствующих заболеваний','130–139 мм рт.ст.','70–79 мм рт.ст.'],
                  ['65–79 лет с хрупкостью (frailty)','140–150 мм рт.ст.','70–79 мм рт.ст.'],
                  ['80 лет и старше','130–150 мм рт.ст.','70–79 мм рт.ст.'],
                  ['С сахарным диабетом 2 типа','130–139 мм рт.ст.','70–79 мм рт.ст.'],
                  ['С хронической болезнью почек','130–139 мм рт.ст.','70–79 мм рт.ст.'],
                ].map(([gr, sys, dia]) => (
                  <tr key={gr} style={{borderBottom:'1px solid var(--border)'}}>
                    <td style={{padding:'9px 12px'}}>{gr}</td>
                    <td style={{padding:'9px 12px',textAlign:'center',fontWeight:600}}>{sys}</td>
                    <td style={{padding:'9px 12px',textAlign:'center',fontWeight:600}}>{dia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12,fontSize:'0.82rem',color:'var(--text-dim)'}}>Источник: Европейское общество кардиологов (ESC/ESH), рекомендации 2018 г. + обновление 2023 г.</p>
        </div>

        <FaqBlock items={faq} title="FAQ: давление у пожилых" />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/gipertoniya">Гипертония — степени и лечение</Link> ·{' '}
          <Link href="/tablitsa">Таблица норм по возрасту</Link> ·{' '}
          <Link href="/tonometr">Как измерять давление</Link>
        </div>
      </div>
    </div>
  );
}
