import React, { useEffect, useState } from "react";

const farmImage =
  "https://thumbs.dreamstime.com/b/cows-solar-panels-farm-netherlands-grazing-milk-meadow-roof-cowshed-covered-better-environment-saving-energy-costs-use-35662397.jpg";

const heroSlides = [
  {
    title: "Home Solar",
    subtitle: "Clean power for modern Kiwi homes",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Business Solar",
    subtitle: "Reduce overheads with commercial rooftop solar",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Farm Solar",
    subtitle: "Reliable solar for dairy and rural operations",
    image: farmImage,
  },
];

const services = [
  {
    title: "Home Solar",
    icon: "⌂",
    image: heroSlides[0].image,
    text: "Smart rooftop systems for homes that want lower bills, cleaner energy and battery-ready options.",
    points: ["Custom roof design", "Battery-ready setup", "Smart monitoring", "Clean installation"],
  },
  {
    title: "Business Solar",
    icon: "▦",
    image: heroSlides[1].image,
    text: "Commercial rooftop solar for offices, warehouses, workshops, retail sites and industrial buildings.",
    points: ["Lower operating costs", "Commercial design", "Scalable systems", "Premium components"],
  },
  {
    title: "Dairy Farm Solar",
    icon: "♞",
    image: farmImage,
    text: "Solar systems designed for dairy farms, milking sheds, pumps, refrigeration and high daytime energy usage.",
    points: ["Reduce power costs", "Milking shed power", "Refrigeration loads", "Battery options"],
  },
];

const productGroups = [
  ["Solar Panels", "LONGi • JA Solar • Trina • Jinko • Canadian Solar", "☀️"],
  ["Inverters", "Fronius • Sungrow • GoodWe • Huawei • SolarEdge", "⚡"],
  ["Batteries", "Sigenergy SigenStor • Tesla • BYD • Alpha ESS • Sungrow", "🔋"],
];

const pages = ["Home", "About", "Services", "Products", "Insights", "FAQ", "Contact"];

const trustBadges = [
  "Premium Panels",
  "Battery Ready",
  "Smart Monitoring",
  "NZ Wide Support",
  "Clean Installations",
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-lime-300 via-green-400 to-emerald-600 shadow-[0_0_35px_rgba(163,230,53,0.35)] md:h-16 md:w-16">
        <div className="absolute right-2 top-2 h-5 w-5 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(253,224,71,0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_45%)]" />
        <div className="relative flex text-2xl font-black tracking-tight text-slate-950">
          <span>T</span>
          <span className="-ml-1 text-white drop-shadow-lg">V</span>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-lg font-black tracking-tight md:text-2xl">
          <span className="bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">
            TERRAVOLT
          </span>
          <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-sm uppercase tracking-[0.22em] text-lime-300">
            Solar
          </span>
        </div>
        <div className="hidden text-xs font-bold uppercase tracking-[0.28em] text-white/50 sm:block">
          Homes • Business • Farms
        </div>
      </div>
    </div>
  );
}

export default function TerravoltSolar() {
  const [active, setActive] = useState(0);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slowZoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-5">
          <button onClick={() => setPage("Home")}>
            <Logo />
          </button>

          <nav className="hidden items-center gap-6 text-sm font-bold text-white/75 lg:flex">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={page === p ? "text-lime-300" : "hover:text-lime-300"}
              >
                {p}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setPage("Contact")}
            className="hidden rounded-2xl bg-lime-300 px-5 py-3 font-black text-slate-950 shadow-xl shadow-lime-400/20 transition hover:-translate-y-1 hover:bg-lime-200 sm:inline-block"
          >
            Free Consultation
          </button>
        </div>
      </header>

      <main>
        {page === "Home" && (
          <>
            <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white md:min-h-[820px]">
              {heroSlides.map((item, index) => (
                <img
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ${
                    index === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                  style={
                    index === active
                      ? { animation: "slowZoom 8s ease-in-out infinite" }
                      : undefined
                  }
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.35),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(34,197,94,0.22),transparent_30%)]" />

              <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-16 md:min-h-[820px] md:px-6 md:py-20 lg:grid-cols-[1fr_0.85fr]">
                <div style={{ animation: "fadeUp .8s ease both" }}>
                  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-300/30 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-lime-100 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_24px_rgba(190,242,100,0.95)]" />
                    Power Your Future With Smarter Solar
                  </div>

                  <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                    Future-Ready Solar For{" "}
                    <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
                      Every Property
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:mt-7 md:text-xl md:leading-9">
                    Terravolt Solar delivers high-performance solar systems for homes,
                    commercial buildings, dairy farms and rural operations — built around
                    quality, savings and smarter energy.
                  </p>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <button
                      onClick={() => setPage("Contact")}
                      className="rounded-2xl bg-lime-300 px-8 py-5 text-center font-black text-slate-950 shadow-2xl shadow-lime-400/25 transition hover:-translate-y-1 hover:bg-lime-200"
                    >
                      Book Free Consultation →
                    </button>

                    <button
                      onClick={() => setPage("Services")}
                      className="rounded-2xl border border-white/25 bg-white/10 px-8 py-5 text-center font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      Explore Services
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/30 p-4 shadow-[0_0_80px_rgba(163,230,53,0.15)] backdrop-blur-2xl">
                    <div className="relative h-[540px] overflow-hidden rounded-[2rem]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-lime-300">
                          Featured Solution
                        </p>
                        <h3 className="mt-2 text-4xl font-black">{slide.title}</h3>
                        <p className="mt-3 text-white/80">{slide.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white px-6 py-20">
              <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    ["25+", "Year Panel Performance"],
                    ["3", "Main Solar Sectors"],
                    ["NZ", "Wide Support"],
                  ].map(([n, t]) => (
                    <div
                      key={t}
                      className="rounded-[2rem] bg-slate-50 p-8 text-center shadow-lg transition hover:-translate-y-2"
                    >
                      <div className="text-5xl font-black text-green-700">{n}</div>
                      <p className="mt-3 font-bold text-slate-600">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-slate-50 px-6 py-24">
              <div className="mx-auto max-w-7xl">
                <PageTitle
                  eyebrow="Why Choose Terravolt"
                  title="Built To Look Premium, Perform Smart & Earn Trust"
                  text="A cleaner solar experience focused on quality products, smart technology, clear communication and long-term support."
                />

                <div className="grid gap-6 md:grid-cols-4">
                  {[
                    ["⚡", "Smart Technology", "Modern panels, inverters, monitoring and battery-ready solar systems."],
                    ["🛡", "Reliable Support", "Clear guidance from first consultation through system handover."],
                    ["☀️", "Custom Design", "Solar layouts designed around your property, usage and future plans."],
                    ["🌿", "Clean Energy", "Helping homes, businesses and farms move toward smarter renewable power."],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-[2rem] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-2"
                    >
                      <div className="text-5xl">{icon}</div>
                      <h3 className="mt-5 text-2xl font-black text-green-800">
                        {title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  {trustBadges.map((badge) => (
                    <div
                      key={badge}
                      className="rounded-full border border-green-200 bg-white px-6 py-3 text-sm font-black uppercase tracking-widest text-green-800 shadow-sm"
                    >
                      ✓ {badge}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {page === "About" && <About />}
        {page === "Services" && <Services active={active} />}
        {page === "Products" && <Products />}
        {page === "Insights" && <Insights />}
        {page === "FAQ" && <FAQ />}
        {page === "Contact" && <Contact />}
      </main>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 md:flex">
        <button
          onClick={() => setPage("Contact")}
          className="rounded-full bg-lime-300 px-6 py-4 font-black text-slate-950 shadow-2xl shadow-lime-400/40 transition hover:scale-105"
        >
          Free Consultation
        </button>

        <a
          href="tel:+64211221276"
          className="rounded-full bg-slate-950 px-6 py-4 font-black text-white shadow-2xl transition hover:scale-105"
        >
          Call Now
        </a>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setPage("Contact")}
            className="rounded-2xl bg-lime-300 py-4 text-center text-sm font-black text-slate-950 shadow-lg shadow-lime-400/20"
          >
            Free Consultation
          </button>

          <a
            href="tel:+64211221276"
            className="rounded-2xl border border-white/20 bg-white/10 py-4 text-center text-sm font-black text-white"
          >
            Call Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function PageTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-14 text-center">
      <p className="font-black uppercase tracking-[0.25em] text-green-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {text}
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
            alt="Modern residential solar installation"
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-300">
              Trusted Energy Partner
            </p>
            <h3 className="mt-3 text-4xl font-black">
              Quality Systems. Modern Technology. Long-Term Reliability.
            </h3>
          </div>
        </div>

        <div>
          <p className="font-black uppercase tracking-[0.25em] text-green-700">
            About Terravolt Solar
          </p>
          <h2 className="mt-5 text-5xl font-black leading-tight">
            A premium solar company built for New Zealand energy needs.
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-600">
            Terravolt Solar provides professional solar solutions for residential,
            commercial and rural customers. Our focus is simple: quality products,
            clean design, reliable installation support and solar systems that make
            sense for real energy usage.
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-600">
            From home rooftops to commercial buildings, dairy sheds and rural
            operations, we help customers move toward cleaner energy with confidence.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["Premium Products", "Modern Technology", "Trusted Support"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center font-black text-green-800 shadow-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ active }) {
  return (
    <section className="bg-[#f7f9fc] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <PageTitle
          eyebrow="What We Provide"
          title="Premium Solar Solutions"
          text="A complete range of solar services designed for homes, businesses and rural energy users."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group overflow-hidden rounded-[2rem] bg-white text-left shadow-[0_22px_55px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-2 ${
                active === index ? "ring-4 ring-lime-300" : ""
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-300 text-3xl text-slate-950 shadow-xl">
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {service.text}
                </p>

                <div className="mt-8 rounded-2xl bg-green-50 p-5">
                  <p className="font-black text-green-800">Learn more</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <>
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-black uppercase tracking-[0.25em] text-lime-300">
              Products & Technology
            </p>
            <h2 className="mt-4 text-5xl font-black">
              Panels, Inverters & Smart Batteries
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/70">
              Modern solar technology from well-known brands available in New
              Zealand, including smart systems such as Sigenergy SigenStor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {productGroups.map(([title, brands, icon]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl transition hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="text-5xl">{icon}</div>
                <h3 className="mt-5 text-2xl font-black text-lime-300">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-white/70">{brands}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <PageTitle
            eyebrow="Smart Solar Technology"
            title="Premium Battery & Inverter Systems"
            text="Modern solar systems are powered by intelligent inverters and smart battery technology designed for better performance, monitoring and energy independence."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl transition duration-500 hover:-translate-y-2">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584277261846-c6a1672ed979?auto=format&fit=crop&w=1800&q=80"
                  alt="Solar inverter"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex rounded-full bg-lime-300 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-slate-950">
                    Smart Inverters
                  </div>
                  <h3 className="mt-5 text-4xl font-black">
                    Advanced Energy Conversion
                  </h3>
                  <p className="mt-4 leading-8 text-white/75">
                    Modern inverters convert solar power into usable electricity
                    while providing monitoring, efficiency control and future battery
                    compatibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-950 to-slate-950 text-white shadow-2xl transition duration-500 hover:-translate-y-2">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1800&q=80"
                  alt="Solar battery"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex rounded-full bg-lime-300 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-slate-950">
                    Battery Storage
                  </div>
                  <h3 className="mt-5 text-4xl font-black">
                    Store Energy For Later
                  </h3>
                  <p className="mt-4 leading-8 text-white/75">
                    Smart battery systems store excess solar energy for night usage,
                    backup support and improved energy independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Insights() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <PageTitle
          eyebrow="NZ Energy Market Insights"
          title="Why More New Zealanders Are Choosing Solar"
          text="Public NZ energy reports show pressure on household and business power costs: grid costs are rising, gas supply has tightened, and EV adoption is expected to add future demand."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "⚡",
              "Power Prices Increasing",
              "The Electricity Authority reported that many bills increased from 1 April 2025 to recover transmission and distribution costs.",
            ],
            [
              "⛽",
              "Gas Supply Pressure",
              "MBIE reported that New Zealand natural gas reserves reduced 27% as at 1 January 2025 compared with the previous year.",
            ],
            [
              "🚗",
              "EV Growth",
              "EECA modelling says if all light vehicles in New Zealand were electric, total electricity demand would increase by around 20%.",
            ],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-8 shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 text-4xl text-green-800">
                {icon}
              </div>
              <h3 className="mt-6 text-2xl font-black">{title}</h3>
              <p className="mt-5 leading-8 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-white p-8 shadow-xl">
          <PageTitle
            eyebrow="Energy Cost Trend"
            title="NZ Energy Pressure Index"
            text="A simple customer-friendly index combining public market signals: bill increases, network cost pressure, reduced gas reserves and future EV demand."
          />

          <div className="flex h-[280px] items-end justify-between gap-5">
            {[
              ["2021", 35],
              ["2022", 45],
              ["2023", 58],
              ["2024", 73],
              ["2025", 90],
            ].map(([year, height]) => (
              <div key={year} className="flex flex-1 flex-col items-center">
                <div className="mb-3 text-sm font-black text-green-700">
                  {height}%
                </div>
                <div
                  className="w-full rounded-t-[1.2rem] bg-gradient-to-t from-green-700 to-lime-300 transition duration-500 hover:scale-105"
                  style={{ height: `${Number(height) * 2}px` }}
                />
                <div className="mt-4 text-sm font-black tracking-widest text-slate-500">
                  {year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <PageTitle eyebrow="FAQ" title="Common Solar Questions" />

        <div className="grid gap-6 md:grid-cols-2">
          {[
            [
              "Is solar worth it for homes?",
              "Yes, solar can help reduce long-term electricity costs, especially when your home uses power during daylight hours.",
            ],
            [
              "Can businesses benefit from solar?",
              "Yes. Commercial solar is ideal for businesses with daytime operating hours and consistent power usage.",
            ],
            [
              "Is solar useful for dairy farms?",
              "Yes. Milking sheds, pumps, refrigeration and hot water systems often use significant daytime electricity.",
            ],
            [
              "Do you offer battery options?",
              "Yes. Battery-ready designs and smart storage systems can be included depending on your needs.",
            ],
            [
              "Is the return on investment getting faster?",
              "For many customers, yes. As electricity network and retail power costs rise, using more of your own solar power can improve long-term savings and shorten payback time.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-[2rem] bg-white p-8 shadow-lg">
              <h3 className="text-xl font-black text-green-800">{q}</h3>
              <p className="mt-4 leading-7 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-slate-950 to-black px-4 py-20 text-white md:px-6 md:py-24">
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-lime-300">
            Contact Terravolt Solar
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Ready for a free solar consultation?
          </h2>
          <p className="mt-8 text-lg leading-8 text-white/75">
            Leave your details and we’ll contact you for a free, no-obligation
            consultation about the best solar option for your property.
          </p>

          <div className="mt-10 space-y-5 text-lg">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              ☎ <b className="ml-3">+64 21 122 1276</b>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              ✉ <b className="ml-3">info@terravoltsolar.nz</b>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              ⌂ <b className="ml-3">Serving New Zealand Wide</b>
            </div>
          </div>
        </div>

        <form className="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <h3 className="text-3xl font-black text-lime-300">
            Request A Free Consultation
          </h3>

          <div className="mt-8 space-y-5">
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 focus:border-lime-300 focus:outline-none"
              placeholder="Full name"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 focus:border-lime-300 focus:outline-none"
              placeholder="Phone number"
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 focus:border-lime-300 focus:outline-none"
              placeholder="Email address"
            />
            <textarea
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 focus:border-lime-300 focus:outline-none"
              placeholder="Tell us about your property or project"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-lime-300 px-8 py-5 text-lg font-black text-slate-950 shadow-2xl shadow-lime-400/30 transition hover:-translate-y-1 hover:bg-lime-200"
            >
              Request Free Consultation →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pb-28 pt-16 text-white md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-3xl font-black text-lime-300">
            Terravolt Solar
          </h3>
          <p className="mt-5 leading-7 text-white/70">
            Smart solar solutions for homes, businesses, dairy farms and rural
            operations across New Zealand.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-black">Services</h4>
          <ul className="mt-5 space-y-3 text-white/70">
            <li>Home Solar</li>
            <li>Business Solar</li>
            <li>Dairy Farm Solar</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black">Products</h4>
          <ul className="mt-5 space-y-3 text-white/70">
            <li>Solar Panels</li>
            <li>Inverters</li>
            <li>Battery Storage</li>
            <li>Sigenergy Systems</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black">Contact</h4>
          <ul className="mt-5 space-y-3 text-white/70">
            <li>+64 21 122 1276</li>
            <li>info@terravoltsolar.nz</li>
            <li>Serving New Zealand Wide</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-white/50">
        © 2025 Terravolt Solar. All rights reserved.
      </div>
    </footer>
  );
}