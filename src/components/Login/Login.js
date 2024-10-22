import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',

    isErrorMsg: '',
    isError: false,
  }

  storeJwt = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })
    const {history} = this.props
    console.log(jwtToken)
    history.replace('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const obj = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(obj),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      const token = data.jwt_token
      this.storeJwt(token)
    } else {
      const error = data.error_msg
      this.setState({
        isError: true,
        isErrorMsg: error,
      })
    }
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeName = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, isError, isErrorMsg} = this.state

    const getTokens = Cookies.get('jwt_token')

    if (getTokens !== undefined) {
      ;<Redirect to="/" />
    }

    return (
      <div className="formContainer">
        <div className="cred">
          <h1 className="authori">
            Use the below authentication credentials for login to the website.
          </h1>
          <div className="align">
            <p>Username is : rahul</p>
            <p>Password is : rahul@2021</p>
          </div>
        </div>
        <div className="formCard">
          <div className="websiteLogin">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </div>
          <form onSubmit={this.onFormSubmit}>
            <div>
              <label htmlFor="name" className="labelUsername">
                USERNAME :
              </label>
              <input
                required
                type="text"
                id="name"
                placeholder="username"
                className="inputUsername"
                value={username}
                onChange={this.changeName}
              />
              <label htmlFor="password" className="labelUsername">
                PASSWORD :
              </label>
              <input
                required
                id="password"
                value={password}
                type="password"
                placeholder="password"
                className="inputUsername"
                onChange={this.changePassword}
              />
              <div className="btndiv">
                <button type="submit" className="btnLogin">
                  Login
                </button>
              </div>
              {isError && <p className="error">{isErrorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
