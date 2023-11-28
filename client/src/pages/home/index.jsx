import React from "react";
import Description from "../../components/Description";
import FileUploader from "../../components/FileUploader";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { ToastContainer } from "react-toastify";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={styles.body}>
      <NavBar />
      <div className={styles.container}>
        <Description />
        <FileUploader />
        <ToastContainer />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
