import {
  GamenightsState,
  GamenightsActionTypes,
  GamenightsActions,
  StoreGamenights,
} from './types';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../axiosInstance';

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
  GamenightsState,
  unknown,
  StoreGamenights
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
