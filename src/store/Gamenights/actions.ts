import {
  GamenightsState,
  GamenightsActionTypes,
  GamenightsActions,
  UpdateGamenight,
} from './types';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../axiosInstance';
import { GlobalState } from '../';

const storeGamenights = ({
  gamenights,
}: GamenightsState): GamenightsActions => {
  return {
    type: GamenightsActionTypes.StoreGamenights,
    gamenights,
  };
};

export const getGamenights = (): ThunkAction<
  void,
  GlobalState,
  unknown,
  GamenightsActions
> => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/gamenights');
      dispatch(storeGamenights({ gamenights: res.data }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateGamenight = ({
  gamenightId,
  gamenight,
}: Omit<UpdateGamenight, 'type'>): GamenightsActions => {
  return {
    type: GamenightsActionTypes.UpdateGamenight,
    gamenightId,
    gamenight,
  };
};

export const getGamenight = (
  gamenightId: number
): ThunkAction<void, GlobalState, unknown, GamenightsActions> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/gamenight/${gamenightId}`);
      dispatch(updateGamenight({ gamenightId, gamenight: res.data }));
    } catch (err) {
      console.log(err);
    }
  };
};
