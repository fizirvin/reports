import React from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'components'
import { loginAction } from './loginActions'
import { LoginFormDiv, LoginDiv, LoginInput, LoginSubmit } from './styles'

const Login = ({ loginAction, setAuthHandler, request }) => {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { loading, message } = request

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        return
    }
  }

  const onSubmit = async () => {
    if (!name || !password) {
      return
    }
    const input = {
      name,
      password
    }
    const { islogin, login } = await loginAction(input)
    if (islogin) {
      setAuthHandler(login)
    }
  }

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {!loading && !message && (
        <LoginDiv>
          <LoginFormDiv>
            <div>
              <LoginInput
                type="text"
                value={name}
                placeholder={'Name'}
                name={'name'}
                onChange={onChangeHandler}
              ></LoginInput>
            </div>
            <div>
              <LoginInput
                type={'password'}
                value={password}
                placeholder={'Password'}
                name={'password'}
                onChange={onChangeHandler}
              ></LoginInput>
            </div>
            <div>
              <LoginSubmit onClick={onSubmit}>Login</LoginSubmit>
            </div>
          </LoginFormDiv>
        </LoginDiv>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  request: state.requestReducer
})

export default connect(mapStateToProps, { loginAction })(Login)
