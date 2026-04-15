import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Пульсовое давление — норма, что значит разница верхнего и нижнего',
  description: 'Пульсовое давление — разница между верхним и нижним. Норма 40–50 мм рт.ст. Высокое пульсовое давление: причины и когда опасно.',
  alternates: { canonical: `${BASE_URL}/pulsovoe` },
};

const faq = [
  { q: 'Что такое пульсовое давление?', a: 'Пульсовое давление — разница между систолическим (верхним) и диастолическим (нижним) давлением. Например, при давлении 120/80 пульсовое давление = 40 мм рт.ст.' },
  { q: 'Какая норма пульсового давления?', a: 'Нормальное пульсовое давление — 40–50 мм рт.ст. Меньше 25 мм рт.ст. — пониженное (сердечная недостаточность). Выше 60–70 мм рт.ст. — повышенное (атеросклероз, аортальная регургитация).' },
  { q: 'О чём говорит высокое пульсовое давление?', a: 'Высокое пульсовое давление (более 60 мм рт.ст.) часто связано с жёсткостью аорты и крупных артерий. Это независимый фактор риска сердечно-сосудистых осложнений, особенно у пожилых.' },
];

export default function PulsovoePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Пульсовое давление'}]} />
        <section className="page-hero">
          <h1>Пульсовое давление</h1>
          <p className="lead">Пульсовое давление — разница между верхним и нижним. В норме 40–50 мм рт.ст.</p>
        </section>
        <div className="card" style={{borderLeft:'4px solid var(--accent)'}}>
          <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Норма пульсового давления</div>
          <div style={{fontSize:'2rem',fontWeight:900,color:'var(--accent)'}}>40 – 50</div>
          <div style={{color:'var(--text-dim)',fontSize:'0.82rem',marginTop:4}}>мм рт.ст.</div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Как рассчитать пульсовое давление</h2>
          <p>Пульсовое давление = систолическое − диастолическое. При давлении 120/80: 120 − 80 = 40 мм рт.ст. При давлении 130/70: 130 − 70 = 60 мм рт.ст. — уже на верхней границе нормы.</p>
          <h2>Значение разных показателей</h2>
          <div className="data-table">
            <table aria-label="Оценка пульсового давления">
              <thead>
                <tr>
                  <th scope="col">Пульсовое давление</th>
                  <th scope="col">Оценка</th>
                  <th scope="col">Возможные причины</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>{'< 25'} мм рт.ст.</td><td style={{color:'var(--orange)'}}>Пониженное</td><td>Сердечная недостаточность, стеноз аорты</td></tr>
                <tr><td>25–39 мм рт.ст.</td><td style={{color:'#eab308'}}>Низковатое</td><td>Обезвоживание, брадикардия</td></tr>
                <tr><td>40–50 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td><td>—</td></tr>
                <tr><td>51–60 мм рт.ст.</td><td style={{color:'#eab308'}}>Повышенное</td><td>Возрастные изменения, наблюдение</td></tr>
                <tr><td>{'> 60'} мм рт.ст.</td><td style={{color:'var(--red)'}}>Высокое</td><td>Атеросклероз, аортальная регургитация</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <FaqBlock items={faq} />
        <div style={{marginTop:20,display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/verkhneye-davlenie">Верхнее давление →</Link>
          <Link href="/nizhneye-davlenie">Нижнее давление →</Link>
          <Link href="/raznitsa">Разница давления →</Link>
        </div>
      </div>
    </div>
  );
}
