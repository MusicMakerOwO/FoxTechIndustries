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

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="September 2026">
      <Section heading="1. Who we are">
        <p>Fox Tech Industries LLC ("we", "us") builds and operates the software listed on this site, including Fox Box Insurance, Easy Invite Tracker and, once released, Dossier (each, a "Product"). By using a Product, you agree to these terms.</p>
      </Section>
      <Section heading="2. Free and paid tiers">
        <p>Every feature of every Product is available for free. We plan to offer optional paid tiers that raise usage limits (such as storage or history length). Paying for a higher tier will never unlock a feature that is withheld from free users.</p>
      </Section>
      <Section heading="3. Acceptable use">
        <p>You agree not to use a Product to violate the law, to abuse the platform it runs on (such as Discord's Terms of Service), or to interfere with the service for other users. We may suspend access for accounts that do this.</p>
      </Section>
      <Section heading="4. Open source">
        <p>The source code for our Products is published on GitHub under the Apache 2.0 license. You're welcome to read it, modify it, or run your own version, including commercially. Please keep the license and credit intact, as the license requires, and give your version its own name and branding. Our names and logos identify the versions we run and stand behind. Instances you run yourself are your own responsibility and are not covered by these terms.</p>
      </Section>
      <Section heading="5. No warranty">
        <p>Our Products are provided "as is." We work to keep them reliable, but we can't guarantee uninterrupted uptime or that a Product will be free of bugs. We are not liable for data loss, though we design our Products specifically to minimize that risk.</p>
      </Section>
      <Section heading="6. Changes">
        <p>We may update these terms as our Products evolve. Meaningful changes will be reflected on this page with an updated date.</p>
      </Section>
      <Section heading="7. Contact">
        <p>Questions about these terms can go to <a href="mailto:support@notfbi.dev" style={{ color: 'var(--ember)' }}>support@notfbi.dev</a> or our <a href="https://discord.gg/9SR6fnbRuV" target="_blank" rel="noreferrer" style={{ color: 'var(--ember)' }}>Discord support server</a>.</p>
      </Section>
    </LegalLayout>
  )
}
