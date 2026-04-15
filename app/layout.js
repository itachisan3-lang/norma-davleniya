import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import StickyBanners from '@/components/StickyBanners';
import { BASE_URL } from '@/lib/data';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Норма давления по возрасту — таблица и калькулятор | НормаДавления',
    template: '%s | НормаДавления',
  },
  description: 'Таблица норм артериального давления по возрасту и полу. Калькулятор давления онлайн. Нормы для детей, взрослых, пожилых, беременных. Расшифровка показаний тонометра.',
  keywords: ['норма давления', 'нормы давления по возрасту', 'артериальное давление норма', 'калькулятор давления'],
  authors: [{ name: 'НормаДавления' }],
  creator: 'НормаДавления',
  publisher: 'НормаДавления',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
  openGraph: {
    type: 'website', locale: 'ru_RU', siteName: 'НормаДавления',
    title: 'Норма давления по возрасту — таблица и калькулятор',
    description: 'Таблица норм АД по возрасту и полу. Калькулятор, расшифровка значений тонометра, нормы пульса.',
    url: BASE_URL,
    images: [{ url: `${BASE_URL}/og.svg`, width: 1200, height: 630, alt: 'Норма давления' }],
  },
  alternates: { canonical: BASE_URL },
};

const schemaWebSite = {
  '@context': 'https://schema.org', '@type': 'WebSite',
  name: 'НормаДавления', url: BASE_URL,
  description: 'Справочник норм артериального давления. Таблицы, калькулятор, расшифровка.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/znachenie/{query}` },
    'query-input': 'required name=query',
  },
};

const schemaOrg = {
  '@context': 'https://schema.org', '@type': 'MedicalOrganization',
  name: 'НормаДавления', url: BASE_URL,
  description: 'Справочник норм артериального давления и пульса. Медицинская информация для ознакомления.',
};

const YM_ID = process.env.NEXT_PUBLIC_YM_ID || '99999999';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        {/* AdMediator global init */}
        <script dangerouslySetInnerHTML={{ __html: 'var admData = {};' }} />
        <script src="https://rotator.adsmediator.com/js/rotator.js" async />
        {/* Яндекс Метрика */}
        <script dangerouslySetInnerHTML={{ __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
ym(${YM_ID},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
        ` }} />
        <noscript>
          <div><img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{position:'absolute',left:'-9999px'}} width="1" height="1" alt="" /></div>
        </noscript>
      </head>
      <body>
        {/* Header top ad — desktop only, outside container */}
        <div className="ad-header-top ad-desktop-only">
          <div id="admediator-51871-437092" />
          <script dangerouslySetInnerHTML={{ __html: `
(window.AdMediatorTag=window.AdMediatorTag||[]).push({v:1,el:'admediator-51871-437092',c:51871,b:437092,admData:window.admData||{}});
          ` }} />
        </div>
        <div className="site-layout">
          <Header />
          <main className="site-main">
            <div className="layout-grid">
              <div className="layout-main-col">
                {children}
              </div>
              <div className="layout-sidebar">
                <Sidebar />
              </div>
            </div>
          </main>
          <Footer />
        </div>
        <StickyBanners />
      </body>
    </html>
  );
}
