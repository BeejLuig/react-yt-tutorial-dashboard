const initialState = {
  isRequesting: false,
  playlists: []
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'PLAYLISTS_REQUEST':
      return {
        ...state,
        isRequesting: true
      }

    case 'USER_PLAYLISTS_SUCCESS':
      return {
        isRequesting: false,
        playlists: action.playlists
      }

    case 'ADD_PLAYLIST_SUCCESS':
      return {
        isRequesting: false,
        playlists: [...state.playlists, action.playlist]
      }

    case 'REFRESH_PLAYLIST_SUCCESS':
      const index = state.playlists.findIndex(playlist => playlist.id === action.playlist.id)
      return {
        isRequesting: false,
        playlists: [
            ...state.playlists.slice(0, index),
            action.playlist,
            ...state.playlists.slice(index + 1)
          ]
      }

    case 'DELETE_PLAYLIST_SUCCESS':
      const deleteIndex = state.playlists.findIndex(playlist => playlist.id === action.playlistId)
      return {
        isRequesting: false,
        playlists: [
          ...state.playlists.slice(0, deleteIndex),
          ...state.playlists.slice(deleteIndex + 1)
        ]
      }

    case 'RESET_PLAYLIST_VIDEOS_SUCCESS':
      const playlist = state.playlists.find(playlist => playlist.id === action.playlistId);
      const playlistIndex = state.playlists.findIndex(p => p.id === playlist.id);
      debugger
      return {
        isRequesting: false,
        playlists: [
          ...state.playlists.slice(0, playlistIndex),
          {...playlist, completed_videos: 0},
          ...state.playlists.slice(playlistIndex + 1)
        ]
      }

    case 'REQUEST_FAILURE':
      return {
        isRequesting: false,
        errors: action.errors
      }

    default:
      return state;
  }
}
