/* Components */
import Image from "next/image";
import React, { useState } from "react";
import { translateColor } from "../utils/translation";
import formatPrice from "../utils/formatPrice";

/* Styles */
import styles from "../styles/components/filters.module.scss";

/* Images & Illustrations */
import search from "@/public/icons/search.svg";

function Filters({ data }) {
  const categories = Array.from(new Set(data.map((item) => item.categorie)));
  const colors = Array.from(new Set(data.flatMap((item) => item.colors)));
  const prices = data.map((item) => item.price);

  const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const highestPrice = prices.length > 0 ? Math.max(...prices) : 10000;

  const [minPrice, setMinPrice] = useState(lowestPrice);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value, 10);
    if (newMinPrice < maxPrice) {
      setMinPrice(newMinPrice);
    } else {
      setMinPrice(maxPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    if (newMaxPrice > minPrice) {
      setMaxPrice(newMaxPrice);
    } else {
      setMaxPrice(minPrice);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.search__term}
          placeholder="Rechercher..."
        />
        <button className={styles.search__btn}>
          <Image
            src={search}
            alt="Icône représentant une loupe pour la recherche."
            className={styles.search__btn__icon}
          />
        </button>
      </div>
      <div className={styles.container}>
        <>
          <div className={styles.filter}>
            <div className={styles.filter__title}>Catégorie</div>
          </div>
          <div className={styles.filter__content}>
            {categories.sort().map((item, key) => (
              <div key={key}>
                <input
                  type="checkbox"
                  name={item}
                  id={item}
                  className={styles.checkbox}
                />
                <label htmlFor={item} className={styles.label}>
                  {item}
                </label>
              </div>
            ))}
          </div>
        </>
        <>
          <div className={styles.filter}>
            <div className={styles.filter__title}>Styles</div>
          </div>
          <div className={styles.filter__content}>
            <div>
              <input
                type="checkbox"
                name="woman"
                id="woman"
                className={styles.checkbox}
              />
              <label htmlFor="woman" className={styles.label}>
                femme
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="man"
                id="man"
                className={styles.checkbox}
              />
              <label htmlFor="man" className={styles.label}>
                homme
              </label>
            </div>{" "}
            <div>
              <input
                type="checkbox"
                name="mix"
                id="mix"
                className={styles.checkbox}
              />
              <label htmlFor="mix" className={styles.label}>
                mixte
              </label>
            </div>
          </div>
        </>
        <>
          <div className={styles.filter}>
            <div className={styles.filter__title}>Couleur</div>
          </div>
          <div className={styles.filter__content}>
            <div className={styles.filter__content__colors}>
              {colors.map((color, key) => (
                <div key={key} className={`${styles.color} ${styles[color]}`}>
                  <div className={styles.color__name}>
                    {translateColor(color)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
        <>
          <div className={styles.filter}>
            <div className={styles.filter__title}>Prix</div>
          </div>
          <div>
            <input
              type="range"
              name="minPrice"
              id="minPrice"
              min={lowestPrice}
              max={highestPrice}
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="range"
              name="maxPrice"
              id="maxPrice"
              min={lowestPrice}
              max={highestPrice}
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <p>
              {formatPrice(minPrice)} - {formatPrice(maxPrice)}
            </p>
          </div>
        </>
        <div className={styles.filter}>
          <div className={styles.filter__title}>Note</div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
