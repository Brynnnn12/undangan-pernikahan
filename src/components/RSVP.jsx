import { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'
import { HiChat } from 'react-icons/hi'

function RSVP() {
  const [form, setForm] = useState({ name: '', attendance: '', message: '' })
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('rsvp_messages')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.attendance) return

    const newMessage = {
      id: Date.now(),
      name: form.name.trim(),
      attendance: form.attendance,
      message: form.message.trim(),
      date: new Date().toLocaleDateString('id-ID'),
    }

    const updated = [newMessage, ...messages]
    setMessages(updated)
    localStorage.setItem('rsvp_messages', JSON.stringify(updated))
    setForm({ name: '', attendance: '', message: '' })
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-center font-display text-3xl text-gold sm:text-4xl md:text-5xl"
          data-aos="fade-down"
        >
          RSVP
        </h2>
        <p
          className="mt-2 text-center text-xs text-soft-gray sm:mt-3 sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Konfirmasi kehadiran dan sampaikan doa restu
        </p>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gold/20 bg-cream p-6 shadow-lg sm:p-8"
            data-aos="fade-right"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-dark">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama Anda"
                  className="mt-1.5 w-full rounded-lg border border-gold/20 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark">
                  Kehadiran
                </label>
                <select
                  name="attendance"
                  value={form.attendance}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-lg border border-gold/20 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                >
                  <option value="">Pilih kehadiran</option>
                  <option value="hadir">Hadir</option>
                  <option value="tidak-hadir">Tidak Hadir</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark">
                  Pesan & Doa
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tulis pesan dan doa untuk kedua mempelai"
                  className="mt-1.5 w-full resize-none rounded-lg border border-gold/20 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110 cursor-pointer"
              >
                <HiPaperAirplane className="text-lg" />
                Kirim
              </button>
            </div>
          </form>

          <div data-aos="fade-left">
            <div className="mb-4 flex items-center gap-2">
              <HiChat className="text-xl text-gold" />
              <h3 className="font-semibold text-dark">
                Ucapan & Doa ({messages.length})
              </h3>
            </div>

            <div className="max-h-[400px] space-y-3 overflow-y-auto sm:max-h-[500px]">
              {messages.length === 0 ? (
                <p className="rounded-lg bg-cream p-6 text-center text-sm text-soft-gray">
                  Belum ada ucapan. Jadilah yang pertama!
                </p>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="rounded-lg border border-gold/10 bg-cream p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-dark">
                        {msg.name}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          msg.attendance === 'hadir'
                            ? 'bg-green-100 text-green-700'
                            : msg.attendance === 'tidak-hadir'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {msg.attendance === 'hadir'
                          ? 'Hadir'
                          : msg.attendance === 'tidak-hadir'
                            ? 'Tidak Hadir'
                            : 'Masih Ragu'}
                      </span>
                    </div>
                    {msg.message && (
                      <p className="mt-2 text-sm leading-relaxed text-soft-gray">
                        "{msg.message}"
                      </p>
                    )}
                    <p className="mt-2 text-xs text-soft-gray">{msg.date}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP
