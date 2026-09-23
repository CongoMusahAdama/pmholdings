export type HonourResult = 'Won' | 'Nominee'

export interface HonourCategory {
  name: string
  result: HonourResult
}

export interface Honour {
  id: string
  body: string
  years: string
  categories: HonourCategory[]
}

export const honours: Honour[] = [
  {
    id: 'national-communications-awards-2020',
    body: 'National Communications Awards',
    years: '2020',
    categories: [{ name: 'Radio Personality of the Year', result: 'Won' }],
  },
  {
    id: 'national-communications-awards-2021',
    body: 'National Communications Awards',
    years: '2021',
    categories: [{ name: 'Event MC of the Year', result: 'Nominee' }],
  },
  {
    id: 'guinness-ghana-dj-awards',
    body: 'Guinness Ghana DJ Awards',
    years: '2020 & 2025',
    categories: [{ name: 'MC / Hypeman of the Year', result: 'Nominee' }],
  },
  {
    id: 'ghana-entertainment-awards-usa',
    body: 'Ghana Entertainment Awards USA',
    years: '2024 & 2026',
    categories: [
      { name: 'Radio Personality of the Year', result: 'Nominee' },
      { name: 'Hypeman / MC of the Year', result: 'Nominee' },
    ],
  },
  {
    id: 'ttu-src-excellence-awards',
    body: 'TTU SRC Excellence Awards',
    years: '2025',
    categories: [{ name: 'Alumnus Special Honour — MC / Broadcaster', result: 'Won' }],
  },
  {
    id: 'rtp-awards',
    body: 'RTP Awards',
    years: '2024 & 2025',
    categories: [{ name: 'Western Region Radio Personality of the Year', result: 'Nominee' }],
  },
  {
    id: 'western-gospel-awards',
    body: 'Western Gospel Awards',
    years: '2025',
    categories: [
      { name: 'Youth Leadership Award', result: 'Won' },
      { name: 'Best Humanitarian & Outstanding Philanthropist', result: 'Won' },
    ],
  },
  {
    id: 'ghana-youth-leaders-awards',
    body: 'Ghana Youth Leaders Awards',
    years: '2025',
    categories: [{ name: 'Best Youth in Event Management', result: 'Won' }],
  },
  {
    id: 'ghana-western-achievement-awards',
    body: 'Ghana Western Achievement and Celebrities Awards',
    years: '2025',
    categories: [{ name: 'Radio Personality of the Year', result: 'Won' }],
  },
  {
    id: 'western-business-awards',
    body: 'Western Business Awards',
    years: '2020',
    categories: [{ name: 'Outstanding NGO of the Year', result: 'Nominee' }],
  },
  {
    id: 'western-music-awards',
    body: 'Western Music Awards',
    years: '2017, 2019 & 2020',
    categories: [{ name: 'Best Entertainment Show Host of the Year', result: 'Nominee' }],
  },
  {
    id: 'g-park-excellence-awards',
    body: 'G Park Excellence Awards by TTU',
    years: '2014',
    categories: [{ name: 'Best MC of the Year', result: 'Won' }],
  },
  {
    id: 'fontonfrom-amandze-awards',
    body: 'Fontonfrom Amandze Awards',
    years: '2019',
    categories: [{ name: 'Most Influential Youth of the Year', result: 'Nominee' }],
  },
  {
    id: 'c-baze-awards',
    body: 'C-Baze Awards',
    years: '2019',
    categories: [{ name: 'Students’ Favourite Presenter of the Year', result: 'Nominee' }],
  },
  {
    id: 'sekondi-takoradi-radio-awards',
    body: 'Sekondi-Takoradi Radio Awards',
    years: '2015',
    categories: [{ name: 'Best Reggae Presenter of the Year', result: 'Won' }],
  },
]

export function getHonour(id: string) {
  const index = honours.findIndex((h) => h.id === id)
  if (index < 0) return null
  return {
    honour: honours[index],
    index,
    prev: honours[(index - 1 + honours.length) % honours.length],
    next: honours[(index + 1) % honours.length],
  }
}

export const wonCount = honours.reduce(
  (n, h) => n + h.categories.filter((c) => c.result === 'Won').length,
  0,
)

export const nomineeCount = honours.reduce(
  (n, h) => n + h.categories.filter((c) => c.result === 'Nominee').length,
  0,
)

/** Short lines for teasers */
export const awards = honours.map((h) => {
  const lead = h.categories[0]
  return `${h.body} ${h.years} — ${lead.name} (${lead.result})`
})
