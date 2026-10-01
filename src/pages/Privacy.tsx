import LegalLayout from './LegalLayout'

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
        {heading}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 2026">
      <Section heading="1. Our principle">
        <p>We collect what a Product needs to function, and nothing else. We don't run trackers, we don't sell or share data, and we don't have a fine-print exception where this stops being true.</p>
      </Section>
      <Section heading="2. What we collect">
        <p>It depends on the Product. Fox Box Insurance stores messages so they can be exported later, keeping at most the most recent 10,000 per channel and purging older ones automatically. Easy Invite Tracker stores no data about you. Dossier, once released, will keep a copy of recent messages and their attachments for 14 days so it can show what a deleted message said. We also keep basic operational data, like error logs, to keep the service running.</p>
      </Section>
      <Section heading="3. What we don't do">
        <p>We don't sell, rent, or share your data with advertisers or data brokers. We don't use third-party analytics or trackers embedded in our Products. We don't read your data for any purpose beyond providing the feature you enabled.</p>
      </Section>
      <Section heading="4. Storage and security">
        <p>Data is stored on infrastructure we control. Sensitive data is encrypted at rest: Fox Box Insurance encrypts saved messages with AES-256, using a separate key for each user, and rotates keys monthly. We keep our dependency footprint small so there are fewer places for things to go wrong. Because our code is open source, you can inspect exactly how data is handled.</p>
      </Section>
      <Section heading="5. Your control">
        <p>Every user can request a full copy of the data we hold about them, no matter what country they live in. You can also request deletion of your data at any time. In Fox Box Insurance, any user can opt out of message storage with the /data-collection command, after which their future messages are stored redacted. Removing a Product from your server stops any further data collection.</p>
      </Section>
      <Section heading="6. Changes">
        <p>If this policy changes in a meaningful way, we'll update the date at the top of this page.</p>
      </Section>
      <Section heading="7. Contact">
        <p>For privacy questions, data requests or deletion requests, email <a href="mailto:support@notfbi.dev" style={{ color: 'var(--ember)' }}>support@notfbi.dev</a> or ask in our <a href="https://discord.gg/9SR6fnbRuV" target="_blank" rel="noreferrer" style={{ color: 'var(--ember)' }}>Discord support server</a>.</p>
      </Section>
    </LegalLayout>
  )
}
