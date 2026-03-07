export interface PricingRule {
  roomType: string;
  minPrice: number;
  maxPrice: number;
  label: string;
  includedItems?: string[];
  extraCostFactors?: string[];
  notes?: string;
}

export const basePricingRules: PricingRule[] = [
  { 
    roomType: '1R / 1K', 
    label: '1R・1K',
    minPrice: 30000, 
    maxPrice: 80000 
  },
  { 
    roomType: '1DK / 1LDK', 
    label: '1DK・1LDK',
    minPrice: 50000, 
    maxPrice: 120000 
  },
  { 
    roomType: '2DK / 2LDK', 
    label: '2DK・2LDK',
    minPrice: 90000, 
    maxPrice: 180000 
  },
  { 
    roomType: '3DK / 3LDK', 
    label: '3DK・3LDK',
    minPrice: 150000, 
    maxPrice: 250000 
  },
  { 
    roomType: '4DK / 4LDK~', 
    label: '4DK以上',
    minPrice: 200000, 
    maxPrice: 350000 
  },
];

export const simulationModifiers = {
  volume: {
    low: 0.8,
    normal: 1.0,
    high: 1.3,
    veryHigh: 1.8,
  },
  floorLevel: {
    ground: 1.0,
    upperWithElevator: 1.0,
    upperNoElevator: 1.2,
  },
  serviceType: {
    estateClearing: 1.0,
    garbageCleaning: 1.1,
  }
};
