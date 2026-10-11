import { HiMapPin, HiClock, HiCalendarDays } from 'react-icons/hi2'
import { HiOutlineMap } from 'react-icons/hi'
import FlowerDeco from './FlowerDeco.jsx'
import { getEvents } from '../data/invitation.js'

function Event() {
  const events = getEvents()
  const isSingle = events.length === 1

  return (
    <section className="relative bg-night-soft px-4 py-16 sm:px-6 md:py-28">
      <FlowerDeco side="left" />
      <FlowerDeco side="right" />
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Acara
        </h2>
        <p
          className="mt-2 text-center text-xs text-muted sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Merupakan suatu kehormatan jika Anda berkenan hadir
        </p>

        <div
          className={`mt-10 grid gap-6 sm:mt-14 sm:gap-8 ${
            isSingle ? 'mx-auto max-w-xl md:grid-cols-1' : 'md:grid-cols-2'
          }`}
        >
          {events.map((event, i) => (
            <div
              key={event.id}
              className="rounded-xl border border-gold/20 bg-surface p-6 shadow-lg sm:p-8"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h3 className="font-display text-2xl text-gold sm:text-3xl">
                {event.title}
              </h3>

              <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <HiCalendarDays className="mt-0.5 text-xl text-gold" />
                  <div>
                    <p className="text-sm font-medium text-ink">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiClock className="mt-0.5 text-xl text-gold" />
                  <p className="text-sm text-muted">{event.time}</p>
                </div>

                <div className="flex items-start gap-3">
                  <HiMapPin className="mt-0.5 text-xl text-gold" />
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {event.location}
                    </p>
                    <p className="text-sm text-muted">{event.address}</p>
                  </div>
                </div>
              </div>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
              >
                <HiOutlineMap className="text-lg" />
                Buka Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Event
