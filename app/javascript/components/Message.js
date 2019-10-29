import React from 'react'

class Message extends React.Component {
  render () {
    return (
      <div className='media message'>
        <img src={`/images/${this.props.message.user.id}`} className='mr-3' alt='...' width='50' height='50'/>
        <div className='media-body'>
          <b className='mt-0'>{this.props.message.user.username}</b>
          <p>{this.props.message.content}</p>
        </div>
      </div>
    )
  }
}

export default Message
