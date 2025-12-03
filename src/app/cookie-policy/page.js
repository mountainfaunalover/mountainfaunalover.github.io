import styles from "../privacy-policy/page.module.css"; // Reuse styles

export const metadata = {
    title: "Cookie Policy | Mountain & Fauna Lover",
    description: "Informativa sui cookie per Mountain & Fauna Lover.",
};

export default function CookiePolicy() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Cookie Policy</h1>
            <div className={styles.content}>
                <p><strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong></p>

                <h2>1. Cosa sono i Cookie?</h2>
                <p>
                    I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali,
                    dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.
                </p>

                <h2>2. Tipologie di Cookie utilizzati</h2>
                <p>Questo sito utilizza le seguenti tipologie di cookie:</p>

                <h3>Cookie Tecnici</h3>
                <p>
                    Necessari per il corretto funzionamento del sito. Non richiedono il consenso dell'utente.
                </p>

                <h3>Cookie Analitici (Google Analytics 4)</h3>
                <p>
                    Utilizziamo Google Analytics 4 per raccogliere informazioni statistiche anonime sull'utilizzo del sito
                    (es. numero di visitatori, pagine visitate). Questi cookie ci aiutano a migliorare il nostro servizio.
                    Gli indirizzi IP vengono anonimizzati.
                </p>

                <h3>Cookie di Terze Parti (YouTube e Social)</h3>
                <p>
                    Il sito incorpora video da YouTube e link a social network (Instagram, TikTok).
                    Queste terze parti potrebbero installare cookie quando interagisci con i loro contenuti.
                    Per maggiori informazioni, ti invitiamo a consultare le privacy policy di questi servizi:
                </p>
                <ul>
                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google & YouTube Privacy Policy</a></li>
                    <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Instagram Data Policy</a></li>
                    <li><a href="https://www.tiktok.com/legal/page/eea/privacy-policy/it" target="_blank" rel="noopener noreferrer">TikTok Privacy Policy</a></li>
                </ul>

                <h2>3. Gestione dei Cookie</h2>
                <p>
                    Puoi gestire le tue preferenze sui cookie direttamente dalle impostazioni del tuo browser.
                    Puoi bloccare o cancellare i cookie, ma tieni presente che alcune funzionalità del sito potrebbero non funzionare correttamente.
                </p>
            </div>
        </main>
    );
}
