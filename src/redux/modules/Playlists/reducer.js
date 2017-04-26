const initialState = {
  playlists: [
    {
      title: "",
      playlist_id: "",
      description: "",
      thumbnail_url: "",
      user_id: ""
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'USER_PLAYLISTS_REQUEST':
      return {}

    case 'USER_PLAYLISTS_SUCCESS':
      return {}

    case 'USER_PLAYLISTS_FAILURE':
      return {};

    case 'PLAYLIST_REQUEST':
      return {}

    case 'PLAYLIST_SUCCESS':
      return {}

    case 'PLAYLIST_FAILURE':
      return {};

    case 'ADD_PLAYLIST_REQUEST':
      return {}

    case 'ADD_PLAYLIST_SUCCESS':
      return {}

    case 'ADD_PLAYLIST_FAILURE':
      return {};

    case 'DELETE_PLAYLIST_REQUEST':
      return {}

    case 'DELETE_PLAYLIST_SUCCESS':
      return {}

    case 'DELETE_PLAYLIST_FAILURE':
      return {};

    case 'REFRESH_PLAYLIST_REQUEST':
      return {}

    case 'REFRESH_PLAYLIST_SUCCESS':
      return {}

    case 'REFRESH_PLAYLIST_FAILURE':
      return {};


    default:
      return state;
  }
}
