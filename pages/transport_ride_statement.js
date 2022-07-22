import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportRideStatement from "../transportation/ride_statement";

const TransportRideStatementsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Ride Statement</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportRideStatement />
    </div>
  );
};

TransportRideStatementsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportRideStatementsPage;
