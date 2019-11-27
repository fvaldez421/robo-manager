import { get } from '../../utils/requests';
import { LOAD_ORGS_REQUEST, LOAD_ORGS_SUCCESS, LOAD_ORGS_FAILURE } from './constants';


const baseUrl = 'https://swapi.co/api';

export const loadOrgs = () => async dispatch => {
  dispatch({
    type: LOAD_ORGS_REQUEST,
  });
  const success = ({ data }) => dispatch({
    type: LOAD_ORGS_SUCCESS,
    payload: data
  });
  const err = ({ data }) => dispatch({
    type: LOAD_ORGS_FAILURE,
    payload: data
  })
  await get(
    `https://cors-anywhere.herokuapp.com/${baseUrl}/planets`,
    success,
    err
  );
}
