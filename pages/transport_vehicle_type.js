import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportVehicleType from "../transport/transport_vehicle_type";

const TransportVehicleTypesPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Transport Type </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportVehicleType />
    </div>
  );
};

TransportVehicleTypesPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportVehicleTypesPage;
