export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              GigLink <span className="text-amber-400">Africa</span>
            </h1>
            <p className="text-xs text-slate-400">
              Find. Compare. Book.
            </p>
          </div>

          <div className="hidden gap-6 md:flex">
            <a href="#professionals" className="text-slate-300 hover:text-white">
              Find Professionals
            </a>
            <a href="#how" className="text-slate-300 hover:text-white">
              How It Works
            </a>
          </div>

          <button className="rounded-lg bg-amber-400 px-5 py-2.5 font-semibold text-slate-950 hover:bg-amber-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            🇰🇪 Built for Kenya. Ready for Africa.
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Find the right talent for
            <span className="text-amber-400"> your event.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Discover DJs, MCs, artists, photographers, videographers,
            decorators and other event professionals. Compare them,
            check their work and book with confidence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-amber-400 px-8 py-4 font-bold text-slate-950 hover:bg-amber-300">
              Find a Professional
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10">
              Join as a Professional
            </button>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                I need
              </label>
              <select className="w-full rounded-lg border border-white/10 bg-slate-900 p-3">
                <option>DJ</option>
                <option>MC</option>
                <option>Photographer</option>
                <option>Videographer</option>
                <option>Artist</option>
                <option>Decorator</option>
                <option>Sound Provider</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Location
              </label>
              <input
                placeholder="Nairobi"
                className="w-full rounded-lg border border-white/10 bg-slate-900 p-3 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Event date
              </label>
              <input
                type="date"
                className="w-full rounded-lg border border-white/10 bg-slate-900 p-3"
              />
            </div>

            <button className="mt-auto rounded-lg bg-amber-400 p-3 font-bold text-slate-950 hover:bg-amber-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="professionals"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Explore talent
          </p>

          <h3 className="mt-3 text-3xl font-bold md:text-4xl">
            Everything your event needs
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🎧", "DJs", "Music for every kind of event"],
            ["🎤", "MCs", "Keep your event moving"],
            ["📸", "Photographers", "Capture every moment"],
            ["🎥", "Videographers", "Turn moments into memories"],
            ["🎵", "Artists", "Live entertainment"],
            ["🔊", "Sound Providers", "Professional sound"],
            ["🌸", "Decorators", "Transform your venue"],
            ["🎪", "Event Services", "More event professionals"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-4xl">{icon}</div>
              <h4 className="mt-5 text-xl font-bold">{title}</h4>
              <p className="mt-2 text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Simple process
            </p>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Find. Compare. Book.
            </h3>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Find", "Search professionals by category, location, price and availability."],
              ["02", "Compare", "Watch performance videos, check reviews and compare profiles."],
              ["03", "Book", "Send a booking request and arrange payment securely."],
            ].map(([number, title, description]) => (
              <div key={number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  {number}
                </div>
                <h4 className="mt-5 text-2xl font-bold">{title}</h4>
                <p className="mx-auto mt-3 max-w-sm text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h3 className="text-4xl font-black md:text-5xl">
          Your next gig is waiting.
        </h3>

        <p className="mx-auto mt-5 max-w-xl text-slate-400">
          Create your professional profile and let event organizers
          discover what you can do.
        </p>

        <button className="mt-8 rounded-xl bg-amber-400 px-8 py-4 font-bold text-slate-950 hover:bg-amber-300">
          Join GigLink Africa
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 GigLink Africa. All rights reserved.</p>
          <p>Find. Compare. Book.</p>
        </div>
      </footer>
    </main>
  );
}
