import ApiService from '../../../services/Api';
import { getPlaylists, getPlaylistVideos } from '../../../services/YoutubeService.js';
// action creators

export const playlistsRequest = () => {
  return { type: 'PLAYLISTS_REQUEST' }
}

export const playlistsFailure = (errors) => {
  return {
    type: 'USER_PLAYLISTS_FAILURE',
    errors
  }
}

export const setPlaylists = (playlists) => {
  return {
    type: 'USER_PLAYLISTS_SUCCESS',
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

export const deletePlaylist = (playlistId) => {
  return {
    type: 'DELETE_PLAYLIST_SUCCESS',
    playlistId
  }
}

// async actions

export const addUserPlaylist = (id) => {
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
            thumbnail_url: playlist.snippet.thumbnails.default.url,
            channel_title: playlist.snippet.channelTitle
          }

          return getPlaylistVideos(id).then(result => {
            newPlaylist.videos_attributes = result.items.map(video => {
              return {
                 title: video.snippet.title,
                 video_id: video.id,
                 description: video.snippet.description,
                 thumbnail_url: video.snippet.thumbnails.default.url
               }
            })
          }).then(() => {
            return ApiService.post("/playlists", { playlist: newPlaylist }).then(playlist => {
              console.log(playlist)
              dispatch(addPlaylist(playlist));
            }).catch(errors => {
              console.log(errors)
            });
          });
        }
      })
    }
  };

  export const getUserPlaylists = () => {
    return dispatch => {
      dispatch(playlistsRequest());
      return ApiService.get('/playlists').then(playlists => {
        dispatch(setPlaylists(playlists));
      });
    }
  }

  export const deleteUserPlaylists = (id) => {
    return dispatch => {
      dispatch(playlistsRequest());
      return ApiService.delete(`/playlists/${id}`).then(response => {
        dispatch(deletePlaylist(id))
        alert(response.success[0])
      }).catch(errors => {
        console.log(errors)
      });
    }
  }

//playlist: {
//   title: "",
//   playlist_id: "",
//   description: "",
//   thumbnail_url: "",
//   user_id: "",
//   videos: []
// }
