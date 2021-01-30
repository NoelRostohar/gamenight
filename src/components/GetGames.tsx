import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getGames } from '../store/Games/actions';

const GetGames = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);

  return null;
};

export default GetGames;
