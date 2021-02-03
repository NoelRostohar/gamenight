import { GameType } from '../../types';

export enum GamesActionTypes {
  StoreGames = 'StoreGames',
}

export interface GamesState {
  games: GameType[];
}

export interface StoreGamesAction {
  type: GamesActionTypes.StoreGames;
  games: GameType[];
}

export type GamesActions = StoreGamesAction;
