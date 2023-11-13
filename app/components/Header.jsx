/* Components */
import Image from "next/image";
import Navigation from "./Navigation";
import Banner from "./Banner";

/* Styles */
import styles from "../styles/components/header.module.scss";

/* Images & Illustrations */
import logo from "@/public/logo/logoLightGreen.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
            src={logo}
            alt="Logo de Mode Intemp, un M et un I fusionné"
            className={styles.title__logo}
            height={42}
            width={42}
            draggable="false"
          />
          <h1 className={styles.title__name}>mode intemp</h1>
        </div>
        <Navigation />
      </div>
      <Banner />
    </header>
  );
}

export default Header;
