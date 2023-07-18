import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CTASection from "./cta-section/CTASection";
import FeatureSection from "./feature-section/FeatureSection";
import HeroSection from "./hero-section/HeroSection";
import LogoSection from "./logo-section/LogoSection";
import styles from "./page.module.css";
import StatsSection from "./stats-section/StatsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <HeroSection />
        <LogoSection />
        <FeatureSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
