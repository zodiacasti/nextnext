import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Heading from "components/Heading";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading text="Helllllloo" />
    </div>
  );
};
export default Home;
