import React from "react";
import Head from  "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content={`Learn more about ${pagina}`} />
        <meta property="og:title" content={`${pagina} - My Clothing Store`} />
        <meta
          property="og:description"
          content={`Learn more about ${pagina}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/guitar.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
