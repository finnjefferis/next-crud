import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Link className={styles.button} href="/notes">NOTES</Link>
      <Link className={styles.button}  href="/forms">FORMS</Link>
      </div>
    </main>
  );
}
