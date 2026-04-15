import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { PULSE_GROUPS, BASE_URL } from '@/lib/data';

export async function generateStaticParams() {
  return PULSE_GROUPS.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = PULSE_GROUPS.find(p => p.slug === slug);
  if (!g) return {};
  return {
    title: `Норма пульса у ${g.label.toLowerCase()} — ${g.min}–${g.max} уд/мин, таблица`,
    description: `Нормальный пульс у ${g.label.toLowerCase()} (${g.ageLabel}): ${g.min}–${g.max} ударов в минуту. Таблица нормы ЧСС, причины отклонений, когда обращаться к врачу.`,
    alternates: { canonical: `${BASE_URL}/puls/${slug}` },
  };
}

export default async function PulsPage({ params }) {
  const { slug } = await params;
  const g = PULSE_GROUPS.find(p => p.slug === slug);
  if (!g) notFound();

  const faq = [
    { q: `Какой пульс норма у ${g.label.toLowerCase()}?`, a: `Нормальный пульс у ${g.label.toLowerCase()} (${g.ageLabel}): ${g.min}–${g.max} ударов в минуту.` },
    { q: 'Когда пульс считается высоким?', a: `Пульс выше ${g.max + 10} уд/мин в состоянии покоя (тахикардия) требует внимания. Причины: стресс, температура, анемия, гипертиреоз.` },
    { q: 'Когда пульс считается низким?', a: `Пульс ниже ${g.min - 10} уд/мин (брадикардия) может быть нормой для спортсменов, но при головокружении и слабости — повод обратиться к кардиологу.` },
    { q: 'Как измерить пульс?', a: 'Нащупайте пульс на запястье или шее. Считайте удары за 30 секунд и умножьте на 2. Измеряйте в состоянии покоя, через 5–10 минут после последней физической нагрузки.' },
  ];

  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[
          { label: 'Норма пульса', href: '/tablitsa/puls' },
          { label: g.label },
        ]} />
        <section className="page-hero">
          <h1>Норма пульса у {g.label.toLowerCase()}</h1>
          <p className="lead">Нормальная частота сердечных сокращений (ЧСС) у {g.label.toLowerCase()} ({g.ageLabel}): {g.min}–{g.max} ударов в минуту.</p>
        </section>

        <div className="card">
          <div style={{textAlign:'center',padding:'24px 16px'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:8}}>Норма пульса у {g.label.toLowerCase()}</div>
            <div style={{fontSize:'3rem',fontWeight:900,color:'var(--green)'}}>{g.min}–{g.max}</div>
            <div style={{color:'var(--text-dim)',marginTop:4}}>ударов в минуту</div>
          </div>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Подробно о норме пульса у {g.label.toLowerCase()}</h2>
          <p>Нормальная частота сердечных сокращений (ЧСС) у {g.label.toLowerCase()} составляет {g.min}–{g.max} ударов в минуту в состоянии покоя.</p>
          <ul>
            <li>Ниже {g.min} уд/мин — брадикардия (замедление). У спортсменов может быть нормой.</li>
            <li>{g.min}–{g.max} уд/мин — норма в покое.</li>
            <li>Выше {g.max} уд/мин — тахикардия (учащение). Требует выяснения причины.</li>
          </ul>
        </div>

        <FaqBlock items={faq} title={`FAQ: пульс у ${g.label.toLowerCase()}`} />

        <div style={{marginTop:24}}>
          <Link href="/tablitsa/puls">← Таблица норм пульса по всем возрастам</Link>
        </div>
      </div>
    </div>
  );
}
