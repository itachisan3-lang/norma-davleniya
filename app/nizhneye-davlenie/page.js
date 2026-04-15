import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Нижнее давление — что это такое, норма диастолического давления',
  description: 'Нижнее (диастолическое) давление — норма 60–85 мм рт.ст. Что значит высокое нижнее давление, причины повышения диастолического давления.',
  alternates: { canonical: `${BASE_URL}/nizhneye-davlenie` },
};

const faq = [
  { q: 'Что такое нижнее давление?', a: 'Нижнее давление — диастолическое, возникает в момент расслабления сердца (диастолы). Показывает минимальное давление в артериях между ударами сердца.' },
  { q: 'Какая норма нижнего давления?', a: 'Нормальное диастолическое давление: 60–85 мм рт.ст. Оптимальное — около 80 мм рт.ст. Выше 90 мм рт.ст. — признак гипертонии.' },
  { q: 'Почему нижнее давление высокое?', a: 'Повышенное диастолическое давление часто связано с заболеваниями почек, патологиями надпочечников, приёмом некоторых лекарств. Изолированная диастолическая гипертония требует обследования.' },
];

export default function NizhneyeDavleniePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Нижнее давление'}]} />
        <section className="page-hero">
          <h1>Нижнее (диастолическое) давление</h1>
          <p className="lead">Нижнее давление — вторая цифра при измерении. Отражает давление крови в момент расслабления сердца.</p>
        </section>
        <div className="card" style={{borderLeft:'4px solid var(--green)'}}>
          <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Норма нижнего давления</div>
          <div style={{fontSize:'2rem',fontWeight:900,color:'var(--green)'}}>60 – 85</div>
          <div style={{color:'var(--text-dim)',fontSize:'0.82rem',marginTop:4}}>мм рт.ст. (диастолическое)</div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Что показывает нижнее давление</h2>
          <p>Диастолическое давление отражает тонус и сопротивление периферических сосудов. Его также называют «почечным давлением», поскольку почки существенно влияют на этот показатель через выработку ренина.</p>
          <h2>Значения диастолического давления</h2>
          <div className="data-table">
            <table aria-label="Классификация нижнего давления">
              <thead>
                <tr>
                  <th scope="col">Уровень</th>
                  <th scope="col">Нижнее давление</th>
                  <th scope="col">Оценка</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Низкое</td><td>{'< 60'} мм рт.ст.</td><td style={{color:'var(--orange)'}}>Гипотония</td></tr>
                <tr><td>Оптимальное</td><td>{'< 80'} мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>Нормальное</td><td>80–84 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>Высокое нормальное</td><td>85–89 мм рт.ст.</td><td style={{color:'#eab308'}}>Контроль</td></tr>
                <tr><td>Гипертония 1 ст.</td><td>90–99 мм рт.ст.</td><td style={{color:'var(--red)'}}>Лечение</td></tr>
                <tr><td>Гипертония 2 ст.</td><td>100–109 мм рт.ст.</td><td style={{color:'var(--red)'}}>Лечение</td></tr>
                <tr><td>Гипертония 3 ст.</td><td>≥ 110 мм рт.ст.</td><td style={{color:'var(--red)'}}>Срочно</td></tr>
              </tbody>
            </table>
          </div>
          <h2>Пульсовое давление</h2>
          <p>Разница между верхним и нижним давлением называется пульсовым давлением. В норме — 40–50 мм рт.ст. <Link href="/pulsovoe">Подробнее о пульсовом давлении →</Link></p>
        </div>
        <FaqBlock items={faq} />
        <div style={{marginTop:20,display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/verkhneye-davlenie">Верхнее (систолическое) давление →</Link>
          <Link href="/tablitsa">Таблица норм давления →</Link>
        </div>
      </div>
    </div>
  );
}
