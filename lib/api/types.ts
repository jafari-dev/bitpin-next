interface Currency {
  code: string;
  color: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  for_test: boolean;
  high_risk: boolean;
  id: number;
  image: string;
  show_high_risk: boolean;
  tags: string[];
  title: string;
  title_fa: string;
  tradable: boolean;
  withdraw_commission: string;
}

export interface MarketsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    title_fa: string;
    code: string;
    tradable: boolean;
    price: number;
    price_info: {
      change: number;
      min: number;
      max: number;
    };
    currency1: Currency;
    currency2: Currency;
  }[];
}

export interface ChartsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    code: string;
    title: string;
    title_fa: string;
    chart: {
      price: string;
      created_at: number;
    }[];
  }[];
}
