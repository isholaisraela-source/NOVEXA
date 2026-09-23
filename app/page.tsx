export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            NOVEXA
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-white/70 hover:text-white">
              Home
            </a>
            <a href="#plans" className="text-sm text-white/70 hover:text-white">
              Investment Plans
            </a>
            <a href="#how-it-works" className="text-sm text-white/70 hover:text-white">
              How It Works
            </a>
            <a href="#faq" className="text-sm text-white/70 hover:text-white">
              FAQ
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="/login"
              className="rounded-lg border border-white/15 px-4 py-2 text-sm"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            NOVEXA
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-7xl">
            Build your financial future with clarity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Explore structured investment opportunities, track your
            investments, and manage your account from one simple platform.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/register"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Create Account
            </a>

            <a
              href="#plans"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
          <Feature
            title="Simple"
            description="A straightforward platform for managing your investment activity."
          />

          <Feature
            title="Transparent"
            description="Keep track of deposits, investments, withdrawals, and transactions."
          />

          <Feature
            title="Account Control"
            description="Manage your account and view your investment information in one place."
          />
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Investment Plans
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Choose an opportunity that fits your goals.
          </h2>

          <p className="mt-4 text-white/60">
            Investment terms, fees, risks, and any applicable returns will be
            clearly displayed before an investment is made.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Plan name="Starter" amount="₦5,000+" />
          <Plan name="Growth" amount="₦25,000+" />
          <Plan name="Premium" amount="₦100,000+" />
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-3xl font-bold md:text-4xl">
            How NOVEXA works
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <Step number="01" title="Create an account" />
            <Step number="02" title="Choose a plan" />
            <Step number="03" title="Fund your investment" />
            <Step number="04" title="Track your activity" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Start with NOVEXA
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Create your account and explore the platform.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-950"
          >
            Create Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NOVEXA. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/risk-disclosure">Risk Disclosure</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-7">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-white/55">{description}</p>
    </div>
  );
}

function Plan({
  name,
  amount,
}: {
  name: string;
  amount: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-7">
      <h3 className="text-xl font-semibold">{name}</h3>

      <p className="mt-5 text-3xl font-bold">{amount}</p>

      <p className="mt-3 text-sm text-white/50">
        Plan details will be loaded from Supabase.
      </p>

      <a
        href="/register"
        className="mt-7 block rounded-lg border border-white/15 py-3 text-center text-sm font-semibold hover:bg-white/5"
      >
        View Details
      </a>
    </div>
  );
}

function Step({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold text-emerald-400">{number}</p>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    </div>
  );
}
