const initialState = {
  isRequesting: false,
  errors: [],
  videos: [],
  activeVideo: {}
}

export default (state = initialState, action) => {
  let videoIndex;

  switch(action.type) {

    case 'PLAYLIST_VIDEOS_REQUEST':
      return {
        ...state,
        isRequesting: true
      }

    case 'PLAYLIST_VIDEOS_SUCCESS':
      return {
        ...state,
        isRequesting: false,
        videos: action.videos
      }

    case 'PLAYLIST_VIDEOS_FAILURE':
      return {
        ...state,
        isRequesting: false,
        errors: action.errors
      };

    case 'SET_ACTIVE_VIDEO':
      videoIndex = state.videos.findIndex(video => video.id === action.activeVideo.id)
      const cleanedVideos = state.videos.map(video => {
        return { ...video, is_active: false }
      });
      return {
        ...state,
        isRequesting: false,
        activeVideo: action.activeVideo,
        videos: [
          ...cleanedVideos.slice(0, videoIndex),
          action.activeVideo,
          ...cleanedVideos.slice(videoIndex + 1)
        ]
      }

    case 'COMPLETE_VIDEO':
      videoIndex = state.videos.findIndex(video => video.id === action.video.id)
      return {
        ...state,
        isRequesting: false,
        videos: [
          ...state.videos.slice(0, videoIndex),
          action.video,
          ...state.videos.slice(videoIndex + 1)
        ]
      }

    case 'RESET_VIDEOS':
      return {
        ...state,
        isRequesting: false,
        videos: [...action.videos]
      }

    default:
      return state;
  }
}
