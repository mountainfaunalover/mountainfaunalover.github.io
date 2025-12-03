import styles from "./page.module.css";

export const metadata = {
    title: "Privacy Policy | Mountain & Fauna Lover",
    description: "Informativa sulla privacy per Mountain & Fauna Lover.",
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <div className={styles.content}>
                <p><strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong></p>

                <h2>1. Introduzione</h2>
                <p>
                    Benvenuti su Mountain & Fauna Lover. La tua privacy è importante per noi.
                    Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali
                    quando visiti il nostro sito web.
                </p>

                <h2>2. Titolare del Trattamento</h2>
                <p>
                    Il titolare del trattamento dei dati è Simone Mattioli.<br />
                    Per qualsiasi domanda riguardante la privacy, puoi contattarci tramite i canali social indicati sul sito.
                </p>

                <h2>3. Dati Raccolti</h2>
                <p>
                    Non raccogliamo dati personali identificativi (come nome, email, telefono) a meno che tu non ce li fornisca volontariamente
                    (ad esempio contattandoci via email o social).
                </p>
                <p>
                    Tuttavia, il sito utilizza servizi di terze parti che potrebbero raccogliere dati di utilizzo anonimi:
                </p>
                <ul>
                    <li><strong>Google Analytics 4:</strong> Per analizzare il traffico del sito e migliorare l'esperienza utente. I dati sono anonimizzati.</li>
                    <li><strong>YouTube:</strong> Per la visualizzazione dei video incorporati.</li>
                </ul>

                <h2>4. Cookie</h2>
                <p>
                    Questo sito utilizza cookie per migliorare la navigazione e per le funzionalità di analisi.
                    Per maggiori dettagli, consulta la nostra <a href="/cookie-policy">Cookie Policy</a>.
                </p>

                <h2>5. Diritti dell'Utente</h2>
                <p>
                    In conformità con il GDPR, hai il diritto di:
                </p>
                <ul>
                    <li>Accedere ai tuoi dati.</li>
                    <li>Chiedere la rettifica o la cancellazione dei dati.</li>
                    <li>Opporti al trattamento dei dati.</li>
                </ul>
                <p>
                    Per esercitare questi diritti, contattaci direttamente.
                </p>

                <h2>6. Modifiche a questa Policy</h2>
                <p>
                    Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento.
                    Le modifiche saranno pubblicate su questa pagina.
                </p>
            </div>
        </main>
    );
}
