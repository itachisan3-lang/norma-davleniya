import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">🩺 НормаДавления</div>
            <p className="brand-desc">
              Справочник норм артериального давления. Таблицы по возрасту, калькулятор,
              расшифровка показаний тонометра. Информация носит ознакомительный характер.
            </p>
          </div>
          <div>
            <div className="footer-col-title">По возрасту</div>
            <div className="footer-col-links">
              <Link href="/vozrast/18-25-let">Норма 18–25 лет</Link>
              <Link href="/vozrast/30-35-let">Норма 30–35 лет</Link>
              <Link href="/vozrast/40-45-let">Норма 40–45 лет</Link>
              <Link href="/vozrast/50-55-let">Норма 50–55 лет</Link>
              <Link href="/vozrast/60-65-let">Норма 60–65 лет</Link>
              <Link href="/tablitsa">Полная таблица →</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Разделы</div>
            <div className="footer-col-links">
              <Link href="/deti">Нормы у детей</Link>
              <Link href="/podrostkov">У подростков</Link>
              <Link href="/beremennyh">При беременности</Link>
              <Link href="/pozhilyh">У пожилых</Link>
              <Link href="/sportsmeny">У спортсменов</Link>
              <Link href="/puls">Норма пульса</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Информация</div>
            <div className="footer-col-links">
              <Link href="/gipertoniya">Гипертония</Link>
              <Link href="/gipotoniia">Гипотония</Link>
              <Link href="/verkhneye-davlenie">Верхнее давление</Link>
              <Link href="/nizhneye-davlenie">Нижнее давление</Link>
              <Link href="/tonometr">Как измерять</Link>
              <Link href="/stati/kak-pravilno-izmeryat-davlenie">Статьи</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            Информация на сайте носит ознакомительный характер и не является медицинской консультацией.
            При любых симптомах или отклонениях давления обратитесь к врачу. Нормы давления индивидуальны
            и зависят от состояния здоровья.{' '}
            <Link href="/karta-sajta">Карта сайта</Link> ·{' '}
            <Link href="/politika-konfidencialnosti">Конфиденциальность</Link>
          </p>
          <div className="footer-copy">© {new Date().getFullYear()} НормаДавления</div>
        </div>
      </div>
    </footer>
  );
}
