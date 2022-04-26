import "../styles/globals.scss";
import { Container, ThemeProvider } from "react-bootstrap";
import { Footer, Header } from "@layouts";
import type { AppProps } from "next/app";

function Application({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider dir="rtl">
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Application;
