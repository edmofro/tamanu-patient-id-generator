import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const generators = {
    A: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    0: () => Math.floor(Math.random() * 10).toFixed(0),
  };

  function createIdGenerator(format) {
    const generatorPattern = Array.from(format).map(
      (char) => generators[char] || (() => "")
    );

    return () => generatorPattern.map((generator) => generator()).join("");
  }

  const generateId = createIdGenerator("AAAA000000");

  generateId();

  return (
    <div className={styles.container}>
      <Head>
        <title>Generate Tamanu Patient ID</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tamanu Patient ID Generator</h1>

        <p className={styles.description}>Your new patient id is</p>
        <h3>{generateId()}</h3>

        <p className={styles.description}>Refresh the page for another</p>
      </main>
    </div>
  );
}
