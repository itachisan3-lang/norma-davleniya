import { ADULT_NORMS, CHILDREN_NORMS, PRESSURE_VALUES, PULSE_GROUPS, HYPERTENSION_GRADES, ARTICLES, BASE_URL } from '@/lib/data';

export default function sitemap() {
  const now = new Date().toISOString();
  const urls = [];

  // Главная
  urls.push({ url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 });

  // Таблицы
  const tables = ['/tablitsa', '/tablitsa/zhenshchiny', '/tablitsa/muzhchiny', '/tablitsa/deti', '/tablitsa/puls'];
  tables.forEach(p => urls.push({ url: `${BASE_URL}${p}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }));

  // Хабы
  const hubs = [
    '/deti', '/beremennyh', '/beremennyh/1-trimestr', '/beremennyh/2-trimestr', '/beremennyh/3-trimestr',
    '/gipertoniya', '/gipotoniia', '/podrostkov', '/pozhilyh', '/sportsmeny',
    '/sportsmeny/posle-trenirovki', '/puls',
  ];
  hubs.forEach(p => urls.push({ url: `${BASE_URL}${p}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }));

  // Терминология
  const terms = ['/verkhneye-davlenie', '/nizhneye-davlenie', '/pulsovoe', '/raznitsa', '/tonometr'];
  terms.forEach(p => urls.push({ url: `${BASE_URL}${p}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 }));

  // Страницы сайта
  urls.push({ url: `${BASE_URL}/karta-sajta`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 });
  urls.push({ url: `${BASE_URL}/politika-konfidencialnosti`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 });

  // Нормы по возрасту взрослые
  ADULT_NORMS.forEach(n => urls.push({
    url: `${BASE_URL}/vozrast/${n.slug}`,
    lastModified: now, changeFrequency: 'monthly', priority: 0.8,
  }));

  // Нормы детей
  CHILDREN_NORMS.forEach(n => urls.push({
    url: `${BASE_URL}/deti/${n.slug}`,
    lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  // Расшифровки значений
  PRESSURE_VALUES.forEach(v => urls.push({
    url: `${BASE_URL}/znachenie/${v.slug}`,
    lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  // Пульс по группам
  PULSE_GROUPS.forEach(p => urls.push({
    url: `${BASE_URL}/puls/${p.slug}`,
    lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  // Степени гипертонии
  HYPERTENSION_GRADES.forEach(g => urls.push({
    url: `${BASE_URL}/gipertoniya/${g.slug}`,
    lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  // Статьи
  ARTICLES.forEach(a => urls.push({
    url: `${BASE_URL}/stati/${a.slug}`,
    lastModified: a.date, changeFrequency: 'monthly', priority: 0.6,
  }));

  return urls;
}
