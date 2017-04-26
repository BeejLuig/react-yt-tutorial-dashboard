import { API_KEY } from '../config/env.js';

export function getPlaylistVideos(playlistId) {

  const GET_URL = "https://www.googleapis.com/youtube/v3/playlistItems"

  let requestUrl = `${GET_URL}?key=${API_KEY}&part=snippet&playlistId=${playlistId}&maxResults=50`;
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const init = {
    method: 'GET',
    headers: headers,
    cache: 'default',
    origin: 'http://localhost:3000'
  }

  return fetch(requestUrl, init)
    .then(resp => resp.json()
      .then(json => json)
  );

}

export function getPlaylists(playlistId) {

  const GET_URL = "https://www.googleapis.com/youtube/v3/playlists"

  let requestUrl = `${GET_URL}?key=${API_KEY}&part=snippet&id=${playlistId}&maxResults=50`;
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const init = {
    method: 'GET',
    headers: headers,
    cache: 'default',
    origin: 'http://localhost:3000'
  }

  return fetch(requestUrl, init)
    .then(resp => resp.json()
      .then(json => {
        return json.items.length > 0 ? json : { errors: ["No playlist found with the given url/id"] }
      })
  ).catch(err => {
    console.log(err)
  });

}
