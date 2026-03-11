'use client';

import React, { useState } from 'react';
import { Button } from '@/components/common/Button';
import { NoticeBox } from '@/components/common/NoticeBox';
import { PageHero } from '@/components/layout/PageHero';
import { basePricingRules, simulationModifiers } from '@/data/pricing';
import '../../styles/pages/simulation.css';

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
    
    const volMod = simulationModifiers.volume[volume as keyof typeof simulationModifiers.volume] || 1.0;
    const floorMod = simulationModifiers.floorLevel[floorLevel as keyof typeof simulationModifiers.floorLevel] || 1.0;
    const srvMod = simulationModifiers.serviceType[serviceType as keyof typeof simulationModifiers.serviceType] || 1.0;

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
      <PageHero
        title="料金シミュレーション"
        description="間取りや階数などを選択するだけで、概算費用や買取目安を事前にご確認いただけます。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          
          <div className="simulation-form-wrapper anim-fadeup">
            <div className="sim-form-container">
              <h2 className="sim-form-title">条件を選択してください</h2>
              <form onSubmit={handleCalculate}>
                
                <div className="sim-form-group">
                  <label className="sim-form-label">間取り</label>
                  <select className="sim-select" value={roomType} onChange={e => setRoomType(e.target.value)}>
                    {basePricingRules.map(rule => (
                      <option key={rule.roomType} value={rule.roomType}>{rule.label}</option>
                    ))}
                  </select>
                </div>

                <div className="sim-form-group">
                  <label className="sim-form-label">荷物の量</label>
                  <select className="sim-select" value={volume} onChange={e => setVolume(e.target.value)}>
                    <option value="low">少なめ</option>
                    <option value="normal">標準（生活空間が確保されている）</option>
                    <option value="high">多め（床や壁が見えない部分がある）</option>
                    <option value="veryHigh">かなり多い（ゴミ屋敷状態）</option>
                  </select>
                </div>

                <div className="sim-form-group">
                  <label className="sim-form-label">階数・エレベーター</label>
                  <select className="sim-select" value={floorLevel} onChange={e => setFloorLevel(e.target.value)}>
                    <option value="ground">1階・戸建て</option>
                    <option value="upperWithElevator">2階以上（エレベーターあり）</option>
                    <option value="upperNoElevator">2階以上（階段のみ）</option>
                  </select>
                </div>

                <div className="sim-form-group">
                  <label className="sim-form-label">ご希望の主なサービス</label>
                  <select className="sim-select" value={serviceType} onChange={e => setServiceType(e.target.value)}>
                    <option value="estateClearing">遺品整理</option>
                    <option value="garbageCleaning">ゴミ・不用品清掃（片付けメイン）</option>
                  </select>
                </div>

                <div className="sim-form-group">
                  <label className="sim-checkbox-label">
                    <input type="checkbox" className="sim-checkbox" checked={hasSpecialCleaning} onChange={e => setHasSpecialCleaning(e.target.checked)} />
                    特殊清掃（孤独死現場等の除菌・消臭）が必要
                  </label>
                </div>

                <Button type="submit" size="lg" fullWidth>料金を計算する</Button>
              </form>
            </div>
          </div>

          <div className="simulation-result-wrapper anim-fadeup" style={{ animationDelay: '0.1s' }}>
            <div className="sim-result-card">
              <h2 className="sim-result-title">概算お見積り金額</h2>
              
              {hasCalculated ? (
                <div className="result-price">
                  <div className="sim-price-display">
                    <span className="sim-price-amount">{resultMin.toLocaleString()}</span>
                    <span className="sim-price-unit">円</span>
                    <span className="sim-price-separator">〜</span>
                    <span className="sim-price-amount">{resultMax.toLocaleString()}</span>
                    <span className="sim-price-unit">円</span>
                  </div>
                  <NoticeBox variant="warning" className="text-left bg-white text-text mt-lg" title="ご注意ください">
                    <p className="text-sm">※この結果は参考価格です。正確な料金は現地の状況を確認した後にご提示いたします。</p>
                    <p className="text-sm mt-xs">※買取可能な品物がある場合、上記金額から差し引きさせていただきます。</p>
                  </NoticeBox>
                  <div className="mt-xl">
                    <Button href="/contact" variant="accent" size="lg" fullWidth>正確な無料お見積りへ</Button>
                  </div>
                </div>
              ) : (
                <div className="sim-placeholder">
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
