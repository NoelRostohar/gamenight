import { GameType, Place } from '../../types';

export enum GameNightActionTypes {
  ChangePlace = 'ChangePlace',
  ChangeGame = 'ChangeGame',
  ChangeDate = 'ChangeDate',
  ChangeTime = 'ChangeTime',
}

export interface GameNight {
  games: GameType[];
  place: Place;
  date: string;
  time: string;
}

export interface ChangePlaceAction {
  type: GameNightActionTypes.ChangePlace;
  payload: Place;
}
export interface ChangeGameAction {
  type: GameNightActionTypes.ChangeGame;
  payload: GameType;
}
export interface ChangeDateAction {
  type: GameNightActionTypes.ChangeDate;
  payload: string;
}
export interface ChangeTimeAction {
  type: GameNightActionTypes.ChangeTime;
  payload: string;
}

export type GameNightActions =
  | ChangePlaceAction
  | ChangeGameAction
  | ChangeDateAction
  | ChangeTimeAction;
