import React from 'react'
import Message from './Message'

class ChatArea extends React.Component {
  renderMessages() {
    return this.props.messages.map((message, index) => <Message message={message} key={`message-${index}`}/>)
  }

  render() {
    return (
      <div className='chat-area'>
        {this.renderMessages()}
      </div>
    )
  }
}

export default ChatArea
