/* Components */
import Image from "next/image";
import Link from "next/link";

/* Styles */
import styles from "../styles/components/navigation.module.scss";

/* Images & Illustrations */
import btnHeart from "@/public/icons/btn-heart.svg";
import btnCart from "@/public/icons/btn-cart.svg";
import btnHeartLight from "@/public/icons/btn-heart-light.svg";
import btnCartLight from "@/public/icons/btn-cart-light.svg";
import btnBlob from "@/public/icons/btn-blob.svg";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="#">
        <div className={styles.icon}>
          <Image
            src={btnBlob}
            alt="icônne représentant un cœur pour les favoris"
            className={styles.icon__blob}
          />
          <Image
            src={btnHeart}
            alt="icônne représentant un cœur pour les favoris"
            className={`${styles.icon__img} ${styles.icon__img__dark}`}
            height={30}
            width={30}
          />
          <Image
            src={btnHeartLight}
            alt="icônne représentant un cœur pour les favoris"
            className={`${styles.icon__img} ${styles.icon__img__light}`}
            height={30}
            width={30}
          />
        </div>
      </Link>
      <Link className={styles.link} href="#">
        <div className={styles.icon}>
          <Image
            src={btnBlob}
            alt="icônne représentant un cœur pour les favoris"
            className={styles.icon__blob}
          />
          <Image
            src={btnCart}
            alt="icônne représentant un caddie pour le panier"
            className={`${styles.icon__img} ${styles.icon__img__dark}`}
            height={30}
            width={30}
          />
          <Image
            src={btnCartLight}
            alt="icônne représentant un cœur pour les favoris"
            className={`${styles.icon__img} ${styles.icon__img__light}`}
            height={30}
            width={30}
          />
        </div>
      </Link>
      <Link className={styles.link} href="#">
        <div className={`${styles.link__btn} ${styles.link__btn__full}`}>
          S&apos;inscrire
        </div>
      </Link>
      <Link className={styles.link} href="#">
        <div className={styles.link__btn}>Se connecter</div>
      </Link>
    </nav>
  );
}

export default Navigation;
