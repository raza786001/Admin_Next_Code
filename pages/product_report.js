import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";

import ProductReport from "../product/product_report";

const AddProductReportsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Product Report</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ProductReport />
    </div>
  );
};

AddProductReportsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default AddProductReportsPage;
