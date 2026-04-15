import Calculator from '@/components/Calculator';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { ADULT_NORMS, CHILDREN_NORMS, PRESSURE_VALUES, ARTICLES, FAQ_MAIN, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления по возрасту — таблица и калькулятор онлайн',
  description: 'Нормы артериального давления по возрасту и полу. Калькулятор онлайн: введите возраст и узнайте свою норму. Таблицы для детей, взрослых, пожилых, беременных. Расшифровка показаний тонометра.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Норма давления по возрасту — таблица и калькулятор онлайн',
    description: 'Нормы артериального давления по возрасту и полу. Калькулятор онлайн, таблицы, расшифровка значений тонометра.',
    url: BASE_URL,
  },
};

export default function HomePage() {
  const featuredValues = PRESSURE_VALUES.filter(v =>
    ['90-na-60','120-na-80','130-na-90','140-na-90','160-na-100'].includes(v.slug)
  );

  return (
    <div className="page-wrap">
      <div className="container">
        {/* Hero */}
        <section className="page-hero">
          <h1>Норма давления по возрасту</h1>
          <p className="lead">
            Калькулятор артериального давления, таблицы норм по возрасту и полу,
            расшифровка показаний тонометра — всё в одном месте.
          </p>
        </section>

        {/* Калькулятор */}
        <Calculator />

        {/* Быстрые ссылки по сегментам */}
        <section aria-labelledby="segments-heading" style={{marginTop:36}}>
          <h2 id="segments-heading">Нормы давления по категориям</h2>
          <div className="cards-grid">
            <Link href="/tablitsa" className="nav-card">
              <div className="nc-label">Сводная таблица</div>
              <div className="nc-value">Все возрасты</div>
              <div className="nc-desc">Нормы для мужчин и женщин</div>
            </Link>
            <Link href="/deti" className="nav-card">
              <div className="nc-label">Дети</div>
              <div className="nc-value">0–17 лет</div>
              <div className="nc-desc">По каждому году жизни</div>
            </Link>
            <Link href="/podrostkov" className="nav-card">
              <div className="nc-label">Подростки</div>
              <div className="nc-value">12–18 лет</div>
              <div className="nc-desc">Нормы в период роста</div>
            </Link>
            <Link href="/beremennyh" className="nav-card">
              <div className="nc-label">Беременные</div>
              <div className="nc-value">По триместрам</div>
              <div className="nc-desc">1, 2 и 3 триместры</div>
            </Link>
            <Link href="/pozhilyh" className="nav-card">
              <div className="nc-label">Пожилые</div>
              <div className="nc-value">60+ лет</div>
              <div className="nc-desc">Нормы после 60, 70, 80 лет</div>
            </Link>
            <Link href="/sportsmeny" className="nav-card">
              <div className="nc-label">Спортсмены</div>
              <div className="nc-value">Активный образ жизни</div>
              <div className="nc-desc">При нагрузках и в покое</div>
            </Link>
            <Link href="/tablitsa/puls" className="nav-card">
              <div className="nc-label">Норма пульса</div>
              <div className="nc-value">Все возрасты</div>
              <div className="nc-desc">Таблица ЧСС по возрасту</div>
            </Link>
            <Link href="/gipertoniya" className="nav-card">
              <div className="nc-label">Гипертония</div>
              <div className="nc-value">1–3 степень</div>
              <div className="nc-desc">Критерии и классификация</div>
            </Link>
          </div>
        </section>

        {/* Расшифровка значений */}
        <section aria-labelledby="values-heading" style={{marginTop:36}}>
          <h2 id="values-heading">Расшифровка значений тонометра</h2>
          <p style={{color:'var(--text-muted)',marginBottom:16}}>
            Введите в строку поиска или выберите своё значение давления — узнайте, что оно означает.
          </p>
          <div className="cards-grid">
            {featuredValues.map(v => (
              <Link key={v.slug} href={`/znachenie/${v.slug}`} className="nav-card">
                <div className="nc-label" style={{fontSize:'1.1rem',fontWeight:800}}>{v.sys}/{v.dia}</div>
                <div className="nc-value" style={{color: v.color}}>{v.categoryLabel}</div>
                <div className="nc-desc">{v.desc.slice(0,60)}…</div>
              </Link>
            ))}
            <Link href="/znachenie/120-na-80" className="nav-card" style={{gridColumn:'span 1'}}>
              <div className="nc-label">Все значения →</div>
              <div className="nc-desc">45+ страниц расшифровок</div>
            </Link>
          </div>
        </section>

        {/* Краткая таблица норм — статический рендер для Яндекса */}
        <section aria-labelledby="quick-table-heading" style={{marginTop:36}}>
          <h2 id="quick-table-heading">Таблица норм давления по возрасту (краткая)</h2>
          <div className="table-wrap">
            <table className="data-table" aria-label="Краткая таблица норм артериального давления по возрасту">
              <thead>
                <tr>
                  <th scope="col">Возраст</th>
                  <th scope="col">Мужчины</th>
                  <th scope="col">Женщины</th>
                </tr>
              </thead>
              <tbody>
                {ADULT_NORMS.filter((_, i) => i % 2 === 0).map(n => (
                  <tr key={n.slug}>
                    <td><Link href={`/vozrast/${n.slug}`}>{n.label}</Link></td>
                    <td>{n.sysMinM}–{n.sysMaxM} / {n.diaMinM}–{n.diaMaxM}</td>
                    <td>{n.sysMinW}–{n.sysMaxW} / {n.diaMinW}–{n.diaMaxW}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop:10,fontSize:'0.82rem',color:'var(--text-dim)'}}>
            <Link href="/tablitsa">Полная таблица по всем возрастам →</Link>
          </p>
        </section>

        {/* Статьи */}
        <section aria-labelledby="articles-heading" style={{marginTop:36}}>
          <h2 id="articles-heading">Статьи о давлении</h2>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {ARTICLES.map(a => (
              <Link key={a.slug} href={`/stati/${a.slug}`} className="nav-card" style={{display:'block'}}>
                <div className="nc-label">{a.title}</div>
                <div className="nc-desc" style={{marginTop:4}}>{a.description.slice(0,100)}…</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Статичные ссылки на все возрастные страницы — для Яндекса */}
        <nav aria-label="Нормы давления по возрасту" style={{marginTop:36}}>
          <h2>Нормы давления по возрастным группам</h2>
          <ul style={{display:'flex',flexWrap:'wrap',gap:'8px 16px',listStyle:'none',padding:0,margin:0}}>
            {ADULT_NORMS.map(n => (
              <li key={n.slug}>
                <Link href={`/vozrast/${n.slug}`}>Давление в {n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Нормы давления у детей" style={{marginTop:20}}>
          <h2>Нормы давления у детей</h2>
          <ul style={{display:'flex',flexWrap:'wrap',gap:'8px 16px',listStyle:'none',padding:0,margin:0}}>
            {CHILDREN_NORMS.map(n => (
              <li key={n.slug}>
                <Link href={`/deti/${n.slug}`}>Давление у детей {n.ageLabel}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Расшифровка значений давления" style={{marginTop:20}}>
          <h2>Расшифровка значений давления</h2>
          <ul style={{display:'flex',flexWrap:'wrap',gap:'8px 16px',listStyle:'none',padding:0,margin:0}}>
            {PRESSURE_VALUES.map(v => (
              <li key={v.slug}>
                <Link href={`/znachenie/${v.slug}`}>Давление {v.sys}/{v.dia}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* FAQ */}
        <div style={{marginTop:36}}>
          <FaqBlock items={FAQ_MAIN} />
        </div>
      </div>
    </div>
  );
}
