import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import FormCard from "../components/FormCard"
import illustration from "../assets/illustration.svg";
import logo from "../assets/logo.svg"

const Home: NextPage = () => {
  const size = useWindowSize();

  return (
    <div className={styles.container}>
      <Head>
        <title>Disparo-Pro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.panel}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={297} height={84} />
        </div>
        <Image
          src={illustration}
          alt="illustration"
          width={size.width * 0.315625}
          height={size.height * 0.7695}
        />
      </div>

      <main className={styles.main}>
        <FormCard />
      </main>
    </div>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Home;
