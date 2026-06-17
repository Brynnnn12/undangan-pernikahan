import { useState, useEffect, useCallback } from 'react'

const WEDDING_DATE = new Date('2026-12-20T08:00:00').getTime()

function getTimeRemaining() {
  const now = new Date().getTime()
  const diff = WEDDING_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Countdown() {
  const [time, setTime] = useState(getTimeRemaining)

  const tick = useCallback(() => {
    setTime(getTimeRemaining())
  }, [])

  useEffect(() => {
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [tick])

  const items = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ]

  return (
    <section className="gold-gradient px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="font-display text-3xl text-white sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Menuju Hari Bahagia
        </h2>
        <p
          className="mt-2 text-xs font-light text-white/80 sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hitungan menuju momen istimewa kami
        </p>

        <div
          className="mt-8 flex justify-center gap-2 sm:mt-12 sm:gap-4 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md shadow-lg sm:h-20 sm:w-20 md:h-28 md:w-28">
                <span className="font-display text-xl text-white sm:text-3xl md:text-5xl">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/70 sm:mt-2 sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown
