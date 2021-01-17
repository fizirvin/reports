import * as actions from 'redux/actions'
import { fetchItems } from 'services'
import loginQuery from './queries'

export const loginAction = (input) => async (dispatch) => {
  dispatch({ type: actions.REQUEST_REQUEST })
  loginQuery.variables = { name: input.name, password: input.password }
  const { status, data } = await fetchItems(loginQuery)
  if (!status) {
    dispatch({ type: actions.FAILURE_REQUEST, payload: data })
    return { isLogin: false }
  } else {
    const { login } = data
    dispatch({ type: actions.SUCCESS_REQUEST })
    dispatch({ type: actions.USER_LOGIN, payload: login })
    console.log(login)
    return { isLogin: true, login }
  }
}
