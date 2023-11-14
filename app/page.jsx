"use client";

/* Components */
import Image from "next/image";
import Filters from "./components/Filters";
import { useState, useEffect } from "react";

/* Styles */
import styles from "./styles/layout/page.module.scss";
import { fetchData } from "./utils/fetchData";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTheData = async () => {
      try {
        const jsonData = await fetchData("/data.json");
        setData(jsonData);
      } catch (error) {
        console.error("Problème dans la page :", error);
      }
    };
    fetchTheData();
  });
  return (
    <main className={styles.main}>
      <Filters data={data} />
      <div className={styles.container}>
        <h2>&lt;main&gt; provisoire</h2>
      </div>
    </main>
  );
}
