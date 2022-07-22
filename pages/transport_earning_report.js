import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportEarningReport from "../transportation/earning_report";

const TransportEarningReportsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Earning Report</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportEarningReport />
    </div>
  );
};

TransportEarningReportsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportEarningReportsPage;
