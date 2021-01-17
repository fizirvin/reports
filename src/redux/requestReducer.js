import * as actions from './actions'
const initialState = { message: '', loading: false }

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.FAILURE_REQUEST:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case actions.SUCCESS_REQUEST:
      return {
        ...state,
        message: '',
        loading: false
      }
    case actions.CLEAR_MESSAGE:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default requestReducer
