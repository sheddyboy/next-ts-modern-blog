import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import DataProvider from "../store/DataProvider";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}

export default MyApp;
