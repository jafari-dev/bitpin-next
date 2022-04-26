export interface Market {
  id: number;
  title: string;
  code: string;
  logo: string;
  price: number;
  change: number;
  isBookmarked: boolean;
}

export interface TradeData {
  id: string;
  date: string;
  price: number;
  amount: number;
  type: "buy" | "sell";
  totalPrice: number;
}
