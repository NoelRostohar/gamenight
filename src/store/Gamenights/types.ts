import { GamenightType, Participant } from '../../types';

export enum GamenightsActionTypes {
  StoreGamenights = 'StoreGamenights',
  UpdateGamenight = 'UpdateGamenight',
}

export interface GamenightsState {
  gamenights: GamenightType[];
}

export interface StoreGamenights {
  type: GamenightsActionTypes.StoreGamenights;
  gamenights: GamenightType[];
}

export interface UpdateGamenight {
  type: GamenightsActionTypes.UpdateGamenight;
  gamenightId: number;
  gamenight: GamenightType;
}

export type GamenightsActions = StoreGamenights | UpdateGamenight;
