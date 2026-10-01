export default function Mission() {
  return (
    <main style={{ flex: 1, padding: '2rem 3rem 6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ paddingBottom: '2.5rem', marginBottom: '4rem', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--ember)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Mission
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--bright)', maxWidth: '22ch' }}>
            Empower users. Everything else follows.
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Software should work for the people using it. That idea decides what we build, what we keep, and how we pay for it.
            </p>
            <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.9 }}>
              We aren't here to maximize profit. We charge only what it takes to keep the lights on, and no feature is ever locked behind a paywall. If you choose to pay, you get higher usage limits, not access to things free users can't have.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                heading: 'Your data belongs to you',
                body: 'Every user can request a full copy of the data we hold about them, no matter what country they live in. Privacy rights shouldn\'t depend on where you happen to be.',
              },
              {
                heading: 'Keep only what\'s needed',
                body: 'If a tool doesn\'t need your data, it doesn\'t keep it. The safest data is the data we never collect.',
              },
              {
                heading: 'Free to leave',
                body: 'You can read our code, learn from it, or run your own version. If you don\'t want to depend on us, you don\'t have to.',
              },
            ].map(item => (
              <div key={item.heading} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--line)' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--bright)', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                  {item.heading}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}