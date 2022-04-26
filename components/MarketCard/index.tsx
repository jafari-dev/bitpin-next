import { CircleMinus, CirclePlus } from "_/images";
import { memo, useCallback } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { Market } from "#/types";
import { transformDigitsToFarsi } from "#/utilities";

interface Props {
  market: Market;
  onToggleBookmark: (market: Market) => void;
}

const marketClasses = [
  "market-card",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-between",
  "rounded-3",
  "mx-auto",
  "my-3",
  "p-2",
];

const rowFlex = "d-flex flex-row align-items-center justify-content-between w-100";

function MarketCard({ market, onToggleBookmark }: Props): React.ReactElement {
  const { id, code, title, change, price, logo, isBookmarked } = market;

  const handleToggleBookmark = useCallback(() => {
    const cookies = document.cookie.split("; ");

    if (cookies.find((item) => item.trim() === `${code}=bookmarked`)) {
      document.cookie = `${code}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } else {
      document.cookie = `${code}=bookmarked`;
    }

    onToggleBookmark(market);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onToggleBookmark, code, isBookmarked]);

  return (
    <div className={marketClasses.join(" ")}>
      <div className={`${rowFlex} text-center mb-3`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`Logo of ${title}`} />
        <div>
          <h4>{title}</h4>
          <h5>{code.split("_").join(" / ")}</h5>
        </div>
      </div>
      <div className={`${rowFlex} mb-2`}>
        <h4>قیمت: </h4>
        <h5>{transformDigitsToFarsi(price)}</h5>
      </div>
      <div className={rowFlex}>
        <h4>تغییر: </h4>
        <h5 className={change >= 0 ? "positive" : "negative"}>
          {transformDigitsToFarsi(
            change > 0 ? `${change} +` : change < 0 ? `${Math.abs(change)} -` : "0"
          )}
        </h5>
      </div>
      <Link href={`markets/${id}`} passHref>
        <Button variant="warning" className="w-100 mt-3">
          مشاهده
        </Button>
      </Link>
      <Button onClick={handleToggleBookmark} variant="light" className="mt-2 w-100">
        {isBookmarked ? <CircleMinus /> : <CirclePlus />}
        {isBookmarked ? "حذف از لیست منتخب" : "افزودن به لیست منتخب"}
      </Button>
    </div>
  );
}

export default memo(MarketCard);
