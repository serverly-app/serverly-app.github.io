import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const AppleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// ─── iPad Mockup ────────────────────────────────────────────────────────────

type ServerRowProps = {
  name: string;
  type: 'SQLite' | 'MariaDB';
  port: number;
  status: 'running' | 'idle';
};

function ServerRow({name, type, port, status}: ServerRowProps) {
  const isRunning = status === 'running';
  const typeColor = type === 'MariaDB' ? '#0a84ff' : '#34c759';
  return (
    <div className={styles.ipadRow}>
      <div
        className={styles.ipadRowDot}
        style={{background: isRunning ? '#34c759' : '#8e8e93', boxShadow: isRunning ? `0 0 6px #34c759` : 'none'}}
      />
      <div className={styles.ipadRowIcon} style={{background: typeColor + '22', color: typeColor}}>
        {type === 'MariaDB' ? 'M' : 'S'}
      </div>
      <div className={styles.ipadRowInfo}>
        <div className={styles.ipadRowName}>{name}</div>
        <div className={styles.ipadRowMeta}>{type} · :{port}</div>
      </div>
      <div
        className={styles.ipadRowBadge}
        style={{
          color: isRunning ? '#34c759' : '#8e8e93',
          background: isRunning ? 'rgba(52,199,89,0.12)' : 'rgba(142,142,147,0.12)',
        }}
      >
        {isRunning ? 'Running' : 'Idle'}
      </div>
    </div>
  );
}

function IpadMockup() {
  return (
    <div className={styles.ipadFrame}>
      {/* Side button */}
      <div className={styles.ipadSideBtn} />
      {/* Screen */}
      <div className={styles.ipadScreen}>
        {/* Status bar */}
        <div className={styles.ipadStatusBar}>
          <span className={styles.ipadTime}>9:41</span>
          <span className={styles.ipadStatusIcons}>
            <span className={styles.ipadSignal} />
            <span className={styles.ipadWifi} />
            <span className={styles.ipadBattery} />
          </span>
        </div>
        {/* Navigation bar */}
        <div className={styles.ipadNavBar}>
          <span className={styles.ipadNavTitle}>Servers</span>
          <div className={styles.ipadNavAdd}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        {/* Server list */}
        <div className={styles.ipadBody}>
          <div className={styles.ipadSection}>
            <div className={styles.ipadSectionLabel}>ACTIVE</div>
            <ServerRow name="prod-sqlite" type="SQLite" port={3306} status="running" />
            <ServerRow name="analytics" type="MariaDB" port={3307} status="running" />
          </div>
          <div className={styles.ipadSection}>
            <div className={styles.ipadSectionLabel}>INACTIVE</div>
            <ServerRow name="dev-local" type="SQLite" port={3308} status="idle" />
          </div>
          {/* Connection count */}
          <div className={styles.ipadConnCount}>
            <div className={styles.ipadConnDot} />
            <span>3 active connections</span>
          </div>
        </div>
      </div>
      {/* Home indicator */}
      <div className={styles.ipadHomeBar} />
    </div>
  );
}

// ─── SQL Operations Panel ───────────────────────────────────────────────────

function SqlPanel() {
  return (
    <div className={styles.sqlPanel}>
      <div className={styles.sqlPanelHeader}>
        <div className={styles.sqlPanelDots}>
          <span style={{background: '#ff5f57'}} />
          <span style={{background: '#ffbd2e'}} />
          <span style={{background: '#28c941'}} />
        </div>
        <span className={styles.sqlPanelTitle}>MySQL · 192.168.1.5</span>
      </div>
      <div className={styles.sqlPanelBody}>
        <div className={styles.sqlOp}>
          <span className={styles.sqlPrompt}>›</span>
          <span className={styles.sqlKw}>SELECT</span>
          <span className={styles.sqlTx}> * </span>
          <span className={styles.sqlKw}>FROM</span>
          <span className={styles.sqlTx}> users;</span>
        </div>
        <div className={styles.sqlResult}>→ 1,204 rows (0.003s)</div>
        <div className={styles.sqlOp}>
          <span className={styles.sqlPrompt}>›</span>
          <span className={styles.sqlKw}>INSERT INTO</span>
          <span className={styles.sqlTx}> orders </span>
          <span className={styles.sqlKw}>VALUES</span>
          <span className={styles.sqlTx}> (...);</span>
        </div>
        <div className={styles.sqlResult}>→ 1 row affected (0.001s)</div>
        <div className={styles.sqlOp}>
          <span className={styles.sqlPrompt}>›</span>
          <span className={styles.sqlKw}>CREATE TABLE</span>
          <span className={styles.sqlTx}> logs (</span>
        </div>
        <div className={styles.sqlOp} style={{paddingLeft: '1.4rem'}}>
          <span className={styles.sqlTx}>  id </span>
          <span className={styles.sqlKw}>INT PRIMARY KEY</span>
          <span className={styles.sqlTx}>,</span>
        </div>
        <div className={styles.sqlOp} style={{paddingLeft: '1.4rem'}}>
          <span className={styles.sqlTx}>  msg </span>
          <span className={styles.sqlKw}>TEXT</span>
        </div>
        <div className={styles.sqlOp}>
          <span className={styles.sqlTx}>);</span>
        </div>
        <div className={styles.sqlResult}>→ Query OK (0.002s)</div>
      </div>
    </div>
  );
}

// ─── Client Windows ──────────────────────────────────────────────────────────

function TerminalClient() {
  return (
    <div className={styles.clientWindow}>
      <div className={styles.clientWindowBar}>
        <div className={styles.clientWindowDots}>
          <span style={{background: '#ff5f57'}} />
          <span style={{background: '#ffbd2e'}} />
          <span style={{background: '#28c941'}} />
        </div>
        <span className={styles.clientWindowTitle}>Terminal</span>
      </div>
      <div className={styles.clientWindowBody}>
        <div className={styles.clientLine}>
          <span className={styles.cliDim}>$ </span>
          <span className={styles.cliGreen}>mysql</span>
          <span className={styles.cliBlue}> -h 192.168.1.5 -P 3306</span>
        </div>
        <div className={styles.clientLine}>
          <span className={styles.cliDim}>mysql&gt; </span>
          <span className={styles.cliOrange}>SELECT</span>
          <span className={styles.cliWhite}> * FROM users;</span>
        </div>
        <div className={styles.clientResultTable}>
          <div className={styles.clientThead}>
            <span>id</span><span>name</span><span>email</span>
          </div>
          <div className={styles.clientTrow}>
            <span>1</span><span>Alice</span><span className={styles.cliDim}>alice@…</span>
          </div>
          <div className={styles.clientTrow}>
            <span>2</span><span>Bob</span><span className={styles.cliDim}>bob@…</span>
          </div>
        </div>
        <div className={styles.clientLine}>
          <span className={styles.cliDim}>2 rows in set (0.003 sec)</span>
        </div>
      </div>
    </div>
  );
}

function GuiClient() {
  return (
    <div className={styles.clientWindow}>
      <div className={styles.clientWindowBar} style={{background: '#2c2c2e'}}>
        <div className={styles.clientWindowDots}>
          <span style={{background: '#ff5f57'}} />
          <span style={{background: '#ffbd2e'}} />
          <span style={{background: '#28c941'}} />
        </div>
        <span className={styles.clientWindowTitle}>TablePlus</span>
      </div>
      <div className={styles.guiWindowBody}>
        <div className={styles.guiSidebar}>
          <div className={styles.guiConn}>
            <span className={styles.guiConnDot} />prod-sqlite
          </div>
          <div className={`${styles.guiConn} ${styles.guiConnActive}`}>
            <span className={styles.guiConnDot} style={{background: '#0a84ff'}} />analytics
          </div>
          <div className={styles.guiTable}>↳ users</div>
          <div className={styles.guiTable}>↳ orders</div>
          <div className={styles.guiTable}>↳ logs</div>
        </div>
        <div className={styles.guiMain}>
          <div className={styles.guiToolbar}>
            <span className={styles.guiBtn}>▶ Run</span>
            <span className={styles.guiQuery}>SELECT * FROM orders LIMIT 5</span>
          </div>
          <div className={styles.guiGrid}>
            <div className={styles.guiGridHead}>
              <span>id</span><span>user_id</span><span>total</span><span>status</span>
            </div>
            <div className={styles.guiGridRow}><span>101</span><span>1</span><span>$42.00</span><span className={styles.guiGreen}>paid</span></div>
            <div className={styles.guiGridRow}><span>102</span><span>2</span><span>$18.50</span><span className={styles.guiOrange}>pending</span></div>
            <div className={styles.guiGridRow}><span>103</span><span>1</span><span>$9.99</span><span className={styles.guiGreen}>paid</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Connection Arrow ────────────────────────────────────────────────────────

function Arrow() {
  return (
    <div className={styles.arrowWrap}>
      <div className={styles.arrowLine} />
      <div className={styles.arrowHead} />
    </div>
  );
}

// ─── Hero Scene ──────────────────────────────────────────────────────────────

function HeroScene() {
  return (
    <div className={styles.heroScene}>
      <IpadMockup />
      <div className={styles.sceneConnectors}>
        <Arrow />
        <Arrow />
      </div>
      <SqlPanel />
      <div className={styles.sceneConnectors}>
        <Arrow />
        <Arrow />
      </div>
      <div className={styles.clientsStack}>
        <TerminalClient />
        <GuiClient />
      </div>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Coming Soon
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          A full SQL server.<br />In your pocket.
        </Heading>
        <p className={styles.heroSubtitle}>
          Serverly runs real MySQL-compatible database servers directly on your
          iPhone or iPad. Connect any SQL client on your local network — no cloud,
          no config, no Docker.
        </p>
        <div className={styles.heroCtas}>
          <a className={styles.appStoreBadge} href="#" aria-label="Download on the App Store">
            <AppleLogo />
            <span className={styles.appStoreBadgeText}>
              <span className={styles.appStoreSub}>Download on the</span>
              <span className={styles.appStoreMain}>App Store</span>
            </span>
          </a>
          <Link className={styles.learnMoreBtn} to="/docs/intro">
            Learn more
          </Link>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '🗄️',
    title: 'SQLite & MariaDB',
    desc: 'Choose your backend. SQLite for zero-setup simplicity, or MariaDB for full MySQL compatibility.',
  },
  {
    icon: '🔌',
    title: 'MySQL Wire Protocol',
    desc: 'Connect with mysql CLI, TablePlus, DBeaver, or any standard MySQL client — zero configuration.',
  },
  {
    icon: '📡',
    title: 'Local Network Only',
    desc: 'Serves exclusively on your local network while the app is active. No internet exposure.',
  },
  {
    icon: '⚡',
    title: 'Instant Setup',
    desc: 'Open the app, tap Run. Your server is live in seconds. No init scripts, no config files.',
  },
  {
    icon: '💻',
    title: 'Developer-First UX',
    desc: 'Live connections, built-in query runner, schema inspector, and export — in a clean iOS interface.',
  },
  {
    icon: '🔒',
    title: 'Private by Design',
    desc: 'All data stays on-device. No telemetry, no cloud sync, no analytics.',
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

// ─── How It Works ────────────────────────────────────────────────────────────

const steps = [
  {n: '1', title: 'Create a server', desc: 'Tap + and give your server a name. Choose SQLite or MariaDB as the backend.'},
  {n: '2', title: 'Start it', desc: 'Tap Run. The MySQL-compatible server binds to a port on your local network instantly.'},
  {n: '3', title: 'Connect from anywhere', desc: 'Point any MySQL client at your device\'s IP and the displayed port. It just works.'},
  {n: '4', title: 'Build and explore', desc: 'Create tables, run queries, inspect your data — from your client tool or within the app.'},
];

function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Up and running in under a minute
        </Heading>
        <p className={styles.sectionSubtitle}>
          Serverly is designed for developers who want a real database fast.
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
          <pre className={styles.codeBlockPre}><code>{`mysql -h 192.168.1.5 -P 3306 -u root

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

// ─── CTA ─────────────────────────────────────────────────────────────────────

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
              <AppleLogo />
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home(): ReactNode {
  return (
    <Layout
      title="SQL server for iPhone & iPad"
      description="Serverly runs MySQL-compatible database servers directly on your iPhone or iPad. Connect any SQL client on your local network.">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </Layout>
  );
}
