import "../styles/globals.scss";
import {
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Container, ThemeProvider } from "react-bootstrap";
import { Footer, Header, NavigationMenu } from "@layouts";
import type { AppProps } from "next/app";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Application({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider dir="rtl">
      <Container>
        <Header />
        <NavigationMenu />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Application;
