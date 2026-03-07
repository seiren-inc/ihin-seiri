'use client';

import React, { useState } from 'react';
import { faqList } from '@/data/faq';
import { Button } from '@/components/common/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>([faqList[0].id]); // 1つ目は初期展開

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // カテゴリごとにグループ化
  const faqsByCategory = faqList.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqList>);

  return (
    <div className="page-faq">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">よくある質問</h1>
          <p className="section-desc">清蓮のサービスについて、お客様からよくいただくご質問をまとめました。</p>
        </div>
      </div>

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        {Object.entries(faqsByCategory).map(([category, items]) => (
          <div key={category} className="faq-category mb-xl" style={{ marginBottom: '3rem' }}>
            <h2 className="category-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              {category}
            </h2>
            <div className="faq-list flex flex-col gap-sm" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map(faq => {
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
                        cursor: 'pointer'
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
        
        <div className="text-center mt-xl" style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-bg-section)', borderRadius: '12px' }}>
          <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>その他ご不明な点がございましたら</h3>
          <p className="text-sub mb-lg" style={{ marginBottom: '2rem' }}>些細なことでもお気軽にご相談ください。専門スタッフが丁寧にお答えいたします。</p>
          <div className="flex justify-center gap-md">
            <Button href="/contact" variant="accent" size="lg">Webからお問い合わせ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
