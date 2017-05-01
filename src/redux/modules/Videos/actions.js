import ApiService from '../../../services/Api';
import { resetPlaylistVideos } from '../Playlists/actions'
// action creators

export const playlistVideosRequest = () => {
  return {
    type: 'PLAYLIST_VIDEOS_REQUEST'
  }
}

export const playlistVideosSuccess = (videos) => {
  return {
    type: 'PLAYLIST_VIDEOS_SUCCESS',
    videos
  }
}

export const playlistVideosFailure = (errors) => {
  return {
    type: 'PLAYLIST_VIDEOS_FAILURE',
    errors
  }
}

export const setActiveVideo = (activeVideo) => {
  return {
    type: 'SET_ACTIVE_VIDEO',
    activeVideo
  }
}

export const completeActiveVideo = (video) => {
  return {
    type: 'COMPLETE_VIDEO',
    video
  }
}

export const resetVideos = (videos) => {
  return {
    type: 'RESET_VIDEOS',
    videos
  }
}

// async actions

export const getPlaylistVideos = (id) => {
  return dispatch => {
    dispatch(playlistVideosRequest());
    return ApiService.get(`/playlists/${id}/videos`)
      .then(videos => {
        dispatch(playlistVideosSuccess(videos));
        let activeVideo = videos.find(video => video.is_active);
        if (activeVideo) {
          dispatch(setActiveVideo(activeVideo));
        } else {
          return ApiService.post(`/videos/${videos[0].id}/activate`)
            .then(activeVideo => {
              dispatch(setActiveVideo(activeVideo));
            })
        }
      })
      .catch(errors => {
        console.log(errors)
        dispatch(playlistVideosFailure(errors))
      });
  }
}

export const switchActiveVideos = (newId) => {
  return dispatch => {
    dispatch(playlistVideosRequest());
    return ApiService.post(`/videos/${newId}/activate`)
    .then(video => {
      dispatch(setActiveVideo(video))
    })
    .catch(errors => {
      console.log(errors)
      dispatch(playlistVideosFailure(errors))
    });
  }
}

export const completeVideo = (id) => {
  return (dispatch, getState) => {
    dispatch(playlistVideosRequest());
    const videos = getState().videos.videos;
    const index = videos.findIndex(vid => vid.id === id);

    if(index === (videos.length - 1)){
      ApiService.post(`/videos/${id}/complete`)
        .then(video => {
          dispatch(completeActiveVideo(video));
          return window.location = "/dashboard"
        })
      .catch(errors => {
        console.log(errors);
        dispatch(playlistVideosFailure(errors));
      });
    } else {
      ApiService.post(`/videos/${id}/complete`)
        .then(video => {
          dispatch(completeActiveVideo(video));
          const nextVideoId = video.id + 1;
          return ApiService.post(`/videos/${nextVideoId}/activate`)
        .then(video => {
          dispatch(setActiveVideo(video))
        })
      })
      .catch(errors => {
        console.log(errors);
        dispatch(playlistVideosFailure(errors));
      });
    }
  }
}

export const resetCompletedVideos = (playlistId) => {
  return dispatch => {
    dispatch(playlistVideosRequest());
    ApiService.post(`/playlists/${playlistId}/reset_videos`)
      .then(videos => {
        dispatch(resetVideos(videos));
        dispatch(resetPlaylistVideos(playlistId));
        dispatch(switchActiveVideos(videos[0].id));
        alert("Videos successfully reset");
      })
      .catch(errors => {
        console.log(errors);
      });
  }
}
