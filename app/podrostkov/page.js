import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import FaqBlock from '@/components/FaqBlock';
import { CHILDREN_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у подростков 12–18 лет — таблица по возрасту',
  description: 'Нормы артериального давления у подростков 12–18 лет по возрасту. Влияние пубертата на давление, гипертония у подростков, когда обращаться к врачу.',
  alternates: { canonical: `${BASE_URL}/podrostkov` },
};

const teenNorms = CHILDREN_NORMS.filter(n => ['12-let','13-let','14-let','15-let','16-let','17-let'].includes(n.slug));

const faq = [
  { q: 'Какое давление норма у подростка?', a: 'Нормальное давление у подростков 12–17 лет: систолическое 105–135 мм рт.ст., диастолическое 65–85 мм рт.ст. Значения зависят от возраста и индивидуальных особенностей.' },
  { q: 'Почему у подростков повышается давление?', a: 'В период полового созревания гормональные изменения могут вызывать нестабильность давления. Стресс, малоподвижный образ жизни и избыточный вес — дополнительные факторы.' },
  { q: 'С какого возраста нужно следить за давлением?', a: 'Измерять давление детям рекомендуется с 3 лет при плановых медосмотрах. Подросткам — при жалобах на головные боли, утомляемость или головокружение.' },
];

export default function PodrostkovPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Нормы у подростков'}]} />
        <section className="page-hero">
          <h1>Норма давления у подростков</h1>
          <p className="lead">Нормальные показатели артериального давления у подростков 12–18 лет по возрасту.</p>
        </section>
        <div className="cards-grid">
          {teenNorms.map(n => (
            <Link key={n.slug} href={`/deti/${n.slug}`} className="nav-card">
              <div className="nc-label">{n.label}</div>
              <div className="nc-value">{n.sysMin}–{n.sysMax} / {n.diaMin}–{n.diaMax}</div>
              <div className="nc-desc">Пульс {n.pulseMin}–{n.pulseMax}</div>
            </Link>
          ))}
        </div>
        <div className="card" style={{marginTop:20}}>
          <h2 style={{marginTop:0}}>Давление в период полового созревания</h2>
          <p>В период пубертата (11–16 лет) давление может быть нестабильным. Гормональные изменения, быстрый рост, стрессы — всё это влияет на показатели. Незначительные колебания давления в пределах 5–10 мм рт.ст. являются нормой.</p>
          <p>Систематическое давление выше 130/85 мм рт.ст. у подростка требует консультации педиатра или кардиолога.</p>
        </div>
        <FaqBlock items={faq} />
      </div>
    </div>
  );
}
