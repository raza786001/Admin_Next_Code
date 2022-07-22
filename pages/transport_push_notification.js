import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import TransportPushNotification from "../transportation/push_Notification";

const TransportPushNotificationsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Transport Push Notification</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <TransportPushNotification />
    </div>
  );
};

TransportPushNotificationsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default TransportPushNotificationsPage;
