import "../styles/globals.scss";
import { Container, ThemeProvider } from "react-bootstrap";
import type { AppProps } from "next/app";
import { Header } from "@layouts";

function Application({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider dir="rtl">
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default Application;
