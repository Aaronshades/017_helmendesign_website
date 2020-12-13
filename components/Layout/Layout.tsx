import Head from "next/head";

import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";

const Layout = ({ children, pageTitle, description, ...props }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.layout}>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
