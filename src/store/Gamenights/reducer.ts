import {
  GamenightsState,
  GamenightsActions,
  GamenightsActionTypes,
} from './types';

const gamenightsReducer = (
  state: GamenightsState = { gamenights: [] },
  action: GamenightsActions
): GamenightsState => {
  switch (action.type) {
    case GamenightsActionTypes.StoreGamenights:
      return {
        ...state,
        gamenights: action.gamenights,
      };
    default:
      return state;
  }
};

export default gamenightsReducer;
