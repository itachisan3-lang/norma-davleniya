import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import AdBlock from '@/components/AdBlock';
import Link from 'next/link';
import { PRESSURE_VALUES, BASE_URL } from '@/lib/data';

export async function generateStaticParams() {
  return PRESSURE_VALUES.map(v => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const v = PRESSURE_VALUES.find(p => p.slug === slug);
  if (!v) return {};
  const pulse = v.sys - v.dia;
  const action = v.category === 'optimal' || v.category === 'normal'
    ? 'норма для взрослых' : v.category === 'high-normal'
    ? 'высокое нормальное — что делать' : v.category.startsWith('grade')
    ? `${v.categoryLabel} — симптомы и лечение` : 'причины и что делать';
  const title = `Давление ${v.sys} на ${v.dia} мм рт.ст. — ${v.categoryLabel}: ${action}, пульсовое ${pulse} мм рт.ст.`;
  const description = `Давление ${v.sys}/${v.dia}: ${v.desc} Пульсовое давление ${pulse} мм рт.ст. Норма по возрасту, симптомы, рекомендации.`;
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/znachenie/${slug}` },
    openGraph: {
      title: `Давление ${v.sys}/${v.dia} — ${v.categoryLabel}`,
      description: v.desc,
      url: `${BASE_URL}/znachenie/${slug}`,
    },
  };
}

function getNeighbors(slug) {
  const idx = PRESSURE_VALUES.findIndex(v => v.slug === slug);
  return {
    prev: idx > 0 ? PRESSURE_VALUES[idx - 1] : null,
    next: idx < PRESSURE_VALUES.length - 1 ? PRESSURE_VALUES[idx + 1] : null,
  };
}

export default async function ZnacheniePage({ params }) {
  const { slug } = await params;
  const v = PRESSURE_VALUES.find(p => p.slug === slug);
  if (!v) notFound();

  const { prev, next } = getNeighbors(slug);
  const pulse = v.sys - v.dia;

  const faq = [
    { q: `Давление ${v.sys}/${v.dia} — это норма?`, a: `Давление ${v.sys}/${v.dia} мм рт.ст. классифицируется как «${v.categoryLabel}». ${v.desc}` },
    { q: `Что значит верхнее давление ${v.sys}?`, a: `Верхнее (систолическое) давление ${v.sys} мм рт.ст. — это давление крови в артериях в момент сокращения сердца. ${v.sys < 120 ? 'Это нормальный или пониженный показатель.' : v.sys < 140 ? 'Это в пределах нормы или высоко-нормальный показатель.' : 'Это повышенный показатель, требующий медицинского наблюдения.'}` },
    { q: `Что значит нижнее давление ${v.dia}?`, a: `Нижнее (диастолическое) давление ${v.dia} мм рт.ст. — давление в артериях в момент расслабления сердца. ${v.dia < 70 ? 'Значение немного ниже нормы.' : v.dia < 90 ? 'Это нормальный показатель.' : 'Это повышенный показатель.'}` },
    { q: `Что такое пульсовое давление ${pulse}?`, a: `Пульсовое давление — разница между верхним и нижним: ${v.sys} − ${v.dia} = ${pulse} мм рт.ст. ${pulse < 30 ? 'Значение менее 30 мм рт.ст. считается малым — возможны проблемы с насосной функцией сердца.' : pulse <= 60 ? 'Нормальный диапазон пульсового давления 30–60 мм рт.ст.' : 'Значение более 60 мм рт.ст. считается широким — требует внимания кардиолога.'}` },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `Давление ${v.sys} на ${v.dia} — ${v.categoryLabel}`,
    url: `${BASE_URL}/znachenie/${slug}`,
    description: v.desc,
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  };

  return (
    <div className="page-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <Breadcrumb items={[
          { label: 'Расшифровка значений', href: '/znachenie/120-na-80' },
          { label: `${v.sys}/${v.dia}` },
        ]} />

        <section className="page-hero">
          <h1>Давление {v.sys} на {v.dia} — что это значит</h1>
          <p className="lead">{v.desc}</p>
        </section>

        {/* Карточка значения */}
        <div className="value-hero">
          <div>
            <div className="value-numbers">
              {v.sys}<span>/</span>{v.dia}
            </div>
            <div style={{fontSize:'0.82rem',color:'var(--text-muted)',marginTop:4}}>мм рт.ст.</div>
          </div>
          <div className="value-meta">
            <div className="category-label" style={{color: v.color}}>{v.categoryLabel}</div>
            <div className="category-sub">Пульсовое давление: {pulse} мм рт.ст.</div>
            <div className="category-sub" style={{marginTop:6}}>
              <span className="status-chip" style={{color: v.color, borderColor: v.color}}>{v.categoryLabel}</span>
            </div>
          </div>
        </div>

        {/* Подробное описание */}
        <div className="card" style={{marginTop:0}}>
          <h2 style={{marginTop:0}}>Подробная расшифровка</h2>
          <p>{v.desc}</p>

          <h3>Систолическое давление {v.sys} мм рт.ст.</h3>
          <p>
            Верхнее (систолическое) давление отражает давление крови в артериях в момент сокращения
            левого желудочка сердца. Значение {v.sys} мм рт.ст.{' '}
            {v.sys < 100 ? 'является низким, характерным для гипотонии.' :
             v.sys < 120 ? 'находится в нижнем диапазоне нормы.' :
             v.sys < 130 ? 'является оптимальным показателем.' :
             v.sys < 140 ? 'относится к высокому нормальному давлению.' :
             v.sys < 160 ? 'соответствует гипертонии 1 степени.' :
             v.sys < 180 ? 'соответствует гипертонии 2 степени.' :
             'соответствует гипертонии 3 степени.'}
          </p>

          <h3>Диастолическое давление {v.dia} мм рт.ст.</h3>
          <p>
            Нижнее (диастолическое) давление — давление в артериях в период расслабления сердца.
            Значение {v.dia} мм рт.ст.{' '}
            {v.dia < 60 ? 'является низким.' :
             v.dia < 80 ? 'в пределах нормы.' :
             v.dia < 90 ? 'на верхней границе нормы.' :
             v.dia < 100 ? 'соответствует гипертонии 1 степени.' :
             v.dia < 110 ? 'соответствует гипертонии 2 степени.' :
             'соответствует гипертонии 3 степени.'}
          </p>

          <h3>Пульсовое давление: {pulse} мм рт.ст.</h3>
          <p>
            Пульсовое давление (разница между систолическим и диастолическим) составляет {pulse} мм рт.ст.{' '}
            {pulse < 30 ? 'Значение ниже 30 мм рт.ст. требует обследования сердца.' :
             pulse <= 60 ? 'Это нормальный диапазон (30–60 мм рт.ст.).' :
             'Широкое пульсовое давление (более 60 мм рт.ст.) требует консультации кардиолога.'}
          </p>
        </div>

        {/* Что делать */}
        <div className={`info-block ${v.category === 'optimal' || v.category === 'normal' ? 'ok' : v.category === 'high-normal' || v.category === 'low-normal' ? 'warn' : 'danger'}`} style={{marginTop:16}}>
          <h3 style={{marginTop:0}}>Что делать при давлении {v.sys}/{v.dia}</h3>
          <p>
            {v.category === 'optimal' && 'Давление в норме. Продолжайте вести здоровый образ жизни: регулярная физическая активность, сбалансированное питание, нормальный сон.'}
            {v.category === 'normal' && 'Давление в норме. Рекомендуется контролировать его раз в год и поддерживать здоровый образ жизни.'}
            {v.category === 'low-normal' && 'Давление немного ниже нормы. При отсутствии симптомов (головокружение, слабость) — это может быть индивидуальная норма. При симптомах — обратитесь к врачу.'}
            {v.category === 'low' && 'Пониженное давление. Рекомендуется контролировать самочувствие. При головокружении, слабости или обмороках — обратитесь к терапевту.'}
            {v.category === 'very-low' && 'Критически низкое давление. Требуется немедленная медицинская помощь.'}
            {v.category === 'high-normal' && 'Давление на верхней границе нормы. Скорректируйте образ жизни: ограничьте соль до 5 г/сут, бросьте курить, нормализуйте вес. Измеряйте давление регулярно.'}
            {v.category === 'grade1' && 'Гипертония 1 степени. Обратитесь к терапевту или кардиологу. Измеряйте давление утром и вечером. Ограничьте соль, алкоголь. Возможно назначение медикаментов.'}
            {v.category === 'grade2' && 'Гипертония 2 степени. Необходима медикаментозная терапия. Срочно обратитесь к кардиологу. Регулярный контроль давления обязателен.'}
            {v.category === 'grade3' && 'Гипертония 3 степени. Жизнеугрожающее состояние. Немедленно вызовите скорую помощь или обратитесь в приёмное отделение больницы.'}
          </p>
        </div>

        {/* Навигация между значениями */}
        <div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
          {prev && (
            <Link href={`/znachenie/${prev.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
              <div className="nc-desc">← Меньше</div>
              <div className="nc-label">{prev.sys}/{prev.dia}</div>
              <div className="nc-value" style={{color:prev.color}}>{prev.categoryLabel}</div>
            </Link>
          )}
          {next && (
            <Link href={`/znachenie/${next.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
              <div className="nc-desc">Больше →</div>
              <div className="nc-label">{next.sys}/{next.dia}</div>
              <div className="nc-value" style={{color:next.color}}>{next.categoryLabel}</div>
            </Link>
          )}
        </div>

        {/* Inline ad between sections */}
        <div className="ad-desktop-only" style={{margin:'24px 0'}}>
          <AdBlock blockId="437094" className="ad-center" />
        </div>
        <div className="ad-mobile-only" style={{margin:'16px 0'}}>
          <AdBlock blockId="437127" className="ad-center" />
        </div>

        <FaqBlock items={faq} title={`FAQ: давление ${v.sys}/${v.dia}`} />

        <div style={{marginTop:24,fontSize:'0.82rem',color:'var(--text-dim)'}}>
          <Link href="/tablitsa">Таблица норм по возрасту</Link> ·{' '}
          <Link href="/gipertoniya">Степени гипертонии</Link> ·{' '}
          <Link href="/stati/kakoe-davlenie-schitaetsya-normalnym">Что считается нормальным</Link>
        </div>
      </div>
    </div>
  );
}
