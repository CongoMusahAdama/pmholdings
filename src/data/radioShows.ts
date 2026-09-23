export interface RadioShow {
  name: string
  year: string
  slot: string
  note?: string
}

export interface RadioStation {
  station: string
  period: string
  shows: RadioShow[]
}

export const radioStations: RadioStation[] = [
  {
    station: 'YFM Takoradi',
    period: '2014 — present',
    shows: [
      {
        name: 'Roots & Revival',
        year: '2014',
        slot: 'Reggae show',
        note: 'First radio show',
      },
      {
        name: 'Y Campus Express',
        year: '2016',
        slot: 'Students show',
      },
      {
        name: 'Shouts On Y',
        year: '2017',
        slot: 'Music request at lunch time',
      },
      {
        name: 'DrYve of Your Lyfe',
        year: '2019 — present',
        slot: 'Drivetime',
      },
    ],
  },
  {
    station: 'Radio Maxx',
    period: '2018',
    shows: [
      {
        name: 'Maxx Metro Mixx',
        year: '2018',
        slot: 'Midmorning',
      },
      {
        name: 'Rhythms and Lunch',
        year: '2018',
        slot: 'Lunch time',
      },
      {
        name: 'Super Morning Show',
        year: '2018',
        slot: 'Morning show — Anchor',
      },
      {
        name: 'Orange House Party',
        year: '2018',
        slot: 'Friday night',
      },
      {
        name: 'Maxx Beach Jam',
        year: '2018',
        slot: 'Sunday late afternoon',
      },
      {
        name: 'Maxx Music Mixx',
        year: '2018',
        slot: 'After drive',
      },
      {
        name: 'Maxx OverDrive',
        year: '2018',
        slot: 'Drivetime',
      },
    ],
  },
]
