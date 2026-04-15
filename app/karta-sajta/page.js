import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ADULT_NORMS, CHILDREN_NORMS, PRESSURE_VALUES, PULSE_GROUPS, HYPERTENSION_GRADES, ARTICLES, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Карта сайта — Норма давления',
  description: 'Карта сайта norma-davleniya: нормы давления по возрасту, расшифровка значений, калькулятор, статьи.',
  alternates: { canonical: `${BASE_URL}/karta-sajta` },
  robots: { index: false, follow: false },
};

export default function KartaSajtaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Карта сайта'}]} />
        <h1 style={{marginBottom:24}}>Карта сайта</h1>

        <div className="card">
          <h2 style={{marginTop:0}}>Главные разделы</h2>
          <ul>
            <li><Link href="/">Главная — калькулятор давления</Link></li>
            <li><Link href="/tablitsa">Таблица норм давления</Link></li>
            <li><Link href="/tablitsa/muzhchiny">Нормы у мужчин</Link></li>
            <li><Link href="/tablitsa/zhenshchiny">Нормы у женщин</Link></li>
            <li><Link href="/tablitsa/deti">Нормы у детей</Link></li>
            <li><Link href="/tablitsa/puls">Нормы пульса</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Нормы по возрасту — взрослые</h2>
          <ul>
            {ADULT_NORMS.map(n => (
              <li key={n.slug}><Link href={`/vozrast/${n.slug}`}>Норма давления {n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Нормы у детей</h2>
          <ul>
            <li><Link href="/deti">Нормы давления у детей</Link></li>
            <li><Link href="/podrostkov">Нормы у подростков</Link></li>
            {CHILDREN_NORMS.map(n => (
              <li key={n.slug}><Link href={`/deti/${n.slug}`}>Норма давления у детей: {n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Расшифровка значений давления</h2>
          <ul>
            {PRESSURE_VALUES.map(v => (
              <li key={v.slug}><Link href={`/znachenie/${v.slug}`}>Давление {v.sys}/{v.dia}</Link></li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Норма пульса</h2>
          <ul>
            <li><Link href="/puls">Норма пульса по возрасту</Link></li>
            {PULSE_GROUPS.map(p => (
              <li key={p.slug}><Link href={`/puls/${p.slug}`}>Пульс: {p.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Гипертония и гипотония</h2>
          <ul>
            <li><Link href="/gipertoniya">Гипертония</Link></li>
            {HYPERTENSION_GRADES.map(g => (
              <li key={g.slug}><Link href={`/gipertoniya/${g.slug}`}>Гипертония {g.label}</Link></li>
            ))}
            <li><Link href="/gipotoniia">Гипотония (низкое давление)</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Особые группы</h2>
          <ul>
            <li><Link href="/beremennyh">Давление при беременности</Link></li>
            <li><Link href="/beremennyh/1-trimestr">1 триместр</Link></li>
            <li><Link href="/beremennyh/2-trimestr">2 триместр</Link></li>
            <li><Link href="/beremennyh/3-trimestr">3 триместр</Link></li>
            <li><Link href="/sportsmeny">Давление у спортсменов</Link></li>
            <li><Link href="/sportsmeny/posle-trenirovki">После тренировки</Link></li>
            <li><Link href="/pozhilyh">Давление у пожилых</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Терминология</h2>
          <ul>
            <li><Link href="/verkhneye-davlenie">Верхнее (систолическое) давление</Link></li>
            <li><Link href="/nizhneye-davlenie">Нижнее (диастолическое) давление</Link></li>
            <li><Link href="/pulsovoe">Пульсовое давление</Link></li>
            <li><Link href="/raznitsa">Разница давления</Link></li>
            <li><Link href="/tonometr">Тонометр — как измерять</Link></li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{marginTop:0}}>Статьи</h2>
          <ul>
            {ARTICLES.map(a => (
              <li key={a.slug}><Link href={`/stati/${a.slug}`}>{a.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
