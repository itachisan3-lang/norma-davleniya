import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ADULT_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у мужчин по возрасту — таблица 20–80 лет',
  description: 'Таблица нормального артериального давления у мужчин: от 20 до 80+ лет. Показатели по каждой возрастной группе, особенности мужского давления.',
  alternates: { canonical: `${BASE_URL}/tablitsa/muzhchiny` },
};

export default function MuzhchinyPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Таблица',href:'/tablitsa'},{label:'Мужчины'}]} />
        <section className="page-hero">
          <h1>Норма давления у мужчин по возрасту</h1>
          <p className="lead">Таблица нормальных значений артериального давления для мужчин от 18 до 80+ лет.</p>
        </section>
        <div className="card">
          <div className="table-wrap">
            <table className="data-table" aria-label="Норма давления у мужчин по возрасту">
              <thead>
                <tr>
                  <th scope="col">Возраст</th>
                  <th scope="col">Систолическое</th>
                  <th scope="col">Диастолическое</th>
                  <th scope="col">Подробнее</th>
                </tr>
              </thead>
              <tbody>
                {ADULT_NORMS.map(n => (
                  <tr key={n.slug}>
                    <td>{n.label}</td>
                    <td>{n.sysMinM}–{n.sysMaxM} мм рт.ст.</td>
                    <td>{n.diaMinM}–{n.diaMaxM} мм рт.ст.</td>
                    <td><Link href={`/vozrast/${n.slug}`}>Подробнее</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Особенности давления у мужчин</h2>
          <p>У мужчин в возрасте 20–50 лет систолическое давление обычно на 3–5 мм рт.ст. выше, чем у женщин того же возраста. Это связано с большей мышечной массой, объёмом крови и меньшим уровнем эстрогенов.</p>
          <p>После 55 лет риск гипертонии у мужчин и женщин становится сопоставимым. Мужчины старше 45 лет — одна из главных групп риска по гипертонии.</p>
        </div>
        <Link href="/tablitsa">← Полная таблица</Link>
      </div>
    </div>
  );
}
