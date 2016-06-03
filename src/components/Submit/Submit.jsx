import React from 'react'
import {Link} from 'react-router'

export default class Submit extends React.Component{
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let assignment = this.props.params.id,
        author = this.props.user.username,
        title = this.titleInput.value,
        content = this.contentInput.value,
        token = localStorage.getItem('token')

    event.preventDefault()

    if (token) {
      this.props.addHomework({assignment, author, title, content, token})
    }

    this.titleInput.value = ''
    this.contentInput.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='title'
              ref={(input) => this.titleInput = input}
              placeholder='标题'
              required
            />
          </div>
          <div>
            <textarea
              type='text'
              name='content'
              ref={(input) => this.contentInput = input}
              placeholder='具体要求'
              required
            />
          </div>
          <button type='submit'>发布</button>
        </form>
      </div>
    )
  }
}

export default Submit
