import { Col, Row } from "react-bootstrap";
import { LoadingIndicator, MarketCard } from "@components";
import { memo, useCallback, useEffect, useState } from "react";
import { Market } from "#/types";
import type { NextPage } from "next";
import { fetchMarkets } from "#/api";

const MarketsList: NextPage = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const getAndSetMarkets = useCallback(async (): Promise<void> => {
    const cookies = document.cookie.split("; ");
    const fetchedMarkets = await fetchMarkets();
    const transformedMarkets: Market[] = fetchedMarkets.map((market) => ({
      id: market.id,
      title: market.title_fa,
      logo: market.currency1.image,
      change: market.price_info.change,
      code: market.code,
      isBookmarked: cookies.some((cookie) => cookie === `${market.code}=bookmarked`),
      price: market.price,
    }));

    setMarkets(transformedMarkets);
    setIsDataFetched(true);
  }, []);

  const handleToggleBookmark = useCallback(
    (selectedMarket: Market) => {
      const updatedMarket = markets.map((market) => {
        if (market === selectedMarket) return { ...market, isBookmarked: !market.isBookmarked };
        else return market;
      });

      setMarkets(updatedMarket);
    },
    [markets]
  );

  useEffect(() => {
    getAndSetMarkets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-4">
      <h3>لیست مارکت‌ها</h3>
      {isDataFetched ? (
        <Row>
          {markets.map((market) => (
            <Col key={market.id} sm={6} md={4} lg={3}>
              <MarketCard market={market} onToggleBookmark={handleToggleBookmark} />
            </Col>
          ))}
        </Row>
      ) : (
        <LoadingIndicator />
      )}
    </section>
  );
};

export default memo(MarketsList);
