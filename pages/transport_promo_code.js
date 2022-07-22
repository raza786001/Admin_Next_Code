import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportPromoCode from "../transportation/promo_code";

const TransportPromoCodesPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Promo Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportPromoCode />
    </div>
  );
};

TransportPromoCodesPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportPromoCodesPage;
