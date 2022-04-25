import { Head, Html, Main, NextScript } from "next/document";
import { ReactElement } from "react";

function Document(): ReactElement {
  return (
    <Html lang="fa-IR" dir="rtl">
      <Head>
        <link rel="icon" type="image/ico" href="favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
