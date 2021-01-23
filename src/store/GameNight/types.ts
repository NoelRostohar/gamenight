import { GameType, Place } from '../../types';

export enum GameNightActionTypes {
  ChangePlace = 'ChangePlace',
  AddGame = 'AddGame',
  RemoveGame = 'RemoveGame',
  ChangeDate = 'ChangeDate',
  ChangeTime = 'ChangeTime',
}

export interface GameNightState {
  games: GameType[];
  place: Place;
  date: Date;
  time: Date;
}

export interface ChangePlaceAction {
  type: GameNightActionTypes.ChangePlace;
  place: Place;
}
export interface AddGameAction {
  type: GameNightActionTypes.AddGame;
  game: GameType;
}
export interface RemoveGameAction {
  type: GameNightActionTypes.RemoveGame;
  _id: string | number;
}
export interface ChangeDateAction {
  type: GameNightActionTypes.ChangeDate;
  date: Date;
}
export interface ChangeTimeAction {
  type: GameNightActionTypes.ChangeTime;
  time: Date;
}

export type GameNightActions =
  | ChangePlaceAction
  | AddGameAction
  | RemoveGameAction
  | ChangeDateAction
  | ChangeTimeAction;
