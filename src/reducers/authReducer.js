export default (state = {
  errors: [],
  profile: {},
  isAuthenticated: false,
}, action) => {
  switch(action.type){
    case 'UPDATE_ERRORS':
      return Object.assign({}, state, { errors: action.errors });
    case 'USER_SIGNUP_SUCCESS':
      return Object.assign({}, state, {
        profile: action.profile,
        isAuthenticated: true
      });
    default:
      return state
  }
}
