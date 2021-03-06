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
        <title>Tamanu Patient ID Generator</title>
      </Head>

      <main className={styles.main}>
        <h2>Tamanu Patient ID Generator</h2>
        <p className={styles.description}>Your new patient id is</p>
        <h1 className={styles.title}>{generateId()}</h1>

        <p className={styles.description}>Refresh the page for another</p>
      </main>
    </div>
  );
}
