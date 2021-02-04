import { GameType, Place } from '../../types';
import { StateStatus, StateStatusActions } from '../statusTypes';

export enum GamenightActionTypes {
  ChangePlace = 'ChangePlace',
  AddGame = 'AddGame',
  RemoveGame = 'RemoveGame',
  ChangeDate = 'ChangeDate',
  ChangeTime = 'ChangeTime',
  ClearGamenight = 'ClearGamenight',
}

export interface GamenightState extends StateStatus {
  games: GameType[];
  place: Place;
  date: Date;
  time: Date;
}

export interface ChangePlaceAction {
  type: GamenightActionTypes.ChangePlace;
  place: Place;
}
export interface AddGameAction {
  type: GamenightActionTypes.AddGame;
  game: GameType;
}
export interface RemoveGameAction {
  type: GamenightActionTypes.RemoveGame;
  id: string | number;
}
export interface ChangeDateAction {
  type: GamenightActionTypes.ChangeDate;
  date: Date;
}
export interface ChangeTimeAction {
  type: GamenightActionTypes.ChangeTime;
  time: Date;
}
export interface ClearGamenightAction {
  type: GamenightActionTypes.ClearGamenight;
}

export type GamenightActions =
  | ChangePlaceAction
  | AddGameAction
  | RemoveGameAction
  | ChangeDateAction
  | ChangeTimeAction
  | ClearGamenightAction;

export type Action = GamenightActions | StateStatusActions;
