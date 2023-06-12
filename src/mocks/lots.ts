import { ILot, emptyLot } from 'Interfaces'

export const TheLots = [

  {
    ...emptyLot,
    title: 'Zari Nr.5721',
    place: 'Indrānu pagasts, Akmentiņi 1',
    volume: 110,
    distanceUser: 120,
    bidCurrent: 0,
    bidUser: 0,
    deadline: '2023.07.03, 17:11',
    geomapImageSrc: './geomap.png',
  },
  {
    ...emptyLot,
    title: 'Zari Nr.5717',
    place: 'Vecskujas pagasts, Indrāni',
    volume: 95,
    distanceUser: 20,
    bidCurrent: 800,
    bidUser: 0,
    deadline: '2023.07.03, 16:10',
    geomapImageSrc: './geomap3.png',
  },
  {
    ...emptyLot,
    title: 'Zari Nr.4756',
    place: 'Skujenes pagasts, Vecskujas',
    volume: 100,
    distanceUser: 56,
    bidCurrent: 1240,
    bidUser: 1240,
    deadline: '2023.07.02, 08:24',
    geomapImageSrc: './geomap.png',
    notifyUser: true,
  },
  {
    ...emptyLot,
    title: 'Zari Nr.4765',
    place: 'Brīvzemnieku pagasts, Bāleliņi',
    volume: 240,
    distanceUser: 140,
    bidCurrent: 1620,
    bidUser: 1600,
    deadline: '2023.07.02, 16:32',
    geomapImageSrc: './geomap2.png',
  },
  {
    ...emptyLot,
    title: 'Zari Nr.4610',
    place: 'Vecskujas pagasts, Sunākste',
    volume: 300,
    distanceUser: 300,
    bidCurrent: 0,
    bidUser: 0,
    deadline: '2023.07.02, 16:10',
    geomapImageSrc: './geomap2.png',
  },
  {
    ...emptyLot,
    title: 'Zari Nr.4602',
    place: 'Sunākstes pagasts, Osijas',
    volume: 180,
    distanceUser: 21,
    bidCurrent: 1401,
    bidUser: 1401,
    deadline: 'finished',
    geomapImageSrc: './geomap3.png',
    notifyUser: true,
    active: false,
    requireUser: true,
  },
]

