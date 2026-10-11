import { HiHeart, HiSparkles, HiStar } from 'react-icons/hi2'

const STORIES = [
  {
    icon: HiSparkles,
    title: 'Pertemuan',
    date: 'Januari 2020',
    description:
      'Berawal dari sebuah acara seminar di Jakarta, kami bertemu dan mulai berbagi cerita. Tanpa disangka, perbincangan singkat itu menjadi awal dari perjalanan cinta kami.',
  },
  {
    icon: HiHeart,
    title: 'Lamaran',
    date: 'Maret 2025',
    description:
      'Di sebuah restoran favorit kami, dengan latar matahari terbenam, David melamar Sarah dengan sebuah cincin sederhana dan hati yang penuh cinta.',
  },
  {
    icon: HiStar,
    title: 'Pernikahan',
    date: 'Desember 2026',
    description:
      'Akhirnya, di hari yang dinanti, kami akan mengikat janji suci di hadapan Tuhan dan keluarga. Doa restu dari kalian adalah hadiah terindah bagi kami.',
  },
]

function Story() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Love Story
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Perjalanan cinta kami dalam setiap langkah
        </p>

        <div className="relative mt-10 sm:mt-16">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold sm:left-1/2 sm:-translate-x-1/2 md:block" />

          <div className="space-y-10 pl-10 sm:space-y-12 sm:pl-0 md:space-y-16">
            {STORIES.map((story, i) => {
              const Icon = story.icon
              const isLeft = i % 2 === 0

              return (
                <div
                  key={story.title}
                  className="relative flex flex-col items-start sm:items-center sm:flex-row"
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div
                    className={`w-full sm:w-5/12 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12'}`}
                  >
                    <div className="rounded-xl bg-cream p-5 shadow-md sm:p-6">
                      <Icon className="text-xl text-gold sm:text-2xl" />
                      <h3 className="mt-2 font-display text-xl text-dark sm:text-2xl">
                        {story.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-gold">
                        {story.date}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-soft-gray sm:mt-3">
                        {story.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 top-2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gold shadow-lg sm:relative sm:left-auto sm:top-auto sm:h-8 sm:w-8 sm:translate-x-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-white sm:h-3 sm:w-3" />
                  </div>

                  <div className="hidden sm:block sm:w-5/12" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
