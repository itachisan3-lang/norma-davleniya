'use client';
import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { href: '/', label: 'Калькулятор' },
  {
    href: '/tablitsa', label: 'Таблица',
    children: [
      { href: '/tablitsa', label: 'Все нормы' },
      { href: '/tablitsa/muzhchiny', label: 'Мужчины' },
      { href: '/tablitsa/zhenshchiny', label: 'Женщины' },
      { href: '/tablitsa/deti', label: 'Дети' },
      { href: '/tablitsa/puls', label: 'Пульс' },
    ]
  },
  {
    href: '/znachenie/120-na-80', label: 'Расшифровка',
    children: [
      { href: '/znachenie/120-na-80', label: 'Значения давления' },
      { href: '/verkhneye-davlenie', label: 'Верхнее (систолическое)' },
      { href: '/nizhneye-davlenie', label: 'Нижнее (диастолическое)' },
      { href: '/pulsovoe', label: 'Пульсовое давление' },
      { href: '/raznitsa', label: 'Разница давления' },
      { href: '/tonometr', label: 'Тонометр: как измерять' },
    ]
  },
  {
    href: '/deti', label: 'Дети',
    children: [
      { href: '/deti', label: 'Все возрасты' },
      { href: '/deti/novorozhdennyh', label: 'Новорождённые' },
      { href: '/deti/4-12-mesyatsev', label: 'До 1 года' },
      { href: '/deti/3-goda', label: '1–3 года' },
      { href: '/deti/6-let', label: '4–6 лет' },
      { href: '/deti/11-let', label: '7–11 лет' },
      { href: '/deti/17-let', label: '12–17 лет' },
      { href: '/podrostkov', label: 'Подростки' },
    ]
  },
  {
    href: '/puls', label: 'Пульс',
    children: [
      { href: '/puls', label: 'Норма пульса' },
      { href: '/puls/vzroslyh', label: 'Взрослые (60–90)' },
      { href: '/puls/1-3-goda', label: 'Дети 1–3 года' },
      { href: '/puls/6-12-let', label: 'Дети 6–12 лет' },
      { href: '/puls/sportsmeny', label: 'Спортсмены (40–60)' },
      { href: '/puls/pozhilyh', label: 'Пожилые (60–80)' },
      { href: '/puls/pri-nagruzke', label: 'При нагрузке' },
    ]
  },
  {
    href: '/gipertoniya', label: 'Гипертония',
    children: [
      { href: '/gipertoniya', label: 'Гипертония (обзор)' },
      { href: '/gipertoniya/1-stepeni', label: '1 степень (140–159)' },
      { href: '/gipertoniya/2-stepeni', label: '2 степень (160–179)' },
      { href: '/gipertoniya/3-stepeni', label: '3 степень (180+)' },
      { href: '/gipotoniia', label: 'Гипотония (< 90/60)' },
      { href: '/beremennyh', label: 'При беременности' },
      { href: '/sportsmeny', label: 'У спортсменов' },
      { href: '/pozhilyh', label: 'У пожилых' },
    ]
  },
  {
    href: '/stati/kak-pravilno-izmeryat-davlenie', label: 'Статьи',
    children: [
      { href: '/stati/kak-pravilno-izmeryat-davlenie', label: 'Как измерять давление' },
      { href: '/stati/kakoe-davlenie-schitaetsya-normalnym', label: 'Какое давление нормальное' },
      { href: '/stati/pochemu-davlenie-povyshaetsya', label: 'Почему повышается' },
      { href: '/stati/kak-snizit-davlenie-bez-tabletok', label: 'Снизить без таблеток' },
      { href: '/stati/raznitsa-davleniya-na-ruках', label: 'Разница давления на руках' },
    ]
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  function toggleSection(label) {
    setOpenSection(v => v === label ? null : label);
  }

  function closeMobile() {
    setMobileOpen(false);
    setOpenSection(null);
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="site-logo" aria-label="НормаДавления — на главную">
              <span className="logo-icon">🩺</span>
              <span>Норма<span className="logo-accent">Давления</span></span>
            </Link>

            <nav className="site-nav" aria-label="Основная навигация">
              {NAV.map(item =>
                item.children ? (
                  <div key={item.href} className="nav-item has-dropdown">
                    <Link href={item.href}>{item.label} <span className="dd-arrow">▾</span></Link>
                    <div className="nav-dropdown" role="menu">
                      {item.children.map(c => (
                        <Link key={c.href} href={c.href} role="menuitem">{c.label}</Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={item.href} className="nav-item">
                    <Link href={item.href}>{item.label}</Link>
                  </div>
                )
              )}
            </nav>

            <button
              className="nav-toggle"
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileOpen}
              onClick={() => { setMobileOpen(v => !v); setOpenSection(null); }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <nav className="mobile-nav open" aria-label="Мобильная навигация">
          {NAV.map(item =>
            item.children ? (
              <div key={item.href} className="mobile-nav-item">
                <button
                  className={`mobile-nav-toggle${openSection === item.label ? ' open' : ''}`}
                  onClick={() => toggleSection(item.label)}
                >
                  {item.label}
                  <span className="toggle-arrow">▾</span>
                </button>
                <div className={`mobile-sub-nav${openSection === item.label ? ' open' : ''}`}>
                  {item.children.map(c => (
                    <Link key={c.href} href={c.href} onClick={closeMobile}>{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <div key={item.href} className="mobile-nav-item">
                <Link href={item.href} className="mobile-nav-top-link" onClick={closeMobile}>
                  {item.label}
                </Link>
              </div>
            )
          )}
        </nav>
      )}
    </>
  );
}
