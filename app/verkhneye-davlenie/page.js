import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Верхнее давление — что это такое, норма систолического давления',
  description: 'Верхнее (систолическое) давление — норма 100–130 мм рт.ст. Что значит высокое и низкое верхнее давление, причины отклонений.',
  alternates: { canonical: `${BASE_URL}/verkhneye-davlenie` },
};

const faq = [
  { q: 'Что такое верхнее давление?', a: 'Верхнее давление — систолическое давление, которое возникает в момент сокращения сердца (систолы). Оно показывает максимальное давление крови на стенки артерий.' },
  { q: 'Какая норма верхнего давления?', a: 'Нормальное верхнее давление для взрослого человека: 100–130 мм рт.ст. Оптимальным считается 120 мм рт.ст. Выше 140 мм рт.ст. — гипертония.' },
  { q: 'Почему верхнее давление повышается?', a: 'Причины повышения: атеросклероз, стресс, курение, лишний вес, заболевания почек. У пожилых часто развивается изолированная систолическая гипертония.' },
];

export default function VerkhneyeDavleniePage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Верхнее давление'}]} />
        <section className="page-hero">
          <h1>Верхнее (систолическое) давление</h1>
          <p className="lead">Верхнее давление — первая цифра при измерении. Отражает давление крови в момент сокращения сердца.</p>
        </section>
        <div className="card" style={{borderLeft:'4px solid var(--accent)'}}>
          <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Норма верхнего давления</div>
          <div style={{fontSize:'2rem',fontWeight:900,color:'var(--accent)'}}>100 – 130</div>
          <div style={{color:'var(--text-dim)',fontSize:'0.82rem',marginTop:4}}>мм рт.ст. (систолическое)</div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Что показывает верхнее давление</h2>
          <p>Систолическое давление отражает силу, с которой сердце выталкивает кровь в аорту. Чем жёстче сосуды и чем больше объём крови, тем выше этот показатель.</p>
          <h2>Классификация по уровню</h2>
          <div className="data-table">
            <table aria-label="Классификация верхнего давления">
              <thead>
                <tr>
                  <th scope="col">Уровень</th>
                  <th scope="col">Верхнее давление</th>
                  <th scope="col">Оценка</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Низкое</td><td>{'< 90'} мм рт.ст.</td><td style={{color:'var(--orange)'}}>Гипотония</td></tr>
                <tr><td>Оптимальное</td><td>{'< 120'} мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>Нормальное</td><td>120–129 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>Высокое нормальное</td><td>130–139 мм рт.ст.</td><td style={{color:'#eab308'}}>Контроль</td></tr>
                <tr><td>Гипертония 1 ст.</td><td>140–159 мм рт.ст.</td><td style={{color:'var(--red)'}}>Лечение</td></tr>
                <tr><td>Гипертония 2 ст.</td><td>160–179 мм рт.ст.</td><td style={{color:'var(--red)'}}>Лечение</td></tr>
                <tr><td>Гипертония 3 ст.</td><td>≥ 180 мм рт.ст.</td><td style={{color:'var(--red)'}}>Срочно</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <FaqBlock items={faq} />
        <div style={{marginTop:20,display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/nizhneye-davlenie">Нижнее (диастолическое) давление →</Link>
          <Link href="/tablitsa">Таблица норм давления →</Link>
        </div>
      </div>
    </div>
  );
}
