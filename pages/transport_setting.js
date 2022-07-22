import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportSetting from "../transportation/setting";

const TransportSettingsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Setting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportSetting />
    </div>
  );
};

TransportSettingsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportSettingsPage;
