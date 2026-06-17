import { useEffect } from 'react'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import AOS from 'aos'

const COUPLE = {
  man: 'David',
  woman: 'Sarah',
  date: 'Sabtu, 20 Desember 2026',
}

function Cover() {
  const params = new URLSearchParams(window.location.search)
  const guestNameRaw = params.get('to')
  const guestName = guestNameRaw ? decodeURIComponent(guestNameRaw) : ''

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    })
  }, [])

  const scrollToContent = () => {
    const el = document.getElementById('content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
        }}
      >
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <p
          className="font-display text-3xl tracking-wide text-gold-light sm:text-4xl md:text-6xl"
          data-aos="fade-down"
        >
          The Wedding Of
        </p>

        <h1
          className="mt-3 flex flex-wrap items-center justify-center gap-x-2 font-display text-4xl leading-tight sm:text-5xl md:text-7xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>{COUPLE.man}</span>
          <span className="text-gold">&</span>
          <span className="text-gold">{COUPLE.woman}</span>
        </h1>

        <p
          className="mt-3 text-sm font-light tracking-widest text-white/80 sm:text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {COUPLE.date}
        </p>

        {guestName && (
          <p
            className="mt-4 w-full max-w-xs px-2 text-base sm:mt-6 sm:max-w-sm sm:text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Kepada Yth.
            <br />
            <span className="block break-words font-display text-2xl text-gold-light sm:text-3xl md:text-4xl">
              {guestName}
            </span>
          </p>
        )}

        <button
          onClick={scrollToContent}
          className="mt-8 cursor-pointer rounded-full bg-white/20 px-8 py-2.5 text-xs font-medium tracking-widest text-white transition-all duration-300 hover:bg-white/30 backdrop-blur-sm border border-white/30 sm:mt-10 sm:px-10 sm:py-3 sm:text-sm"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          BUKA UNDANGAN
        </button>

        <div className="absolute bottom-8 animate-float sm:bottom-10">
          <HiOutlineChevronDoubleDown className="text-xl text-white/70 sm:text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Cover
