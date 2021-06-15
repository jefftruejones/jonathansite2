import { containerFull, content } from "./layout.module.css";
import Navbar from "./navbar";
import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jonathan Groger | LMBT</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        ></meta>
        <meta
          name="description"
          content="Jonathan Groger, Licensed Massage and Bodywork Therapist in Durham, North Carolina specializing in Deep Tissue, Baby Massage, and Top Surgery Scar massage."
        ></meta>
        <meta charset="UTF-8"></meta>
      </Head>
      <Navbar />
      <main className={containerFull}>
        <div className={content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
