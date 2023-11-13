/* Components */
import Image from "next/image";

/* Styles */
import styles from "../styles/components/banner.module.scss";

/* Images & Illustrations */
import illustration from "@/public/illustrations/illustration.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__shape}></div>
      <Image
        src={illustration}
        alt="Image d'illustration contenant un magasin avec des réductions"
        className={styles.banner__illustration}
      />
    </div>
  );
}

export default Banner;
