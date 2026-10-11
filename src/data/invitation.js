export const COUPLE = {
  man: { short: 'David', full: 'David Pratama' },
  woman: { short: 'Sarah', full: 'Sarah Amelia' },
}

export const EVENTS = [
  {
    id: 'resepsi-pria',
    party: 'pria',
    title: 'Resepsi Pria',
    date: 'Selasa, 20 Oktober 2026',
    time: 'Pukul 19.00 - 22.00 WIB',
    location: 'Gedung Serbaguna',
    address: 'Jl. Raya Cempaka No. 12, Bandung',
    mapsUrl: 'https://www.google.com/maps?q=-6.903677,109.5356858&z=17&hl=id',
  },
  {
    id: 'akad-nikah',
    party: 'wanita',
    title: 'Akad Nikah',
    date: 'Jumat, 23 Oktober 2026',
    time: 'Pukul 08.00 - 10.00 WIB',
    location: 'Kediaman Mempelai Wanita',
    address: 'Jl. Merdeka No. 88, Bandung',
    mapsUrl: 'https://www.google.com/maps?q=-6.903677,109.5356858&z=17&hl=id',
  },
  {
    id: 'resepsi-wanita',
    party: 'wanita',
    title: 'Resepsi Wanita',
    date: 'Jumat, 23 Oktober 2026',
    time: 'Pukul 18.00 - 21.00 WIB',
    location: 'Hotel Grand Sari',
    address: 'Jl. Merdeka No. 88, Bandung',
    mapsUrl: 'https://www.google.com/maps?q=-6.903677,109.5356858&z=17&hl=id',
  },
]

const COUNTDOWN = {
  pria: '2026-10-20T19:00:00',
  wanita: '2026-10-23T08:00:00',
  all: '2026-10-20T19:00:00',
}

const DISPLAY_DATE = {
  pria: 'Selasa, 20 Oktober 2026',
  wanita: 'Jumat, 23 Oktober 2026',
  all: '20 & 23 Oktober 2026',
}

export function getParty() {
  if (typeof window === 'undefined') return 'all'
  const params = new URLSearchParams(window.location.search)
  const pihak = (params.get('pihak') || '').toLowerCase()
  return pihak === 'pria' || pihak === 'wanita' ? pihak : 'all'
}

export function getEvents(party = getParty()) {
  if (party === 'pria' || party === 'wanita') {
    return EVENTS.filter((event) => event.party === party)
  }
  return EVENTS
}

export function getCountdownDate(party = getParty()) {
  return new Date(COUNTDOWN[party] || COUNTDOWN.all).getTime()
}

export function getDisplayDate(party = getParty()) {
  return DISPLAY_DATE[party] || DISPLAY_DATE.all
}
