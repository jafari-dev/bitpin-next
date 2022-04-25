import "../styles/globals.scss";
import type { AppProps } from "next/app";

function Application({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default Application;
