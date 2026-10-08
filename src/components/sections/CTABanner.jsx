import Button from '../ui/Button';
export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/20 bg-surface-100 px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Plan Cinematic Shots with AI</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">Turn any scene into shot lists and camera notes instantly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/#demo" size="lg" variant="primary">AI Trial</Button>
            <Button href="/pricing" size="lg" variant="secondary">View Pricing</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
