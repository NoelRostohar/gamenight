import { GamenightType } from '../../types';

export enum GamenightsActionTypes {
  StoreGamenights = 'StoreGamenights',
}

export interface GamenightsState {
  gamenights: GamenightType[];
}

export interface StoreGamenights {
  type: GamenightsActionTypes.StoreGamenights;
  gamenights: GamenightType[];
}

export type GamenightsActions = StoreGamenights;
