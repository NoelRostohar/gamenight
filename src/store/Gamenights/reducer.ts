import produce, { Draft } from 'immer';

import {
  GamenightsState,
  GamenightsActions,
  GamenightsActionTypes,
} from './types';

const gamenightsReducer = produce(
  (draft: Draft<GamenightsState>, action: GamenightsActions) => {
    switch (action.type) {
      case GamenightsActionTypes.StoreGamenights:
        draft.gamenights = action.gamenights;
        break;
      case GamenightsActionTypes.UpdateGamenight:
        const index = draft.gamenights.findIndex(
          (gamenight) => gamenight.id === action.gamenightId
        );
        draft.gamenights[index] = action.gamenight;
        break;
    }
  },
  { gamenights: [] }
);

export default gamenightsReducer;
