import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportManualRide from "../transportation/manual_ride";

const TransportManualRidesPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Manual Ride</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportManualRide />
    </div>
  );
};

TransportManualRidesPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportManualRidesPage;
