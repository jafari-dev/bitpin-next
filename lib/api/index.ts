import { ChartsResponse, MarketsResponse } from "./types";
import { MARKETS, MARKETS_LAST_PRICES } from "./urls";

export async function fetchMarkets(): Promise<MarketsResponse["results"]> {
  const result: MarketsResponse["results"] = [];

  try {
    for (let pageNumber = 1; ; pageNumber++) {
      const apiUrl = `${MARKETS}/?page=${pageNumber}`;
      const response = await fetch(apiUrl);
      const data: MarketsResponse = await response.json();

      if (data == null) return [];

      result.push(...data.results);
      if (data.next == null) break;
    }

    return result;
  } catch {
    return [];
  }
}

export async function fetchCharts(): Promise<ChartsResponse["results"]> {
  const result: ChartsResponse["results"] = [];

  try {
    for (let pageNumber = 1; ; pageNumber++) {
      const apiUrl = `${MARKETS_LAST_PRICES}/?page=${pageNumber}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data == null) return [];

      result.push(...data.results);
      if (data.next == null) break;
    }

    return result;
  } catch {
    return [];
  }
}
