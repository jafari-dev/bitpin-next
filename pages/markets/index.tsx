import { Col, Row } from "react-bootstrap";
import { Empty, MarketCard } from "@components";
import { GetStaticProps, NextPage } from "next";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Market } from "#/types";
import { fetchMarkets } from "#/api";

const MarketsList: NextPage<{ markets: Market[] }> = (props) => {
  const [areJustBookmarksVisible, setAreJustBookmarksVisible] = useState(true);
  const [markets, setMarkets] = useState(props.markets);

  const visibleMarkets = useMemo((): Market[] => {
    if (areJustBookmarksVisible) {
      return markets.filter((market) => market.isBookmarked);
    } else {
      return markets;
    }
  }, [markets, areJustBookmarksVisible]);

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
    const cookies = document.cookie.split("; ");

    const updatedMarkets = props.markets.map((market) => ({
      ...market,
      isBookmarked: cookies.some((cookie) => cookie === `${market.code}=bookmarked`),
    }));

    setMarkets(updatedMarkets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAllMarkets = useCallback(() => setAreJustBookmarksVisible(false), []);
  const showBookmarkedMarkets = useCallback(() => setAreJustBookmarksVisible(true), []);

  return (
    <section className="my-4">
      <h3>لیست مارکت‌ها</h3>
      <Row className="bg-white rounded-3 py-2 mx-auto">
        <Col xs={12} md={6} className="d-none d-md-block">
          <h5 className="mb-0">فیلتر بر اساس</h5>
        </Col>
        <Col xs={6} md={3} className="d-flex align-items-center">
          <input
            readOnly
            id="all-markets"
            type="radio"
            checked={!areJustBookmarksVisible}
            onClick={showAllMarkets}
          />
          <label htmlFor="all-markets" className="me-2">
            همه
          </label>
        </Col>
        <Col xs={6} md={3} className="d-flex align-items-center">
          <input
            readOnly
            id="favorite-markets"
            type="radio"
            checked={areJustBookmarksVisible}
            onClick={showBookmarkedMarkets}
          />
          <label htmlFor="favorite-markets" className="me-2">
            منتخب
          </label>
        </Col>
      </Row>
      <Row>
        {visibleMarkets.map((market) => (
          <Col key={market.id} sm={6} md={4} lg={3}>
            <MarketCard market={market} onToggleBookmark={handleToggleBookmark} />
          </Col>
        ))}
      </Row>
      {visibleMarkets.length === 0 ? <Empty /> : null}
    </section>
  );
};

export default memo(MarketsList);

export const getStaticProps: GetStaticProps = async () => {
  const markets = await fetchMarkets();
  const newFaceMarkets: Market[] = markets.map((market) => ({
    id: market.id,
    title: market.title_fa,
    logo: market.currency1.image,
    change: market.price_info.change,
    code: market.code,
    isBookmarked: false,
    price: market.price,
  }));

  return {
    props: {
      markets: newFaceMarkets,
    },
    revalidate: 300,
  };
};
