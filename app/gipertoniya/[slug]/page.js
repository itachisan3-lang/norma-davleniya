import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { HYPERTENSION_GRADES, PRESSURE_VALUES, BASE_URL } from '@/lib/data';

export async function generateStaticParams() {
  return HYPERTENSION_GRADES.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = HYPERTENSION_GRADES.find(h => h.slug === slug);
  if (!g) return {};
  return {
    title: `Гипертония ${g.label}: давление ${g.sysMin}–${g.sysMax}/${g.diaMin}–${g.diaMax} мм рт.ст.`,
    description: `Гипертония ${g.label}: систолическое ${g.sysMin}–${g.sysMax}, диастолическое ${g.diaMin}–${g.diaMax} мм рт.ст. ${g.desc} Симптомы, риски, лечение.`,
    alternates: { canonical: `${BASE_URL}/gipertoniya/${slug}` },
  };
}

export default async function GipertoniyaGrade({ params }) {
  const { slug } = await params;
  const g = HYPERTENSION_GRADES.find(h => h.slug === slug);
  if (!g) notFound();

  const gradeValues = PRESSURE_VALUES.filter(v => v.category === `grade${g.slug.charAt(0)}`);

  const faq = [
    { q: `Какое давление при гипертонии ${g.label}?`, a: `При гипертонии ${g.label} систолическое давление ${g.sysMin === 180 ? '180 и выше' : `${g.sysMin}–${g.sysMax}`} мм рт.ст. и/или диастолическое ${g.diaMin === 110 ? '110 и выше' : `${g.diaMin}–${g.diaMax}`} мм рт.ст.` },
    { q: `Можно ли вылечить гипертонию ${g.label}?`, a: g.slug === '1-stepeni' ? 'Гипертония 1 степени в ряде случаев корректируется изменением образа жизни без медикаментов: снижение веса, ограничение соли, физическая активность.' : 'Гипертония 2–3 степени требует постоянной медикаментозной терапии. Цель лечения — контроль давления, а не полное излечение.' },
    { q: 'Когда вызывать скорую при гипертонии?', a: 'Скорую следует вызвать при давлении выше 180/110 мм рт.ст., сопровождающемся головной болью, болью в груди, одышкой, нарушениями зрения или речи.' },
  ];

  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[
          { label: 'Гипертония', href: '/gipertoniya' },
          { label: g.label },
        ]} />
        <section className="page-hero">
          <h1>Гипертония {g.label}</h1>
          <p className="lead">{g.desc}</p>
        </section>

        <div className="card" style={{borderLeft:`4px solid ${g.color}`}}>
          <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
            <div>
              <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>Систолическое</div>
              <div style={{fontSize:'1.8rem',fontWeight:900,color:g.color}}>{g.sysMin}–{g.sysMax === 999 ? '…' : g.sysMax}</div>
            </div>
            <div style={{color:'var(--text-dim)',fontSize:'1.5rem'}}>/</div>
            <div>
              <div style={{fontSize:'0.8rem',color:'var(--text-muted)'}}>Диастолическое</div>
              <div style={{fontSize:'1.8rem',fontWeight:900,color:g.color}}>{g.diaMin}–{g.diaMax === 999 ? '…' : g.diaMax}</div>
            </div>
            <div style={{color:'var(--text-dim)',fontSize:'0.85rem'}}>мм рт.ст.</div>
          </div>
        </div>

        {gradeValues.length > 0 && (
          <div style={{marginTop:20}}>
            <h2>Конкретные значения давления при гипертонии {g.label}</h2>
            <div className="cards-grid">
              {gradeValues.map(v => (
                <Link key={v.slug} href={`/znachenie/${v.slug}`} className="nav-card">
                  <div className="nc-label">{v.sys}/{v.dia}</div>
                  <div className="nc-value" style={{color:v.color}}>{v.categoryLabel}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <FaqBlock items={faq} title={`FAQ: гипертония ${g.label}`} />
        <div style={{marginTop:20}}><Link href="/gipertoniya">← Все степени гипертонии</Link></div>
      </div>
    </div>
  );
}
