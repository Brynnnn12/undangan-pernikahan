import { useState } from 'react'
import { HiGift, HiCheck } from 'react-icons/hi2'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { getParty } from '../data/invitation.js'

const BANKS = [
  { party: 'pria', bank: 'DANA', account: '085817794810', name: 'Davit Dewantara' },
  { party: 'wanita', bank: 'DANA', account: '085229297865', name: 'Wike Amarta Nia' },
]

function Gift() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const party = getParty()
  const banks = party === 'all' ? BANKS : BANKS.filter((b) => b.party === party)

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)

      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      alert('Gagal menyalin. Silakan salin manual.')
    }
  }

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Tanda Kasih
        </h2>

        {/* Sub-judul disesuaikan */}
        <p
          className="mt-2 text-center text-xs leading-relaxed text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Doa restu kalian adalah hal yang paling berharga. Namun, jika berhalangan hadir, tanda kasih dapat dikirim melalui DANA berikut:
        </p>

        <div
          className="mt-10 sm:mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="rounded-xl border border-gold/20 bg-white p-6 shadow-lg sm:p-8">
            <HiGift className="text-3xl text-gold sm:text-4xl" />

            <h3 className="mt-3 font-display text-xl text-dark sm:mt-4 sm:text-2xl">
              Kirim Hadiah
            </h3>

            <p className="mt-1 text-xs text-soft-gray sm:mt-2 sm:text-sm">
              Terima kasih banyak sudah ikut merayakan hari bahagia kami! 🤍
            </p>

            <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {banks.map((item, i) => (
                <div
                  key={`${item.account}-${item.name}`}
                  className="rounded-lg bg-cream p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-dark">
                      {item.bank}
                    </span>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.account, i)}
                      className="flex cursor-pointer items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark transition-all duration-200 hover:bg-gold/20"
                    >
                      {copiedIndex === i ? (
                        <>
                          <HiCheck className="text-sm" />
                          Tersalin
                        </>
                      ) : (
                        <>
                          <HiOutlineClipboardCopy className="text-sm" />
                          Salin
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-2 font-mono text-base font-semibold tracking-wider text-dark">
                    {item.account}
                  </p>

                  <p className="mt-1 text-xs text-soft-gray">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gift