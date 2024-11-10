
import Image from "next/image";
import Link from "next/link";
import styles from '../app/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src="/assets/logo.webp"
            width={2000}
            height={2000}
            alt="Logo"
          />
        </a>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.link}>Chocolate Bar</Link>
          <Link href="/chocolateBox" className={styles.link}>Chocolate Box</Link>
          <Link href="/quirkyBars" className={styles.link}>Quirky Bars</Link>
          <Link href="/giftBasket" className={styles.link}>Gift Basket</Link>
        </nav>
      </div>
    </header>
  );
}
