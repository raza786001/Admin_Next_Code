import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportService from "../transport/transport_service";

const TransportServicesPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Transport Service </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportService />
    </div>
  );
};

TransportServicesPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportServicesPage;
