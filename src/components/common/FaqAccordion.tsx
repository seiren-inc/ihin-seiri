'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-accordion" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {items.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`faq-accordion-item card ${isOpen ? 'is-open' : ''}`}
          >
            <button
              className="faq-accordion-trigger"
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              id={`faq-trigger-${faq.id}`}
            >
              <span className="faq-q-label">Q</span>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${faq.id}`}
              className="faq-accordion-body"
              style={{
                maxHeight: isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="faq-accordion-content">
                <span className="faq-a-label">A</span>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
