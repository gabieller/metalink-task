import Head from "next/head";
import "../styles/globals.css";

function MetaLink({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meta.link</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MetaLink;
