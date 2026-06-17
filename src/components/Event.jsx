import { HiMapPin, HiClock, HiCalendarDays } from 'react-icons/hi2'
import { HiOutlineMap } from 'react-icons/hi'

const EVENTS = [
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 20 Desember 2026',
    time: 'Pukul 08.00 - 10.00 WIB',
    location: 'Masjid Agung Al-Hidayah',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Jakarta+Pusat',
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 20 Desember 2026',
    time: 'Pukul 11.00 - 17.00 WIB',
    location: 'Grand Ballroom Hotel Indonesia',
    address: 'Jl. Thamrin No. 1, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Grand+Ballroom+Hotel+Indonesia',
  },
]

function Event() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Acara
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Merupakan suatu kehormatan jika Anda berkenan hadir
        </p>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {EVENTS.map((event, i) => (
            <div
              key={event.title}
              className="rounded-xl border border-gold/20 bg-white p-6 shadow-lg sm:p-8"
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
                    <p className="text-sm font-medium text-dark">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiClock className="mt-0.5 text-xl text-gold" />
                  <p className="text-sm text-soft-gray">{event.time}</p>
                </div>

                <div className="flex items-start gap-3">
                  <HiMapPin className="mt-0.5 text-xl text-gold" />
                  <div>
                    <p className="text-sm font-medium text-dark">
                      {event.location}
                    </p>
                    <p className="text-sm text-soft-gray">{event.address}</p>
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
