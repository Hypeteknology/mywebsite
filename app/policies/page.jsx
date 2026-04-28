"use client";
import React from 'react';
const Policies = () => {
  // --- INLINE STYLES (No CSS file or Tailwind required) ---
  const styles = {
    container: {
      backgroundColor: '#ffffff',
      color: '#333333',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      padding: '0',
      margin: '0',
    },
    hero: {
      backgroundColor: '#0f172a', // Deep Navy
      color: '#ffffff',
      padding: '80px 20px',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '42px',
      margin: '0',
      fontWeight: '800',
    },
    heroSubtitle: {
      fontSize: '18px',
      color: '#94a3b8',
      marginTop: '10px',
    },
    wrapper: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    section: {
      marginBottom: '60px',
    },
    title: {
      fontSize: '30px',
      color: '#1e3a8a', // Blue
      borderBottom: '3px solid #3b82f6',
      display: 'inline-block',
      paddingBottom: '8px',
      marginBottom: '25px',
      fontWeight: '700',
    },
    subTitle: {
      fontSize: '20px',
      color: '#1e293b',
      marginTop: '30px',
      marginBottom: '15px',
      fontWeight: '600',
    },
    text: {
      fontSize: '16px',
      marginBottom: '15px',
      textAlign: 'justify',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
    contactBox: {
      backgroundColor: '#f8fafc',
      borderLeft: '5px solid #3b82f6',
      padding: '25px',
      borderRadius: '0 8px 8px 0',
      marginBottom: '40px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    contactItem: {
      marginBottom: '8px',
      fontSize: '16px',
    },
    footer: {
      textAlign: 'center',
      padding: '40px 20px',
      fontSize: '14px',
      color: '#64748b',
      borderTop: '1px solid #e2e8f0',
      marginTop: '40px',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '600',
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Legal & Compliance</h1>
        <p style={styles.heroSubtitle}>Hypetek Advertising Agency Policies</p>
      </header>

      <div style={styles.wrapper}>
        
        {/* 1. CONTACT DETAILS */}
        <section style={styles.section}>
          <h2 style={styles.title}>Contact Details</h2>
          <div style={styles.contactBox}>
            <h3 style={{ ...styles.subTitle, marginTop: 0 }}>Hypetek Advertising Agency</h3>
            <p style={styles.contactItem}><strong>Email:</strong> <a href="mailto:hypeteknology@gmail.com" style={styles.link}>hypeteknology@gmail.com</a></p>
            <p style={styles.contactItem}><strong>Phone:</strong> 0310-5555728</p>
            <p style={styles.contactItem}><strong>Address:</strong> Office No. A6, Arslan Market, Main Bazar, Bherkund, Mansehra, 21340</p>
            <p style={{ ...styles.contactItem, marginTop: '15px', fontSize: '14px', color: '#64748b' }}>
              * For full details, please visit our <a href="/contact" style={styles.link}>Contact Page</a>.
            </p>
          </div>
        </section>

        {/* 2. REFUND POLICY */}
        <section style={styles.section}>
          <h2 style={styles.title}>Refund Policy</h2>
          <p style={styles.text}>
            At Hypetek Advertising Agency, all payments are considered <strong>service activation fees</strong> used for planning, setup, and resource allocation.
          </p>

          <h3 style={styles.subTitle}>Refund Eligibility</h3>
          <p style={styles.text}>
            We offer a <strong>15-day refund window</strong>. A refund request must be submitted within 15 days of the transaction.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Refunds are only applicable if the client requests cancellation <strong>before</strong> campaign setup or execution has started.</li>
            <li style={styles.listItem}>A partial refund will be issued after deducting administrative charges, consultation time, and strategy preparation costs.</li>
            <li style={styles.listItem}><strong>Once campaign setup, ad launching, or store development has started, no refund will be issued.</strong></li>
          </ul>

          <h3 style={styles.subTitle}>Non-Refundable Situations</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Ads already launched on Meta, Google, or TikTok.</li>
            <li style={styles.listItem}>Creative work or marketing strategies already delivered.</li>
            <li style={styles.listItem}>Unsatisfactory performance due to market conditions or platform algorithms.</li>
          </ul>

          <h3 style={styles.subTitle}>Refund Method</h3>
          <p style={styles.text}>
            All approved refunds are processed strictly via <strong>Cash</strong> or <strong>Account Transfer</strong>.
          </p>
        </section>

        {/* 3. CHARGEBACK POLICY */}
        <section style={styles.section}>
          <h2 style={styles.title}>Chargeback Policy</h2>
          <p style={styles.text}>
            By purchasing our services, you agree not to initiate unauthorized chargebacks.
          </p>

          <h3 style={styles.subTitle}>Dispute Resolution</h3>
          <p style={styles.text}>
            In case of any issue, you must contact us directly for resolution before initiating any bank dispute. We provide mutual discussion and evidence-based clarification to resolve issues fairly.
          </p>

          <h3 style={styles.subTitle}>Card Transaction Rule</h3>
          <p style={styles.text}>
            If a payment was made via <strong>Credit or Debit Card</strong>, any approved refund will be processed back to the <strong>exact same card</strong> used for the original transaction. We do not issue card-based refunds to different accounts.
          </p>

          <h3 style={styles.subTitle}>Fraudulent Chargebacks</h3>
          <p style={styles.text}>
            We maintain complete records (ad logs, screenshots, communication). Any fraudulent chargeback attempt will result in a permanent service ban and legal defense using our documented proof of service.
          </p>
        </section>

        {/* 4. TERMS & CONDITIONS */}
        <section style={styles.section}>
          <h2 style={styles.title}>Terms & Conditions</h2>
          <p style={{ ...styles.text, fontSize: '14px', color: '#64748b' }}>Effective Date: April 2026</p>

          <h3 style={styles.subTitle}>1. Services Offered</h3>
          <p style={styles.text}>Social Media Marketing, Google Ads Management, TikTok Agency Ad Accounts, E-commerce Development, and Consultation.</p>

          <h3 style={styles.subTitle}>2. Payment Terms</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Accepted: JazzCash, EasyPaisa, or Bank Transfer.</li>
            <li style={styles.listItem}><strong>Ad Spend:</strong> The ad budget (paid to Google/Meta) is always separate and must be paid by the client.</li>
          </ul>

          <h3 style={styles.subTitle}>3. No Guarantee Clause</h3>
          <p style={styles.text}>
            <strong>Hypetek Advertising Agency does not guarantee sales, leads, or specific ROI.</strong> Marketing performance depends on market demand, product quality, and platform algorithms.
          </p>

          <h3 style={styles.subTitle}>4. Limitation of Liability</h3>
          <p style={styles.text}>
            We are not responsible for platform bans, account suspensions, or business losses caused by market shifts or platform policy changes.
          </p>
        </section>

        {/* 5. PRIVACY POLICY */}
        <section style={styles.section}>
          <h2 style={styles.title}>Privacy Policy</h2>
          <p style={{ ...styles.text, fontSize: '14px', color: '#64748b' }}>Effective Date: April 2026</p>

          <h3 style={styles.subTitle}>Data Usage</h3>
          <p style={styles.text}>
            We collect name, email, phone, and business details to execute your campaigns. We do not sell or trade your personal information.
          </p>

          <h3 style={styles.subTitle}>Third-Party Sharing</h3>
          <p style={styles.text}>
            We only share data with essential service providers, such as Payment Processors and Ad Platforms (Meta, Google, TikTok), to fulfill our service obligations.
          </p>

          <h3 style={styles.subTitle}>Security</h3>
          <p style={styles.text}>
            We take reasonable, industry-standard measures to protect your data from unauthorized access.
          </p>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Hypetek Advertising Agency. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Policies;
