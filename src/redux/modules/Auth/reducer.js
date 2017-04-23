const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {
    id: "",
    username: ""
  }
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      };

    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      };

    default:
      return state;
  }
}
