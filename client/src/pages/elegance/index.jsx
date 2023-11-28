import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Table from "../../components/Table";
import MyChart from "../../components/Chart";

import styles from "./elegance.module.css";
import { ToastContainer } from "react-toastify";

const Elegance = () => {
  return (
    <section className={styles.body}>
      <NavBar />
      <Table />
      <div className={styles.container}>
        <MyChart />
      </div>
      <ToastContainer />
      <Footer />
    </section>
  );
};

export default Elegance;
