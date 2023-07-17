import Nav from "./components/Nav";
import HeroSection from "./hero-section/HeroSection";
import LogoSection from "./logo-section/LogoSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <HeroSection />
      <LogoSection />
    </main>
  );
}
