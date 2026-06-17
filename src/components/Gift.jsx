import { useState } from 'react'
import { HiGift, HiCheck } from 'react-icons/hi2'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

const BANKS = [
  { bank: 'BCA', account: '1234567890', name: 'David Pratama' },
  { bank: 'Mandiri', account: '9876543210', name: 'Sarah Amelia' },
]

function Gift() {
  const [copiedIndex, setCopiedIndex] = useState(null)

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
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          Amplop Digital
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih
        </p>

        <div
          className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="rounded-xl border border-gold/20 bg-white p-6 shadow-lg sm:p-8">
            <HiGift className="text-3xl text-gold sm:text-4xl" />
            <h3 className="mt-3 font-display text-xl text-dark sm:mt-4 sm:text-2xl">
              QRIS
            </h3>
            <p className="mt-1 text-xs text-soft-gray sm:mt-2 sm:text-sm">
              Scan QR Code di bawah untuk mengirimkan hadiah
            </p>
            <div className="mt-4 flex aspect-square items-center justify-center rounded-xl bg-cream p-6 sm:mt-6 sm:p-8">
              <div className="flex flex-col items-center gap-3">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-6 w-6 rounded sm:h-8 sm:w-8 ${i === 4 ? 'bg-gold' : i % 2 === 0 ? 'bg-dark/10' : 'bg-dark/20'}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-soft-gray">[QRIS Placeholder]</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gold/20 bg-white p-6 shadow-lg sm:p-8">
            <HiGift className="text-3xl text-gold sm:text-4xl" />
            <h3 className="mt-3 font-display text-xl text-dark sm:mt-4 sm:text-2xl">
              Transfer Bank
            </h3>
            <p className="mt-1 text-xs text-soft-gray sm:mt-2 sm:text-sm">
              Kirimkan melalui rekening berikut
            </p>

            <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
              {BANKS.map((item, i) => (
                <div key={item.bank} className="rounded-lg bg-cream p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-dark">
                      {item.bank}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.account, i)}
                      className="flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark transition-all duration-200 hover:bg-gold/20 cursor-pointer"
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
                    a.n. {item.name}
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
