import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Pages from 'pages'
import './App.css'

const App = ({ isAuth = false }) => {
  return (
    <BrowserRouter>
      {isAuth ? (
        <Switch>
          <Route path={'/'} exact component={Pages.Reports} />
        </Switch>
      ) : (
        <Pages.Login />
      )}
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth
})

export default connect(mapStateToProps, {})(App)
