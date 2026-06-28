import FlowerDeco from './FlowerDeco.jsx'

const COUPLE_DATA = {
  man: {
    name: 'David Pratama',
    parent: 'Putra dari Bapak Hendra & Ibu Dewi',
    photo: null,
    initial: 'D',
  },
  woman: {
    name: 'Sarah Amelia',
    parent: 'Putri dari Bapak Budi & Ibu Rina',
    photo: null,
    initial: 'S',
  },
}

function Couple() {
  return (
    <section className="relative bg-cream px-4 py-16 sm:px-6 md:py-28">
      <FlowerDeco side="left" />
      <FlowerDeco side="right" />
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Kedua Mempelai
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dengan penuh rasa syukur, kami mempersembahkan cinta kami
        </p>

        <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-12 md:grid-cols-2 md:gap-16">
          {[COUPLE_DATA.man, COUPLE_DATA.woman].map((person, i) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light shadow-xl sm:h-48 sm:w-48 md:h-56 md:w-56">
                <span className="font-display text-5xl text-white sm:text-6xl md:text-7xl">
                  {person.initial}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-dark sm:mt-6 sm:text-3xl md:text-4xl">
                {person.name}
              </h3>
              <p className="mt-1 max-w-[220px] text-xs text-soft-gray sm:mt-2 sm:max-w-xs sm:text-sm">
                {person.parent}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Couple
