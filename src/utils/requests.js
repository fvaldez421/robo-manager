import axios from 'axios';

export const makeParams = obj => {
  let strParams = '?';
  const paramsArr = [];
  for (let key in obj) {
    paramsArr.push(`${key}=${obj[key]}`);
  }
  strParams += paramsArr.join('&');
  return strParams;
}

export const get = async (url = '', success = _ => null, err = _ => null) => {
  const { status, ...rest } = await axios.get(url);
  if (status === 200) return success(rest);
  else {
    console.log({ err: rest })
    err(rest);
  }
};

export const put = () => { };
export const post = () => { };
export const remove = () => { };
