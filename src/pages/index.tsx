import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroBadge() {
  return (
    <div className={styles.heroBadge}>
      <span className={styles.heroBadgeDot} />
      Available on iPhone &amp; iPad
    </div>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <HeroBadge />
          <Heading as="h1" className={styles.heroTitle}>
            A full SQL server.<br />In your pocket.
          </Heading>
          <p className={styles.heroSubtitle}>
            Serverly runs a real, MySQL-compatible database server directly on
            your iPhone or iPad. Connect from any SQL client on your local
            network — no cloud, no configuration, no fuss.
          </p>
          <div className={styles.heroCtas}>
            <a className={styles.appStoreBadge} href="#" aria-label="Download on the App Store">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className={styles.appStoreBadgeText}>
                <span className={styles.appStoreSub}>Download on the</span>
                <span className={styles.appStoreMain}>App Store</span>
              </span>
            </a>
            <Link className={styles.learnMoreBtn} to="/docs/intro">
              Learn more
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.phoneStatusBar} />
              <div className={styles.phoneContent}>
                <div className={styles.serverCard}>
                  <div className={styles.serverCardDot} />
                  <div className={styles.serverCardInfo}>
                    <div className={styles.serverCardName}>my-database</div>
                    <div className={styles.serverCardMeta}>SQLite · Port 3306</div>
                  </div>
                  <div className={styles.serverCardStatus}>Running</div>
                </div>
                <div className={styles.codeSnippet}>
                  <span className={styles.codeComment}># From your Mac</span>
                  {'\n'}
                  <span className={styles.codeCmd}>mysql</span>
                  <span className={styles.codeArg}> -h 192.168.1.5 -P 3306</span>
                  {'\n'}
                  <span className={styles.codePrompt}>mysql&gt; </span>
                  <span className={styles.codeKeyword}>SELECT</span>
                  <span className={styles.codeText}> * </span>
                  <span className={styles.codeKeyword}>FROM</span>
                  <span className={styles.codeText}> users;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: '🗄️',
    title: 'SQLite Backend',
    desc: 'Powered by the battle-tested SQLite engine. Your data is stored safely in the iOS sandbox — no data leaves your device.',
  },
  {
    icon: '🔌',
    title: 'MySQL-Compatible Protocol',
    desc: 'Uses the MySQL wire protocol. Connect with mysql CLI, TablePlus, DBeaver, or any standard MySQL client — zero configuration.',
  },
  {
    icon: '📡',
    title: 'Local Network Only',
    desc: 'Serves exclusively on your local network while the app is active. No internet exposure, no background process running without you knowing.',
  },
  {
    icon: '⚡',
    title: 'Instant Setup',
    desc: 'Open the app, tap Run. Your server is live in seconds. No init scripts, no config files, no Docker — just SQL.',
  },
  {
    icon: '💻',
    title: 'Developer-First UX',
    desc: 'See live connections, run queries from within the app, inspect schema, and export your database — all from a clean iOS interface.',
  },
  {
    icon: '🔒',
    title: 'Private by Design',
    desc: 'All data stays on-device. No telemetry, no cloud sync, no analytics. Your schema and data are yours.',
  },
];

function FeaturesSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="features">
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Everything you need. Nothing you don&apos;t.
        </Heading>
        <p className={styles.sectionSubtitle}>
          Serverly packs a real database server into a native iOS app without compromising on reliability or developer experience.
        </p>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: '1',
    title: 'Create a server',
    desc: 'Tap the + button and give your server a name. Serverly creates an isolated SQLite database automatically.',
  },
  {
    n: '2',
    title: 'Start it',
    desc: 'Tap Run. The MySQL-compatible server binds to a port on your local network and is ready for connections.',
  },
  {
    n: '3',
    title: 'Connect from anywhere',
    desc: 'Point any MySQL client at your iPhone\'s IP address and the displayed port. It just works.',
  },
  {
    n: '4',
    title: 'Build and explore',
    desc: 'Create tables, run queries, and inspect your data — from your client tool or from within Serverly itself.',
  },
];

function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Up and running in under a minute
        </Heading>
        <p className={styles.sectionSubtitle}>
          Serverly is designed for developers who want a real database fast — not a tutorial on database administration.
        </p>
        <div className={styles.stepsGrid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.n}</div>
              <div className={styles.stepContent}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeBlockHeader}>
            <span className={styles.codeBlockDot} style={{background: '#ff5f57'}} />
            <span className={styles.codeBlockDot} style={{background: '#ffbd2e'}} />
            <span className={styles.codeBlockDot} style={{background: '#28c941'}} />
            <span className={styles.codeBlockTitle}>Terminal</span>
          </div>
          <pre className={styles.codeBlockPre}><code>{`# Connect from your Mac or PC
mysql -h 192.168.1.5 -P 3306 -u root

# You're in. Start building.
mysql> CREATE TABLE users (
    ->   id INT PRIMARY KEY AUTO_INCREMENT,
    ->   name VARCHAR(100),
    ->   email VARCHAR(255) UNIQUE
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> INSERT INTO users (name, email)
    -> VALUES ('Alice', 'alice@example.com');
Query OK, 1 row affected (0.00 sec)`}</code></pre>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={`${styles.section} ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to try it?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Download Serverly on the App Store and have a SQL server running in under a minute.
          </p>
          <div className={styles.ctaCtas}>
            <a className={styles.appStoreBadgeLight} href="#" aria-label="Download on the App Store">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className={styles.appStoreBadgeText}>
                <span className={styles.appStoreSub}>Download on the</span>
                <span className={styles.appStoreMain}>App Store</span>
              </span>
            </a>
            <Link className={styles.docsBtn} to="/docs/intro">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="SQL server for iPhone & iPad"
      description="Serverly runs a MySQL-compatible SQL server directly on your iPhone or iPad. Connect from any SQL client on your local network.">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </Layout>
  );
}
