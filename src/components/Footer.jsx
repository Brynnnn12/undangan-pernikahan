import { HiHeart } from 'react-icons/hi2'

function Footer() {
  return (
    <footer className="gold-gradient px-4 py-12 text-center text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <HiHeart className="mx-auto text-2xl text-white/50 sm:text-3xl" />

        <p
          className="mt-4 font-display text-2xl leading-relaxed sm:mt-6 sm:text-3xl md:text-4xl"
          data-aos="fade-up"
        >
          Terima Kasih
        </p>
        <p
          className="mt-3 px-2 text-sm font-light leading-relaxed text-white/80 sm:mt-4 sm:px-0 sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Atas segala doa, restu, dan kehadiran yang telah diberikan.
          Kehadiran Anda adalah kebahagiaan bagi kami.
        </p>

        <div
          className="mt-8 border-t border-white/20 pt-6 sm:mt-10 sm:pt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="font-display text-2xl text-white sm:text-3xl md:text-4xl">
            David <span className="text-gold-light">&</span> Sarah
          </p>
          <p className="mt-3 text-xs font-light text-white/60 sm:mt-4 sm:text-sm">
            &copy; {new Date().getFullYear()} — Undangan Pernikahan
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
