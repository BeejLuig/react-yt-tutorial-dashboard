const initialState = {
  videos: [
    {
      title: "",
      video_id: "",
      description: "",
      thumbnail_url: "",
      playlist_id: "",
      complete?: false
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'PLAYLIST_VIDEOS_REQUEST':
      return {}

    case 'PLAYLIST_VIDEOS_SUCCESS':
      return {}

    case 'PLAYLIST_VIDEOS_FAILURE':
      return {};

    default:
      return state;
  }
}
