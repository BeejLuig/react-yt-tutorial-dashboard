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
      const index = state.playlists.indexOf(action.playlist)
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

    case 'REQUEST_FAILURE':
      return {
        isRequesting: false,
        errors: action.errors
      }

    default:
      return state;
  }
}
