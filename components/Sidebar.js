import Link from 'next/link';
import AdBlock from '@/components/AdBlock';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Нормы по возрасту */}
      <div className="sidebar-card">
        <h3>Нормы по возрасту</h3>
        <div className="sidebar-links">
          {[
            ['/vozrast/18-25-let','18–25 лет','115–125 / 75–80'],
            ['/vozrast/30-35-let','30–35 лет','120–128 / 77–82'],
            ['/vozrast/40-45-let','40–45 лет','124–132 / 79–84'],
            ['/vozrast/50-55-let','50–55 лет','128–137 / 80–85'],
            ['/vozrast/60-65-let','60–65 лет','132–142 / 82–87'],
            ['/vozrast/70-75-let','70–75 лет','136–148 / 80–85'],
            ['/tablitsa','Все возрасты →',''],
          ].map(([href, label, val]) => (
            <Link key={href} href={href} className="sidebar-link">
              <span>{label}{val ? <span style={{color:'var(--text-dim)',fontWeight:400}}> — {val}</span> : ''}</span>
              <span className="sidebar-link-arrow">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Ad 300x250 */}
      <div className="ad-sidebar-wrap ad-desktop-only">
        <AdBlock blockId="437123" />
      </div>

      {/* Популярные значения */}
      <div className="sidebar-card">
        <h3>Популярные значения</h3>
        <div className="sidebar-values">
          {[
            ['90-na-60','90/60'],['100-na-70','100/70'],
            ['110-na-70','110/70'],['120-na-80','120/80'],
            ['130-na-80','130/80'],['140-na-90','140/90'],
            ['160-na-100','160/100'],['180-na-110','180/110'],
          ].map(([slug, label]) => (
            <Link key={slug} href={`/znachenie/${slug}`} className="sidebar-value-chip">{label}</Link>
          ))}
        </div>
      </div>

      {/* Разделы */}
      <div className="sidebar-card">
        <h3>Разделы</h3>
        <div className="sidebar-links">
          {[
            ['/deti','Нормы у детей'],
            ['/beremennyh','При беременности'],
            ['/sportsmeny','У спортсменов'],
            ['/pozhilyh','У пожилых'],
            ['/puls','Норма пульса'],
            ['/gipertoniya','Гипертония'],
            ['/gipotoniia','Гипотония'],
            ['/tonometr','Как измерять'],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="sidebar-link">
              <span>{label}</span>
              <span className="sidebar-link-arrow">›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Ad 300x600 */}
      <div className="ad-sidebar-wrap ad-desktop-only">
        <AdBlock blockId="437096" />
      </div>

      {/* Термины */}
      <div className="sidebar-card">
        <h3>Термины</h3>
        <div className="sidebar-links">
          {[
            ['/verkhneye-davlenie','Верхнее давление'],
            ['/nizhneye-davlenie','Нижнее давление'],
            ['/pulsovoe','Пульсовое давление'],
            ['/raznitsa','Разница давления'],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="sidebar-link">
              <span>{label}</span>
              <span className="sidebar-link-arrow">›</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
