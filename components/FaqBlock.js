'use client';
import { useState } from 'react';

export default function FaqBlock({ items, title = 'Часто задаваемые вопросы' }) {
  const [open, setOpen] = useState(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 id="faq-heading">{title}</h2>
      <div className="faq-list" role="list">
        {items.map((item, i) => (
          <div key={i} className="faq-item" role="listitem">
            <button
              className={`faq-q${open === i ? ' open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-a-${i}`}
            >
              <span>{item.q}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div
              id={`faq-a-${i}`}
              className={`faq-a${open === i ? ' open' : ''}`}
              role="region"
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
