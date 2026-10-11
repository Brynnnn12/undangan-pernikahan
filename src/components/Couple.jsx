import FlowerDeco from './FlowerDeco.jsx'

const COUPLE_DATA = {
  man: {
    name: 'Davit Dewantara',
    parent: 'Putra dari Bpk. Masrup & Ibu Casriyah',
    photo: null,
    initial: 'D',
  },
  woman: {
    name: 'Wike Amarta Nia',
    parent: 'Putri dari Bpk. Karsadi & Ibu Aminah',
    photo: null,
    initial: 'N',
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
          Mempelai
        </h2>

        {/* Teks deskripsi dibuat ringkas, manis, dan tidak kaku */}
        <p
          className="mx-auto mt-3 max-w-xl text-center text-xs leading-relaxed text-soft-gray sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dengan penuh rasa syukur, kami ingin berbagi kebahagiaan menyambut hari istimewa ini bersama kalian.
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

              <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-soft-gray sm:max-w-xs sm:text-sm">
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