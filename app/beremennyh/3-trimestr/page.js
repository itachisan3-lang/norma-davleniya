import Breadcrumb from '@/components/Breadcrumb';
import { BASE_URL } from '@/lib/data';
export const metadata = {
  title: 'Норма давления в 3 триместре беременности (27–40 недели)',
  description: 'Нормальное давление в 3 триместре беременности (27–40 недели): 110–130/65–85 мм рт.ст. Преэклампсия: симптомы и когда вызывать скорую.',
  alternates: { canonical: `${BASE_URL}/beremennyh/3-trimestr` },
};
export default function T3Page() {
  return (
    <div className="page-wrap"><div className="container">
      <Breadcrumb items={[{label:'При беременности',href:'/beremennyh'},{label:'3 триместр'}]} />
      <section className="page-hero">
        <h1>Норма давления в 3 триместре беременности</h1>
        <p className="lead">В 3 триместре (27–40 недели) нормальное давление 110–130/65–85 мм рт.ст. Давление выше 140/90 — опасный сигнал.</p>
      </section>
      <div className="card">
        <h2 style={{marginTop:0}}>3 триместр: самый важный период</h2>
        <p>В 3 триместре нагрузка на сердечно-сосудистую систему максимальна. Давление может незначительно повыситься относительно 2 триместра. Норма: 110–130/65–85 мм рт.ст.</p>
        <h3>Преэклампсия — признаки опасности</h3>
        <ul>
          <li>Давление выше 160/110 мм рт.ст.</li>
          <li>Белок в моче (протеинурия)</li>
          <li>Сильные отёки лица и рук</li>
          <li>Нарушение зрения</li>
          <li>Боли в животе справа</li>
        </ul>
        <div className="info-block danger" style={{marginTop:16}}>
          <p style={{margin:0}}><strong>При давлении выше 160/110 и любом из этих симптомов — срочно вызвать скорую (103).</strong></p>
        </div>
      </div>
    </div></div>
  );
}
