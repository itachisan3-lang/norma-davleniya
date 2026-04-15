import Breadcrumb from '@/components/Breadcrumb';
import FaqBlock from '@/components/FaqBlock';
import Link from 'next/link';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Разница между верхним и нижним давлением — норма и отклонения',
  description: 'Норма разницы между верхним и нижним давлением — 40–50 мм рт.ст. Большая разница давления: причины и что делать. Маленькая разница давления.',
  alternates: { canonical: `${BASE_URL}/raznitsa` },
};

const faq = [
  { q: 'Какая должна быть разница между верхним и нижним давлением?', a: 'Нормальная разница (пульсовое давление) — 40–50 мм рт.ст. Классический пример нормы: 120/80 (разница 40 мм рт.ст.).' },
  { q: 'Что значит большая разница давления?', a: 'Разница более 60 мм рт.ст. — повышенное пульсовое давление. Характерно для атеросклероза, аортальной регургитации, тиреотоксикоза. Чаще встречается у пожилых.' },
  { q: 'Что значит маленькая разница давления?', a: 'Разница менее 25 мм рт.ст. — сниженное пульсовое давление. Может указывать на сердечную недостаточность, тампонаду сердца, тяжёлый аортальный стеноз.' },
];

export default function RaznicaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Разница давления'}]} />
        <section className="page-hero">
          <h1>Разница между верхним и нижним давлением</h1>
          <p className="lead">Разница между систолическим и диастолическим давлением называется пульсовым давлением. Норма — 40–50 мм рт.ст.</p>
        </section>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:20}}>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Норма разницы</div>
            <div style={{fontSize:'1.8rem',fontWeight:900,color:'var(--green)'}}>40–50</div>
            <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>мм рт.ст.</div>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <div style={{fontSize:'0.8rem',color:'var(--text-muted)',marginBottom:4}}>Пример нормы</div>
            <div style={{fontSize:'1.8rem',fontWeight:900,color:'var(--accent)'}}>120/80</div>
            <div style={{fontSize:'0.75rem',color:'var(--text-dim)'}}>разница = 40</div>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Примеры разницы давления</h2>
          <div className="data-table">
            <table aria-label="Примеры разницы давления">
              <thead>
                <tr>
                  <th scope="col">Давление</th>
                  <th scope="col">Разница</th>
                  <th scope="col">Оценка</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>120/80</td><td>40 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>130/85</td><td>45 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норма</td></tr>
                <tr><td>160/80</td><td>80 мм рт.ст.</td><td style={{color:'var(--red)'}}>Большая разница</td></tr>
                <tr><td>150/110</td><td>40 мм рт.ст.</td><td style={{color:'var(--green)'}}>Норм. разница, но гипертония</td></tr>
                <tr><td>90/70</td><td>20 мм рт.ст.</td><td style={{color:'var(--orange)'}}>Малая разница</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{marginTop:12,color:'var(--text-muted)',fontSize:'0.9rem'}}>Важно: оценивать нужно как абсолютные значения давления, так и разницу между ними.</p>
        </div>
        <FaqBlock items={faq} />
        <div style={{marginTop:20,display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/pulsovoe">Пульсовое давление →</Link>
          <Link href="/verkhneye-davlenie">Верхнее давление →</Link>
          <Link href="/nizhneye-davlenie">Нижнее давление →</Link>
        </div>
      </div>
    </div>
  );
}
