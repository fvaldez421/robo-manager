import { get } from '../../utils/requests';
import { LOAD_ROBOTS_REQUEST, LOAD_ROBOTS_SUCCESS } from './constants';



const baseUrl = 'https://swapi.co/api';
// import axios from 'axios';
export const getRobots = () => async dispatch => {
  console.log('loading robots!')
  dispatch({
    type: LOAD_ROBOTS_REQUEST,
  });
  const success = ({ status, data }) => dispatch({
    type: LOAD_ROBOTS_SUCCESS,
    payload: data
  });
  await get(
    `https://cors-anywhere.herokuapp.com/${baseUrl}/people`,
    success
  );
}
