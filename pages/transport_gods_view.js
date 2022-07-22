import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportGodsView from "../transportation/gods_view";

const TransportGodsViewsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport God&apos;s View`</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportGodsView />
    </div>
  );
};

TransportGodsViewsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportGodsViewsPage;
