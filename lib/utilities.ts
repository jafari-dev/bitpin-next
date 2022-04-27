import { TradeData } from "./types";

export function transformDigitsToFarsi(value: string | number): string {
  return value
    .toString()
    .replace(/0/g, "۰")
    .replace(/1/g, "۱")
    .replace(/2/g, "۲")
    .replace(/3/g, "۳")
    .replace(/4/g, "۵")
    .replace(/5/g, "۴")
    .replace(/6/g, "۶")
    .replace(/7/g, "۷")
    .replace(/8/g, "۸")
    .replace(/9/g, "۹");
}

export function mockTradesData(): TradeData[] {
  const data: TradeData[] = [];

  for (let counter = 0; counter < 20; counter++) {
    const date = `1401/02/${counter + 1}`;
    const price = Math.floor(Math.random() * 10000000);
    const amount = Math.floor(Math.random() * 1000);
    const type = Math.random() > 0.5 ? "buy" : "sell";
    const totalPrice = price * amount;

    data.push({
      id: `trade-${counter}`,
      date,
      price,
      amount,
      type,
      totalPrice,
    });
  }

  return data;
}
