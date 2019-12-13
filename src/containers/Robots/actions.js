import { get } from '../../utils/requests';
import { LOAD_ROBOTS_REQUEST, LOAD_ROBOTS_SUCCESS } from './constants';


const baseUrl = 'https://swapi.co/api';

export const getRobots = () => async dispatch => {
  dispatch({
    type: LOAD_ROBOTS_REQUEST,
  });
  const success = ({ data }) => dispatch({
    type: LOAD_ROBOTS_SUCCESS,
    payload: data
  });
  await get(
    `${baseUrl}/people`,
    success
  );
}
