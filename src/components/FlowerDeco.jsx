function FlowerDeco({ side = 'left' }) {
  const isLeft = side === 'left'
  const mirror = isLeft ? '' : 'scaleX(-1)'

  return (
    <div
      className={`absolute top-0 hidden h-full w-24 select-none md:block ${
        isLeft ? 'left-0' : 'right-0'
      }`}
      style={{ transform: mirror, transformOrigin: 'center' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-gold/20"
      >
        <path
          d="M48 800 C48 700 20 650 20 580 C20 510 60 470 60 400 C60 330 20 290 20 220 C20 150 48 100 48 0"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />

        <path
          d="M48 180 C60 160 80 150 88 160"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M48 260 C30 240 15 235 8 248"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M48 420 C65 400 85 395 92 408"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M48 530 C25 515 12 510 6 525"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M48 660 C62 645 78 640 88 652"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        <g opacity="0.4">
          <ellipse cx="48" cy="190" rx="10" ry="14" fill="currentColor" transform="rotate(-20,48,190)" />
          <ellipse cx="48" cy="190" rx="10" ry="14" fill="currentColor" transform="rotate(20,48,190)" />
          <ellipse cx="48" cy="190" rx="10" ry="14" fill="currentColor" transform="rotate(-50,48,190)" />
          <ellipse cx="48" cy="190" rx="10" ry="14" fill="currentColor" transform="rotate(50,48,190)" />
          <circle cx="48" cy="190" r="5" fill="currentColor" />
        </g>

        <g opacity="0.35">
          <ellipse cx="48" cy="430" rx="8" ry="11" fill="currentColor" transform="rotate(-25,48,430)" />
          <ellipse cx="48" cy="430" rx="8" ry="11" fill="currentColor" transform="rotate(25,48,430)" />
          <ellipse cx="48" cy="430" rx="8" ry="11" fill="currentColor" transform="rotate(-55,48,430)" />
          <ellipse cx="48" cy="430" rx="8" ry="11" fill="currentColor" transform="rotate(55,48,430)" />
          <circle cx="48" cy="430" r="4" fill="currentColor" />
        </g>

        <g opacity="0.3">
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(-15,48,670)" />
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(15,48,670)" />
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(-45,48,670)" />
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(45,48,670)" />
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(-75,48,670)" />
          <ellipse cx="48" cy="670" rx="12" ry="16" fill="currentColor" transform="rotate(75,48,670)" />
          <circle cx="48" cy="670" r="5" fill="currentColor" />
        </g>

        <circle cx="28" cy="270" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="65" cy="405" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="30" cy="540" r="2.5" fill="currentColor" opacity="0.25" />
        <circle cx="70" cy="650" r="3" fill="currentColor" opacity="0.3" />

        <path
          d="M60 395 C75 380 85 370 90 375 C95 380 85 395 75 400 C65 405 55 395 60 395Z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M30 530 C18 515 8 508 4 514 C0 520 8 532 18 538 C28 544 36 535 30 530Z"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>
    </div>
  )
}

export default FlowerDeco
