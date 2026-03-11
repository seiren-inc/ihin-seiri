'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FaqAccordionClientProps {
  faqsByCategory: Record<string, FaqItem[]>;
}

export function FaqAccordionClient({ faqsByCategory }: FaqAccordionClientProps) {
  const categories = Object.keys(faqsByCategory);
  const firstItem = categories.length > 0 ? faqsByCategory[categories[0]]?.[0] : undefined;
  const [openIds, setOpenIds] = useState<string[]>(firstItem ? [firstItem.id] : []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {categories.map((category) => (
        <div key={category} className="faq-category mb-xl" style={{ marginBottom: '3rem' }}>
          <h2
            className="category-title text-primary-dark"
            style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}
          >
            {category}
          </h2>
          <div className="faq-list flex flex-col gap-sm" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqsByCategory[category].map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-item card ${isOpen ? 'is-open' : ''}`} style={{ overflow: 'hidden' }}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.5rem',
                      background: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.75rem', fontSize: '1.25rem' }}>Q.</span>
                      {faq.question}
                    </h3>
                    <div className="icon" style={{ flexShrink: 0, color: 'var(--color-text-sub)' }}>
                      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-wrap bg-section" style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                      <p style={{ margin: 0, display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-sub)' }}>
                        <span style={{ color: 'var(--color-primary)', marginRight: '0.75rem', fontWeight: 700, fontSize: '1.25rem' }}>A.</span>
                        <span style={{ lineHeight: 1.8 }}>{faq.answer}</span>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
