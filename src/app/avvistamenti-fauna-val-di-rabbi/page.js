import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "Avvistamenti Fauna Val di Rabbi | Dove Vedere Cervi e Camosci",
    description: "Scopri i migliori punti per avvistare cervi, camosci e stambecchi in Val di Rabbi. Guida completa agli orari, luoghi e consigli per l'osservazione faunistica.",
    keywords: ["avvistamenti cervi val di rabbi", "fauna val di sole", "dove vedere camosci trentino", "bramito del cervo rabbi", "fotografia naturalistica trentino"]
};

export default function AvvistamentiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Val di Rabbi - Avvistamenti Fauna",
        "description": "Una delle migliori valli alpine per l'osservazione di cervi, camosci e stambecchi nel loro habitat naturale.",
        "touristType": ["Nature Lovers", "Photographers"],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "46.4167",
            "longitude": "10.8500"
        },
        "image": "https://mountainfaunalover.github.io/images/home/background.jpg"
    };

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className={styles.hero}>
                <Image
                    src="/images/home/background.jpg"
                    alt="Cervo in Val di Rabbi"
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Avvistamenti Fauna in Val di Rabbi</h1>
                    <p className={styles.subtitle}>La guida definitiva per osservare gli animali selvatici nel Parco Nazionale dello Stelvio</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Cosa Puoi Vedere</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Il Cervo Nobile</h3>
                        <p className={styles.text}>
                            Il re della foresta. In autunno, la Val di Rabbi risuona del potente bramito dei maschi in amore.
                            È facile avvistarli al tramonto nei prati ai margini del bosco.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Il Camoscio Alpino</h3>
                        <p className={styles.text}>
                            Agile e sfuggente, domina le pareti rocciose. Per vederlo bisogna salire di quota,
                            spesso oltre il limite della vegetazione arborea.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Lo Stambecco</h3>
                        <p className={styles.text}>
                            Simbolo delle Alpi, vive alle quote più alte. Confidente e maestoso, si lascia spesso
                            avvicinare (con rispetto) per scatti fotografici indimenticabili.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Quando e Dove</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Orari Migliori</h3>
                        <p className={styles.text}>
                            L'alba e il tramonto sono i momenti d'oro. Gli animali sono più attivi e la luce è perfetta per la fotografia.
                            In estate, cercate il fresco delle prime ore del mattino.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Il Rispetto Prima di Tutto</h3>
                        <p className={styles.text}>
                            Ricorda: siamo ospiti a casa loro. Mantieni sempre la distanza, non fare rumore e non lasciare tracce.
                            L'osservazione etica è l'unica via.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Mappa della Valle</h2>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87654.321!2d10.8500!3d46.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782a0c0c0c0c0c0%3A0x0!2sVal%20di%20Rabbi!5e0!3m2!1sit!2sit!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
