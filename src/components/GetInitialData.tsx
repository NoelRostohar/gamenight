import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGames } from '../store/Games/actions';
import { getGamenights } from '../store/Gamenights/actions';

const GetGames = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamenights());
    dispatch(getGames());
  }, []);

  return null;
};

export default GetGames;
