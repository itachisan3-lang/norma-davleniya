import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { CHILDREN_NORMS, BASE_URL } from '@/lib/data';

export async function generateStaticParams() {
  return CHILDREN_NORMS.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const n = CHILDREN_NORMS.find(c => c.slug === slug);
  if (!n) return {};
  return {
    title: `Норма давления у детей ${n.ageLabel} — таблица показателей`,
    description: `Норма артериального давления у детей ${n.ageLabel}: систолическое ${n.sysMin}–${n.sysMax} мм рт.ст., диастолическое ${n.diaMin}–${n.diaMax} мм рт.ст. Норма пульса ${n.pulseMin}–${n.pulseMax} уд/мин. Таблица и расшифровка.`,
    alternates: { canonical: `${BASE_URL}/deti/${slug}` },
  };
}

export default async function DetiPage({ params }) {
  const { slug } = await params;
  const n = CHILDREN_NORMS.find(c => c.slug === slug);
  if (!n) notFound();

  const idx = CHILDREN_NORMS.findIndex(c => c.slug === slug);
  const prev = idx > 0 ? CHILDREN_NORMS[idx - 1] : null;
  const next = idx < CHILDREN_NORMS.length - 1 ? CHILDREN_NORMS[idx + 1] : null;

  const faq = [
    { q: `Какое давление норма у детей ${n.ageLabel}?`, a: `Нормальное артериальное давление для детей ${n.ageLabel}: систолическое ${n.sysMin}–${n.sysMax} мм рт.ст., диастолическое ${n.diaMin}–${n.diaMax} мм рт.ст.` },
    { q: `Какой пульс нормальный у детей ${n.ageLabel}?`, a: `Нормальная частота сердечных сокращений для детей ${n.ageLabel}: ${n.pulseMin}–${n.pulseMax} ударов в минуту.` },
    { q: 'Как правильно измерить давление ребёнку?', a: 'Ребёнок должен быть в спокойном состоянии. Манжета тонометра подбирается по возрасту. Измерение проводится через 5 минут покоя, сидя или лёжа. Детям до 5 лет рекомендуется измерять лёжа.' },
    { q: 'Когда давление у ребёнка считается повышенным?', a: `Давление считается повышенным, если систолическое превышает ${n.sysMax} мм рт.ст. или диастолическое превышает ${n.diaMax} мм рт.ст. при двух и более измерениях.` },
  ];

  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[
          { label: 'Нормы давления у детей', href: '/deti' },
          { label: n.label },
        ]} />
        <section className="page-hero">
          <h1>Норма давления у детей {n.ageLabel}</h1>
          <p className="lead">Нормальные показатели артериального давления и пульса для детей {n.ageLabel}.</p>
        </section>

        <div className="card">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:16}}>
            <div style={{textAlign:'center',padding:'16px 8px',background:'var(--surface2)',borderRadius:'var(--radius)'}}>
              <div style={{fontSize:'0.75rem',color:'var(--text-muted)',marginBottom:4}}>Систолическое (верхнее)</div>
              <div style={{fontSize:'1.6rem',fontWeight:800,color:'var(--accent)'}}>{n.sysMin}–{n.sysMax}</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>мм рт.ст.</div>
            </div>
            <div style={{textAlign:'center',padding:'16px 8px',background:'var(--surface2)',borderRadius:'var(--radius)'}}>
              <div style={{fontSize:'0.75rem',color:'var(--text-muted)',marginBottom:4}}>Диастолическое (нижнее)</div>
              <div style={{fontSize:'1.6rem',fontWeight:800,color:'var(--accent)'}}>{n.diaMin}–{n.diaMax}</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>мм рт.ст.</div>
            </div>
            <div style={{textAlign:'center',padding:'16px 8px',background:'var(--surface2)',borderRadius:'var(--radius)'}}>
              <div style={{fontSize:'0.75rem',color:'var(--text-muted)',marginBottom:4}}>Пульс (ЧСС)</div>
              <div style={{fontSize:'1.6rem',fontWeight:800,color:'var(--green)'}}>{n.pulseMin}–{n.pulseMax}</div>
              <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>уд/мин</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Особенности давления у детей {n.ageLabel}</h2>
          <p>Норма давления у детей значительно отличается от взрослых и меняется с каждым годом жизни. У ребёнка {n.ageLabel} сосуды более эластичные, поэтому давление ниже, чем у взрослых.</p>
          <p>Систолическое давление {n.sysMin}–{n.sysMax} мм рт.ст. отражает давление при сокращении сердечной мышцы. Диастолическое {n.diaMin}–{n.diaMax} мм рт.ст. — при расслаблении. Пульс {n.pulseMin}–{n.pulseMax} ударов в минуту считается нормальным для этого возраста.</p>
          <h3>Когда нужно обратиться к врачу</h3>
          <ul>
            <li>Систолическое давление выше {n.sysMax + 10} мм рт.ст.</li>
            <li>Диастолическое давление выше {n.diaMax + 8} мм рт.ст.</li>
            <li>Пульс выше {n.pulseMax + 20} или ниже {n.pulseMin - 15} уд/мин</li>
            <li>Жалобы на головную боль, шум в ушах, носовые кровотечения</li>
          </ul>
        </div>

        <div style={{display:'flex',gap:12,marginTop:20,flexWrap:'wrap'}}>
          {prev && <Link href={`/deti/${prev.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
            <div className="nc-desc">← Младше</div>
            <div className="nc-label">{prev.label}</div>
            <div className="nc-value">{prev.sysMin}–{prev.sysMax}/{prev.diaMin}–{prev.diaMax}</div>
          </Link>}
          {next && <Link href={`/deti/${next.slug}`} className="nav-card" style={{flex:1,minWidth:140}}>
            <div className="nc-desc">Старше →</div>
            <div className="nc-label">{next.label}</div>
            <div className="nc-value">{next.sysMin}–{next.sysMax}/{next.diaMin}–{next.diaMax}</div>
          </Link>}
        </div>

        <FaqBlock items={faq} title={`FAQ: давление у детей ${n.ageLabel}`} />
      </div>
    </div>
  );
}
