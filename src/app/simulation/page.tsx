'use client';

import React, { useState } from 'react';
import { Button } from '@/components/common/Button';
import { NoticeBox } from '@/components/common/NoticeBox';
import { basePricingRules, simulationModifiers } from '@/data/pricing';

export default function SimulationPage() {
  const [roomType, setRoomType] = useState(basePricingRules[0].roomType);
  const [volume, setVolume] = useState('normal');
  const [floorLevel, setFloorLevel] = useState('ground');
  const [serviceType, setServiceType] = useState('estateClearing');
  const [hasSpecialCleaning, setHasSpecialCleaning] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const [resultMin, setResultMin] = useState(0);
  const [resultMax, setResultMax] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const baseRule = basePricingRules.find(r => r.roomType === roomType) || basePricingRules[0];
    
    let volMod = simulationModifiers.volume[volume as keyof typeof simulationModifiers.volume] || 1.0;
    let floorMod = simulationModifiers.floorLevel[floorLevel as keyof typeof simulationModifiers.floorLevel] || 1.0;
    let srvMod = simulationModifiers.serviceType[serviceType as keyof typeof simulationModifiers.serviceType] || 1.0;

    let min = baseRule.minPrice * volMod * floorMod * srvMod;
    let max = baseRule.maxPrice * volMod * floorMod * srvMod;

    if (hasSpecialCleaning) {
      min += 50000;
      max += 150000;
    }

    setResultMin(Math.floor(min / 1000) * 1000);
    setResultMax(Math.floor(max / 1000) * 1000);
    setHasCalculated(true);
  };

  return (
    <div className="page-simulation">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">料金シミュレーション</h1>
          <p className="section-desc">お部屋の状況を選択するだけで、概算の作業料金がわかります。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          
          <div className="simulation-form-wrapper">
            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>条件を選択してください</h2>
            <form onSubmit={handleCalculate} className="card p-md flex flex-col gap-md" style={{ padding: '2rem' }}>
              
              <div className="form-group flex col gap-xs" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-bold font-700" style={{ fontWeight: 700 }}>間取り</label>
                <select value={roomType} onChange={e => setRoomType(e.target.value)} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  {basePricingRules.map(rule => (
                    <option key={rule.roomType} value={rule.roomType}>{rule.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group flex col gap-xs" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-bold" style={{ fontWeight: 700 }}>荷物の量</label>
                <select value={volume} onChange={e => setVolume(e.target.value)} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  <option value="low">少なめ</option>
                  <option value="normal">標準（生活空間が確保されている）</option>
                  <option value="high">多め（床や壁が見えない部分がある）</option>
                  <option value="veryHigh">かなり多い（ゴミ屋敷状態）</option>
                </select>
              </div>

              <div className="form-group flex col gap-xs" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-bold" style={{ fontWeight: 700 }}>階数・エレベーター</label>
                <select value={floorLevel} onChange={e => setFloorLevel(e.target.value)} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  <option value="ground">1階・戸建て</option>
                  <option value="upperWithElevator">2階以上（エレベーターあり）</option>
                  <option value="upperNoElevator">2階以上（階段のみ）</option>
                </select>
              </div>

              <div className="form-group flex col gap-xs" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-bold" style={{ fontWeight: 700 }}>ご希望の主なサービス</label>
                <select value={serviceType} onChange={e => setServiceType(e.target.value)} style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  <option value="estateClearing">遺品整理</option>
                  <option value="garbageCleaning">ゴミ清掃（片付けメイン）</option>
                </select>
              </div>

              <div className="form-group flex" style={{ padding: '1rem 0' }}>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', fontWeight: 700 }}>
                  <input type="checkbox" checked={hasSpecialCleaning} onChange={e => setHasSpecialCleaning(e.target.checked)} style={{ transform: 'scale(1.2)' }} />
                  特殊清掃（孤独死現場等の除菌・消臭）が必要
                </label>
              </div>

              <Button type="submit" size="lg" fullWidth>料金を計算する</Button>
            </form>
          </div>

          <div className="simulation-result-wrapper">
            <div className="card text-center" style={{ position: 'sticky', top: '100px', backgroundColor: 'var(--color-primary-dark)', padding: '3rem 2rem', color: 'white' }}>
              <h2 className="text-white mb-md" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>概算お見積り金額</h2>
              
              {hasCalculated ? (
                <div className="result-price">
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    {resultMin.toLocaleString()} <span style={{ fontSize: '1.5rem' }}>円</span> <br/>
                    <span style={{ fontSize: '1.5rem', color: 'white' }}>〜</span><br/>
                    {resultMax.toLocaleString()} <span style={{ fontSize: '1.5rem' }}>円</span>
                  </div>
                  <NoticeBox variant="warning" className="text-left bg-white text-text mt-lg" title="ご注意ください">
                    <p style={{ fontSize: '0.875rem' }}>※この結果は参考価格です。正確な料金は現地の状況を確認した後にご提示いたします。</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>※買取可能な品物がある場合、上記金額から差し引きさせていただきます。</p>
                  </NoticeBox>
                  <div className="mt-xl">
                    <Button href="/contact" variant="accent" size="lg" fullWidth>正確な無料お見積りへ</Button>
                  </div>
                </div>
              ) : (
                <div className="placeholder-text" style={{ padding: '3rem 0', opacity: 0.8 }}>
                  <p>左のフォームに条件を入力し<br/>「料金を計算する」ボタンを押してください</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
