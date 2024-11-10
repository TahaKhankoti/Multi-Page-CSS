
import Image from "next/image";
import Link from "next/link";
import styles from '../app/ChocolateCard.module.css'; // Import custom CSS module

interface ChocolateCardProps {
  category: string;
  title: string;
  image: string;
  price: string;
}

export default function ChocolateCard({ category, title, image, price }: ChocolateCardProps) {
  return (
    <div className={styles.card}>
      <a className={styles.imageWrapper}>
        <Image
          alt={title}
          className={styles.image}
          src={image}
          width={1000}
          height={1000}
        />
      </a>
      <div className={styles.content}>
        <h3 className={styles.category}>{category}</h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>
          FROM {price}
          <Link href="#" className={styles.link}>
            <svg className={styles.svgIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3l3 3-3 3" />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
}
