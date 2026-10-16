const works = [
  {
    src: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?auto=format&fit=crop&w=1400&q=85",
    alt: "自然光の中でこちらを見つめる女性のポートレート",
    title: "Still, She Speaks",
    category: "Portrait",
    place: "Tokyo",
    className: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1738844153732-a485f0e78382?auto=format&fit=crop&w=1200&q=85",
    alt: "時計と建築を写したモノクローム写真",
    title: "Passing Hours",
    category: "Architecture",
    place: "London",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1619213117400-cd7f8e40381f?auto=format&fit=crop&w=1200&q=85",
    alt: "廊下に立つ人物のファッションポートレート",
    title: "A Quiet Room",
    category: "Editorial",
    place: "Berlin",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1522404419647-18cb51cc5c7a?auto=format&fit=crop&w=1200&q=85",
    alt: "青い空と白い建築",
    title: "Blue Geometry",
    category: "Personal",
    place: "Lisbon",
    className: "md:col-span-5 aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1536180838057-b604200e6f36?auto=format&fit=crop&w=1400&q=85",
    alt: "女性を写したモノクロームのポートレート",
    title: "Her Own Light",
    category: "Portrait",
    place: "Paris",
    className: "md:col-span-7 aspect-[4/3]",
  },
]

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function App() {
  return (
    <main>
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-neutral-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1568038479111-87bf80659645?auto=format&fit=crop&w=2200&q=90"
          alt="風に髪を揺らす人物の横顔"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15" />
        <div className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-8 md:px-10 md:pb-10">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] md:ml-1">Photographer / Tokyo & Worldwide</p>
          <div className="mt-10 flex items-end justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.22em]">
            <span>Portrait / Editorial / Travel</span>
            <span className="hidden md:block">Scroll to explore — 2025</span>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f3f0e9] px-5 py-24 text-[#171715] md:px-10 md:py-36">
        <div className="mb-14 flex items-end justify-between border-b border-black/25 pb-4 md:mb-20">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.28em]">SELECTED WORKS</p>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-6 text-black/60 md:block">
            人と場所のあいだに流れる、静かな時間。<br />その一瞬に残る光を写しています。
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-14 md:grid-cols-12 md:auto-rows-[22vw] md:gap-y-20">
          {works.map((work, index) => (
            <article key={work.title} className={`group ${work.className}`}>
              <div className="h-[calc(100%-3.2rem)] min-h-[18rem] overflow-hidden bg-neutral-300">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              {index !== 0 && (
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[9px] tabular-nums">0{index + 1}</span>
                  </div>
                  <p className="pt-1 text-right text-[9px] uppercase leading-4 tracking-[0.2em] text-black/55">
                    {work.category}<br />{work.place}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="relative grid min-h-[90svh] overflow-hidden bg-[#161616] text-white md:grid-cols-2">
        <div className="relative min-h-[65svh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1619857121838-997e82345250?auto=format&fit=crop&w=1600&q=85"
            alt="広い道を一人で歩く人物"
            loading="lazy"
            className="absolute inset-0 size-full object-cover grayscale"
          />
          <span className="absolute left-5 top-6 text-[10px] tracking-[0.25em] md:left-10">LATEST SERIES / 06</span>
        </div>
      </section>

      <section id="about" className="grid bg-[#c6d0a2] px-5 py-24 text-[#162016] md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-8 md:col-start-5">
          <div className="mt-16 grid gap-10 border-t border-black/25 pt-7 text-sm leading-7 md:grid-cols-2 md:gap-20">
            <p>
              東京を拠点に活動するフォトグラファー。ポートレート、ファッション、旅を中心に、国内外の雑誌やブランドのビジュアルを手がけています。
            </p>
            <div>
              <p className="mb-8 text-black/65">
                Editorial commissions, campaigns, portraits and collaborations are welcome.
              </p>
              <a href="#contact" className="inline-flex items-center gap-5 border-b border-current pb-1 text-[10px] tracking-[0.22em]">
                MORE ABOUT ME <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#171715] px-5 pb-8 pt-24 text-white md:px-10 md:pt-36">
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8 text-[9px] uppercase leading-5 tracking-[0.2em] text-white/60">
          <p>Tokyo, Japan<br />Available worldwide</p>
          <div className="flex gap-7">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Vimeo</a>
          </div>
          <p className="text-right">© 2025 Aoi Nakamura<br />All rights reserved</p>
        </div>
      </footer>
    </main>
  )
}
