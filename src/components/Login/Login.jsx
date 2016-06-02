import React from 'react'
import { Link } from 'react-router'

export default class Login extends React.Component{
  constructor() {
    super()
    this.state = {username: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let username = this.usernameInput.value,
        password = this.passwordInput.value

    event.preventDefault()

    this.setState({username: '', password: ''})
    this.props.login({username, password})
  }
  componentWillMount() {
    this.ensureNotLoggedIn(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.ensureNotLoggedIn(nextProps)
  }
  ensureNotLoggedIn(props) {
    const { isAuthenticated, replace, redirect } = props

    if (isAuthenticated) {
      console.log(redirect)

      replace(redirect)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='username'
              ref={(input) => this.usernameInput = input}
              placeholder='请输入用户名'
              required
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              ref={(input) => this.passwordInput = input}
              placeholder='请输入密码'
              required
            />
          </div>
          <button type='submit'>登陆</button>
        </form>
        <Link to='register'>register</Link>
      </div>
    )
  }
}
