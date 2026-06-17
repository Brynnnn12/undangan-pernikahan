const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    alt: 'Wedding venue',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    alt: 'Wedding reception',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    alt: 'Bridal bouquet',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    alt: 'Wedding rings',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1464693368231-2483e29595a7?w=600&q=80',
    alt: 'Wedding decoration',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80',
    alt: 'Wedding dress',
  },
]

function Gallery() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Galeri
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Cerita kami dalam gambar
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
