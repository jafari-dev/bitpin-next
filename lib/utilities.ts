import { TradeData } from "./types";

export function transformDigitsToFarsi(value: string | number): string {
  return value
    .toString()
    .replaceAll("0", "۰")
    .replaceAll("1", "۱")
    .replaceAll("2", "۲")
    .replaceAll("3", "۳")
    .replaceAll("4", "۴")
    .replaceAll("5", "۵")
    .replaceAll("6", "۶")
    .replaceAll("7", "۷")
    .replaceAll("8", "۸")
    .replaceAll("9", "۹");
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
