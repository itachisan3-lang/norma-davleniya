import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { CHILDREN_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у детей по возрасту — таблица от 0 до 17 лет',
  description: 'Таблица нормального артериального давления у детей по возрасту: от новорождённых до 17 лет. Систолическое, диастолическое, пульс для каждого возраста.',
  alternates: { canonical: `${BASE_URL}/tablitsa/deti` },
};

export default function DetiTablitsaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Таблица',href:'/tablitsa'},{label:'Дети'}]} />
        <section className="page-hero">
          <h1>Норма давления у детей по возрасту</h1>
          <p className="lead">Таблица нормального артериального давления и пульса у детей от рождения до 17 лет.</p>
        </section>
        <div className="card">
          <div className="table-wrap">
            <table className="data-table" aria-label="Норма давления у детей по возрасту">
              <thead>
                <tr>
                  <th scope="col">Возраст</th>
                  <th scope="col">Систолическое</th>
                  <th scope="col">Диастолическое</th>
                  <th scope="col">Пульс</th>
                  <th scope="col">Подробнее</th>
                </tr>
              </thead>
              <tbody>
                {CHILDREN_NORMS.map(n => (
                  <tr key={n.slug}>
                    <td>{n.ageLabel}</td>
                    <td>{n.sysMin}–{n.sysMax}</td>
                    <td>{n.diaMin}–{n.diaMax}</td>
                    <td>{n.pulseMin}–{n.pulseMax}</td>
                    <td><Link href={`/deti/${n.slug}`}>Подробнее</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Особенности измерения давления у детей</h2>
          <p>Норма давления у детей значительно ниже, чем у взрослых, и повышается с возрастом. Для точного измерения необходима детская манжета соответствующего размера.</p>
          <ul>
            <li>До 1 года — манжета 5–6 см шириной</li>
            <li>1–4 года — манжета 6–8 см</li>
            <li>4–12 лет — манжета 9–10 см</li>
            <li>12–18 лет — стандартная взрослая манжета</li>
          </ul>
        </div>
        <Link href="/deti">Подробные страницы по каждому возрасту →</Link>
      </div>
    </div>
  );
}
