import {get as getOrigin} from 'axios';
import {apiKey} from './constants';

export function get(url, rest) {
  rest = {
    ...rest,
    params: {
      'api-key': apiKey,
      ...rest.params,
    }
  };

  return getOrigin(url, rest).then(res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(res.statusText);
  }, err => {
    return Promise.reject(err);
  });
}
