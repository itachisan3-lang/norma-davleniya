import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { PULSE_GROUPS, BASE_URL } from '@/lib/data';

export const metadata = {
  title: 'Норма пульса по возрасту — таблица ЧСС у детей и взрослых',
  description: 'Таблица нормы пульса по возрасту: от новорождённых до пожилых. Нормальная частота сердечных сокращений (ЧСС) для детей, взрослых и спортсменов.',
  alternates: { canonical: `${BASE_URL}/tablitsa/puls` },
};

export default function PulsTablitsaPage() {
  return (
    <div className="page-wrap">
      <div className="container">
        <Breadcrumb items={[{label:'Таблица',href:'/tablitsa'},{label:'Пульс'}]} />
        <section className="page-hero">
          <h1>Норма пульса по возрасту</h1>
          <p className="lead">Нормальная частота сердечных сокращений (ЧСС) в состоянии покоя для разных возрастных групп.</p>
        </section>
        <div className="card">
          <div className="table-wrap">
            <table className="data-table" aria-label="Норма пульса по возрасту">
              <thead>
                <tr>
                  <th scope="col">Группа</th>
                  <th scope="col">Возраст</th>
                  <th scope="col">Норма, уд/мин</th>
                  <th scope="col">Подробнее</th>
                </tr>
              </thead>
              <tbody>
                {PULSE_GROUPS.map(g => (
                  <tr key={g.slug}>
                    <td>{g.label}</td>
                    <td>{g.ageLabel}</td>
                    <td><strong>{g.min}–{g.max}</strong></td>
                    <td><Link href={`/puls/${g.slug}`}>Подробнее</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <h2 style={{marginTop:0}}>Что такое пульс и ЧСС</h2>
          <p>Пульс (частота сердечных сокращений, ЧСС) — количество ударов сердца в минуту. Измеряется в покое после 5 минут отдыха. У взрослых норма: 60–90 уд/мин. У детей пульс выше, у пожилых — ниже.</p>
          <h3>Тахикардия и брадикардия</h3>
          <p><strong>Тахикардия</strong> — пульс выше 100 уд/мин у взрослых. Причины: стресс, физическая нагрузка, анемия, гипертиреоз, лихорадка.</p>
          <p><strong>Брадикардия</strong> — пульс ниже 50–60 уд/мин. У тренированных спортсменов может быть нормой. При головокружении и слабости — требует обследования.</p>
        </div>
      </div>
    </div>
  );
}
