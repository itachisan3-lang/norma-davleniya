import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ADULT_NORMS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма давления у женщин по возрасту — таблица 20–80 лет',
  description: 'Таблица нормального артериального давления у женщин: от 20 до 80+ лет. Показатели по каждой возрастной группе, пульсовое давление, отклонения от нормы.',
  alternates: { canonical: `${BASE_URL}/tablitsa/zhenshchiny` },
};

export default function ZhenshchinyPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Таблица',href:'/tablitsa'},{label:'Женщины'}]} />
        <section className="page-hero">
          <h1>Норма давления у женщин по возрасту</h1>
          <p className="lead">Таблица нормальных значений артериального давления для женщин от 18 до 80+ лет.</p>
        </section>
        <div className="card">
          <div className="table-wrap">
            <table className="data-table" aria-label="Норма давления у женщин по возрасту">
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
                    <td>{n.sysMinW}–{n.sysMaxW} мм рт.ст.</td>
                    <td>{n.diaMinW}–{n.diaMaxW} мм рт.ст.</td>
                    <td><Link href={`/vozrast/${n.slug}`}>Подробнее</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Особенности давления у женщин</h2>
          <p>До менопаузы (45–55 лет) у женщин давление, как правило, ниже, чем у мужчин того же возраста. Это связано с защитным действием женских половых гормонов (эстрогенов) на стенки сосудов.</p>
          <p>После наступления менопаузы уровень эстрогенов снижается, и давление у женщин начинает повышаться, сравниваясь или даже превышая мужские показатели.</p>
        </div>
        <Link href="/tablitsa">← Полная таблица</Link>
      </div>
    </div>
  );
}
