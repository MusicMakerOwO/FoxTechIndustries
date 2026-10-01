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

export default function Refunds() {
  return (
    <LegalLayout title="Refund Policy" updated="September 2026">
      <Section heading="1. Scope">
        <p>This policy covers the optional paid tiers we plan to offer. Paid tiers aren't available yet, and this policy will apply once they launch. Every feature of every Product is free, so most users will never make a payment to us.</p>
      </Section>
      <Section heading="2. Requesting a refund">
        <p>If you're not satisfied with a paid tier within 14 days of purchase or renewal, email us and we'll issue a full refund, no explanation needed.</p>
      </Section>
      <Section heading="3. After 14 days">
        <p>Past the 14-day window, refunds are handled case by case, for example if a Product is unavailable for an extended period due to an issue on our end.</p>
      </Section>
      <Section heading="4. Cancelling">
        <p>You can cancel a paid tier at any time. Cancelling stops future renewals; it does not retroactively refund a period that's already begun unless it falls within the 14-day window above.</p>
      </Section>
      <Section heading="5. Contact">
        <p>To request a refund, email <a href="mailto:support@notfbi.dev" style={{ color: 'var(--ember)' }}>support@notfbi.dev</a> with the account or server the payment was made under.</p>
      </Section>
    </LegalLayout>
  )
}
