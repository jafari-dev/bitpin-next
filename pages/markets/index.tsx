import { Col, Row } from "react-bootstrap";
import { memo, useCallback, useEffect, useState } from "react";
import { MarketCard } from "@components";
import type { MarketsResponse } from "#/api/types";
import type { NextPage } from "next";
import { fetchMarkets } from "#/api";

type Market = MarketsResponse["results"];

const MarketsList: NextPage = () => {
  const [markets, setMarkets] = useState<Market>([]);

  const getAndSetMarkets = useCallback(async (): Promise<void> => {
    const fetchedMarkets = await fetchMarkets();

    setMarkets(fetchedMarkets);
  }, []);

  useEffect(() => {
    getAndSetMarkets();
  }, []);

  return (
    <section className="my-4">
      <h3>لیست مارکت‌ها</h3>
      <Row>
        {markets.map((market) => (
          <Col key={market.id} sm={6} md={4} lg={3}>
            <MarketCard
              id={market.id}
              change={market.price_info.change}
              code={market.code}
              isMarked={false}
              logo={market.currency1.image}
              price={market.price}
              title={market.title_fa}
              onBookmarkButtonClick={(): void => {
                console.log(123);
              }}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default memo(MarketsList);
