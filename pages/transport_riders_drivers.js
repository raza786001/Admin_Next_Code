import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportRidersDriver from "../transportation/riders_drivers";

const TransportRidersDriversPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Rider Driver</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportRidersDriver />
    </div>
  );
};

TransportRidersDriversPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportRidersDriversPage;
