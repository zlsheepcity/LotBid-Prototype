import { IObject as IO } from 'Interfaces'

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export interface ILot extends IO {
  title: string; //'Cirsma nr. 17656'
  place: string; //'Skujenes pagasts, Vecskujas'
  volume: number; //m³
  bidCurrent: number; //€
  deadline: string; //Date
  active: boolean;
  geomapImageSrc: string;
//User related:
  bidUser: number; //€
  distanceUser: number; //km
  checkTimeUser: string; //Date
  notifyUser: boolean;
  requireUser: boolean;
}
export const emptyLot:ILot = {
  title: '',
  place: '',
  volume: 0,
  bidCurrent: 0,
  deadline: '',
  active: true,
  geomapImageSrc: '',
//User related:
  bidUser: 0,
  distanceUser: 0,
  checkTimeUser: '07:40',
  notifyUser: false,
  requireUser: false,
}
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
