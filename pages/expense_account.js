import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Head from "next/head";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import ExpenseAccount from "../account/Expense_account";

const ExpenseAccountsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>PayMax Admin Expense Account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ExpenseAccount />
    </div>
  );
};

ExpenseAccountsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default ExpenseAccountsPage;
