import { use, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/404.module.scss";
import Heading from "components/Heading";
const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Heading text="" />
      <p>You will be redirected to home page!</p>
    </>
  );
};
export default Error;
