import Link from 'next/link';

/**
 * items: [{label, href}]  — последний элемент без href (текущая страница)
 */
export default function Breadcrumb({ items }) {
  const all = [{ label: 'Главная', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://norma-davleniya.vercel.app${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="breadcrumb" aria-label="Хлебные крошки">
        {all.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
            {item.href
              ? <Link href={item.href}>{item.label}</Link>
              : <span aria-current="page">{item.label}</span>
            }
          </span>
        ))}
      </nav>
    </>
  );
}
