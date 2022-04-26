import { Coin } from "_/images";
import { memo } from "react";

function Header(): React.ReactElement {
  return (
    <header className="my-3 p-3 rounded-3 text-center d-flex flex-row align-items-center justify-content-between">
      <Coin className="d-none d-md-block" />
      <div className="mx-auto">
        <h1 className="d-inline-block mb-4">بیت‌پین</h1>
        <h6 className="mb-0">بازار حرفه‌ای خرید و فروش انلاین ارز دیجیتال</h6>
      </div>
      <Coin className="d-none d-md-block" />
    </header>
  );
}

export default memo(Header);
