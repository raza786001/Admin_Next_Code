import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportVehicleCategory from "../transport/transport_vehicle_cat";

const TransportVehicleCategorysPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Transport Vehicle category </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportVehicleCategory />
    </div>
  );
};

TransportVehicleCategorysPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportVehicleCategorysPage;
