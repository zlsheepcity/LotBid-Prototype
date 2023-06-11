import { ILot, emptyLot } from 'Interfaces'

export const TheLots = [

  {
    ...emptyLot,
    title: 'Cirsma nr. 756',
    place: 'Skujenes pagasts, Vecskujas',
    volume: 100,
    distanceUser: 56,
    bidCurrent: 1240,
    bidUser: 1240,
    deadline: '2023.07.02, 08:24',
    geomapImageSrc: '/geomap.png',
    notifyUser: true,
  },
  {
    ...emptyLot,
    title: 'Cirsma nr. 765',
    place: 'Brīvzemnieku pagasts, Bāleliņi',
    volume: 240,
    distanceUser: 140,
    bidCurrent: 1620,
    bidUser: 1600,
    deadline: '2023.07.02, 16:32',
    geomapImageSrc: '/geomap2.png',
  },
  {
    ...emptyLot,
    title: 'Cirsma nr. 602',
    place: 'Sunākstes pagasts, Osijas',
    volume: 180,
    distanceUser: 21,
    bidCurrent: 1401,
    bidUser: 1401,
    deadline: 'finished',
    geomapImageSrc: '/geomap3.png',
    notifyUser: true,
    active: false,
    requireUser: true,
  },

]

