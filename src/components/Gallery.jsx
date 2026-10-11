const GALLERY_IMAGES = [
  { id: 1, src: '/image/image8.jpeg', alt: 'Momen kebersamaan' },
  { id: 2, src: '/image/image2.jpeg', alt: 'Potret bahagia' },
  { id: 3, src: '/image/image3.jpeg', alt: 'Detail dekorasi' },
  { id: 4, src: '/image/image4.jpeg', alt: 'Cincin pernikahan' },
  { id: 5, src: '/image/image9.jpeg', alt: 'Suasana acara' },
  { id: 6, src: '/image/image10.jpeg', alt: 'Detail busana' },
]

function Gallery() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Galeri Foto
        </h2>

        {/* Teks sub-judul dibuat simpel, ringan, dan langsung pada intinya */}
        <p
          className="mx-auto mt-3 max-w-lg text-center text-xs leading-relaxed text-soft-gray sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Sekilas potret kebahagiaan dan cerita kebersamaan kami.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 md:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <span className="font-display text-2xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ❤
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery