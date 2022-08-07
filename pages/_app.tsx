import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import DataProvider from "../store/DataProvider";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic%7CLato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=optional"
          media="all"
        />
      </Head>
      <DataProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}

export default MyApp;
