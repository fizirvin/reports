import * as actions from './actions'
const initialState = {
  id: '',
  name: '',
  token: '',
  isAuth: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        id: action.payload.userId,
        name: action.payload.name,
        token: action.payload.token,
        isAuth: true
      }
    case actions.USER_LOGOUT:
      return {
        ...state,
        id: '',
        name: '',
        token: '',
        isAuth: false
      }
    default:
      return state
  }
}

export default userReducer
