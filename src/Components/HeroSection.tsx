
import Image from "next/image";
import styles from '../app/HeroSection.module.css';

interface HeroSectionProps {
  imageSrc: string;
}

export default function HeroSection({ imageSrc }: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Image
          className={styles.heroImage}
          alt="hero"
          src={imageSrc}
          width={2100}
          height={2100}
        />
      </div>
    </section>
  );
}