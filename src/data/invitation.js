export const COUPLE = {
  man: { short: 'Davit', full: 'Davit Dewantoro' },
  woman: { short: 'Nia', full: 'Wike Amarta Nia' },
}

export const EVENTS = [
  {
    id: 'resepsi-pria',
    party: 'pria',
    title: 'Resepsi Pria',
    date: 'Selasa, 20 Oktober 2026',
    time: 'Pukul : Selera Anda',
    location: 'Rumah Mempelai Pria',
    address: 'Jln. Timur Stasiun Comal Desa Purwosari Kec. Comal Kab. Pemalang',
    mapsUrl: 'https://maps.app.goo.gl/6J48oZadYEFqCVsY9?g_st=ac',
  },
  {
    id: 'akad-nikah',
    party: 'both',
    title: 'Akad Nikah',
    date: 'Jumat, 23 Oktober 2026',
    time: 'Pukul 09.00 WIB s/d Selesai',
    location: 'Kediaman Mempelai Wanita',
    address: 'Jln tratai raya Purwosari comal',
    mapsUrl: 'https://maps.app.goo.gl/WgwAbRMiUiqgdMT97?g_st=ac',
  },
  {
    id: 'resepsi-wanita',
    party: 'wanita',
    title: 'Resepsi Wanita',
    date: 'Jumat, 23 Oktober 2026',
    time: 'Pukul : Selera Anda',
    location: 'Kediaman Mempelai Wanita',
    address: 'Jln tratai raya Purwosari comal',
    mapsUrl: 'https://maps.app.goo.gl/WgwAbRMiUiqgdMT97?g_st=ac',
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
    return EVENTS.filter(
      (event) => event.party === party || event.party === 'both',
    )
  }
  return EVENTS
}

export function getCountdownDate(party = getParty()) {
  return new Date(COUNTDOWN[party] || COUNTDOWN.all).getTime()
}

export function getDisplayDate(party = getParty()) {
  return DISPLAY_DATE[party] || DISPLAY_DATE.all
}
