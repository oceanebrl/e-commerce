/* Components */
import Image from "next/image";

/* Styles */
import styles from "../styles/components/footer.module.scss";

/* Images & Illustrations */
import logo from "@/public/logo/logoLightWhite.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src={logo}
          alt="Logo de Mode Intemp"
          className={styles.container__logo}
        />
        <p className={styles.container__paragraph}>
          Toutes les illustrations et images proviennent de{" "}
          <a
            href="https://www.humaaans.com"
            target="_blank"
            className={styles.container__link}
          >
            Humaaans
          </a>{" "}
          et{" "}
          <a
            href="https://www.svgrepo.com"
            target="_blank"
            className={styles.container__link}
          >
            SVG Repos
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
