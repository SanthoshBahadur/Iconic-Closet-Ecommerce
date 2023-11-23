import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import Dashboard from "./user/Dashboard";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Best Offers - Iconic Closet"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
