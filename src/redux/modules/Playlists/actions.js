import ApiService from '../../../services/Api';
import { getPlaylists, getPlaylistVideos } from '../../../services/YoutubeService.js';
// action creators

export const playlistsRequest = () => {
  return { type: 'PLAYLISTS_REQUEST' }
}

export const playlistsFailure = (errors) => {
  return {
    type: 'PLAYLISTS_FAILURE',
    errors
  }
}

export const setPlaylists = (playlists) => {
  return {
    type: 'PLAYLISTS_SUCCESS',
    playlists
  }
}

export const addPlaylist = (playlist) => {
  return {
    type: 'ADD_PLAYLIST_SUCCESS',
    playlist
  }
}

export const refreshPlaylist = (playlist) => {
  return {
    type: 'REFRESH_PLAYLIST_SUCCESS',
    playlist
  }
}

export const deletePlaylist = (playlist) => {
  return {
    type: 'DELETE_PLAYLIST_SUCCESS',
    playlist
  }
}

// async actions

export const createPlaylist = (id) => {
  return dispatch => {
    dispatch(playlistsRequest());
    return getPlaylists(id).then(result => {
      if(result.errors) {
        console.log(result.errors)
        } else {
          const playlist = result.items[0];

          const newPlaylist = {
            title: playlist.snippet.title,
            playlist_id: playlist.id,
            description: playlist.snippet.description,
            thumbnail_url: playlist.snippet.thumbnails.standard.url,
            channel_title: playlist.snippet.channelTitle
          }
          return getPlaylistVideos(id).then(result => {


            newPlaylist.videos_attributes = result.items.map(video => {
              return  {
               title: video.snippet.title,
               video_id: video.snippet.id,
               description: video.snippet.description,
               thumbnail_url: video.snippet.thumbnails.standard.url
              }
            });
          }).then(() => {
            console.log(newPlaylist)
            return ApiService.post("/playlists", newPlaylist).then(response => {
              console.log(response);
              return addPlaylist(response);
            }).catch(errors => {
              console.log(errors)
            });
          });
        }
      })
    }
  };

//playlist: {
//   title: "",
//   playlist_id: "",
//   description: "",
//   thumbnail_url: "",
//   user_id: "",
//   videos: []
// }
