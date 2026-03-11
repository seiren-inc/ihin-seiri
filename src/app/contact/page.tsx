'use client';

import React, { useState } from 'react';
import { Button } from '@/components/common/Button';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const legalNotices = getCombinedLegalNotice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, format data and send to API
    setIsSubmitted(true);
  };

  return (
    <div className="page-contact">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">お問い合わせ・無料お見積り</h1>
          <p className="section-desc">お急ぎの方はお電話で、そうでない方はフォームまたはLINEからお気軽にご相談ください。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Methods Info */}
          <div className="contact-info">
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>お問い合わせ方法</h2>
            
            <div className="card p-md mb-md" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>お電話でのご相談</h3>
              <p className="text-sub mb-sm">お急ぎの方、直接状況をお話ししたい方はこちら</p>
              <a href="tel:0800-888-8788" className="text-primary" style={{ fontSize: '2rem', fontWeight: 800, display: 'block', margin: '1rem 0' }}>0800-888-8788</a>
              <p className="text-sub" style={{ fontSize: '0.875rem' }}>受付時間：9:00〜18:00（年中無休）</p>
            </div>
            
            <div className="card p-md" style={{ padding: '2rem' }}>
              <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>LINEでのご相談</h3>
              <p className="text-sub mb-sm">写真でお部屋の状況を送信して概算を知りたい方はこちら</p>
              <Button href="#" variant="outline" className="mt-sm" style={{ borderColor: '#06C755', color: '#06C755' }}>LINEで友だち追加する</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper card p-md" style={{ padding: '2.5rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Webフォームからのご相談</h2>
            
            {isSubmitted ? (
              <div className="success-message text-center" style={{ padding: '2rem 0' }}>
                <h3 className="text-success" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>お問い合わせを受け付けました</h3>
                <p className="text-sub">
                  自動返信メールをご入力いただいたメールアドレス宛に送信いたしました。<br/><br/>
                  内容を確認の上、担当者よりご連絡させていただきます。<br/>今しばらくお待ちください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontWeight: 700 }}>お名前 <span style={{ color: 'red', fontSize: '0.75rem' }}>必須</span></label>
                  <input type="text" id="name" required placeholder="山田 太郎" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)', width: '100%' }} />
                </div>
                
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontWeight: 700 }}>お電話番号 <span style={{ color: 'red', fontSize: '0.75rem' }}>必須</span></label>
                  <input type="tel" id="phone" required placeholder="090-0000-0000" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)', width: '100%' }} />
                </div>
                
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontWeight: 700 }}>メールアドレス <span style={{ color: 'red', fontSize: '0.75rem' }}>必須</span></label>
                  <input type="email" id="email" required placeholder="example@email.com" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)', width: '100%' }} />
                </div>
                
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="service" style={{ fontWeight: 700 }}>ご希望のサービス（複数可）</label>
                  <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><input type="checkbox" value="estate" /> 遺品整理</label>
                    <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><input type="checkbox" value="garbage" /> ゴミ清掃</label>
                    <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><input type="checkbox" value="special" /> 特殊清掃</label>
                    <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><input type="checkbox" value="memorial" /> 供養相談</label>
                  </div>
                </div>

                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="detail" style={{ fontWeight: 700 }}>ご相談内容・現状・間取りなど</label>
                  <textarea id="detail" rows={5} placeholder="例：遠方の実家の整理をお願いしたい。間取りは3LDKで、不用品の処分と仏壇の供養も希望しています。" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)', width: '100%', resize: 'vertical' }}></textarea>
                </div>
                
                <p className="text-sub" style={{ fontSize: '0.75rem', marginTop: '1rem' }}>
                  送信いただくことで、当社の<a href="/privacy" style={{ textDecoration: 'underline' }}>プライバシーポリシー</a>に同意したものとみなします。
                </p>

                <Button type="submit" variant="primary" size="lg" fullWidth style={{ marginTop: '1rem' }}>無料相談を送信する</Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <section className="section-legal section-py-md">
        <div className="container">
          <NoticeBox title="清蓮へのお問い合わせについて" variant="info">
            <ul className="legal-list">
              {legalNotices.map((notice, idx) => (
                <li key={idx}>{notice}</li>
              ))}
            </ul>
          </NoticeBox>
        </div>
      </section>
    </div>
  );
}
