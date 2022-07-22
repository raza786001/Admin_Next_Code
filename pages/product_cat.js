import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";

import ProductCategory from "../product/product_cat";

const AddProductCategorysPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Expense Category</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ProductCategory />
    </div>
  );
};

AddProductCategorysPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default AddProductCategorysPage;
