import HeroSection from "@/components/HeroSection";
import SocialHub from "@/components/SocialHub";
import PartnersSection from "@/components/PartnersSection";
import StorySection from "@/components/StorySection";
import styles from "./page.module.css";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simone Mattioli",
    url: "https://mountainfaunalover.github.io",
    sameAs: [
      "https://www.instagram.com/mountainfaunalover",
      "https://www.youtube.com/@mountainfaunalover",
      "https://www.linkedin.com/in/simone-mattioli",
    ],
    jobTitle: "Founder & Content Creator",
    worksFor: {
      "@type": "Organization",
      name: "Mountain & Fauna Lover",
      url: "https://mountainfaunalover.github.io",
      logo: "https://mountainfaunalover.github.io/images/branding/logo.jpg"
    },
    description:
      "Esperto locale della Val di Rabbi e Val di Sole. Guida per avvistamenti fauna (cervi, stambecchi), escursioni in e-bike e recensore Swarovski Optik.",
    knowsAbout: [
      "Fauna Alpina",
      "Val di Rabbi",
      "Val di Sole",
      "E-Bike Trekking",
      "Swarovski Optik",
      "Fotografia Naturalistica",
    ],
    areaServed: {
      "@type": "Place",
      name: "Val di Rabbi",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "46.4167",
        longitude: "10.8500"
      }
    }
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StorySection />
      <section id="social-hub">
        <SocialHub />
      </section>
      <PartnersSection />
      {/* Other sections will go here */}
    </main>
  );
}
