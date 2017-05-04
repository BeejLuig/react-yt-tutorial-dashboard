import fetch from 'isomorphic-fetch';

const BASE_URL = process.env.REACT_APP_API_URL
console.log(process.env)
console.log(BASE_URL)

export const headers = () => {

  const token = JSON.parse(localStorage.getItem('token'));
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer: ${token}`,
    'Access-Control-Allow-Origin': 'https://yttd.herokuapp.com/'
  }
}

export const parseResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        return Promise.reject(json.errors);
      }

      return json;
    });
}

export const queryString = (params) => {
  const query = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

  return `${query.length ? '?' : ''}${query}`;
}

export default {

  get(url, params = {}) {
    return fetch(`${BASE_URL}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),
    })
    .then(parseResponse)
    .catch(errors => {
      console.log(errors)
    })
  },

  post(url, data = {}) {
    const body = JSON.stringify(data);
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
    .then(parseResponse)
  },

  patch(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body,
    })
    .then(parseResponse)
  },

  delete(url) {
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
    .then(parseResponse)
  }
}
