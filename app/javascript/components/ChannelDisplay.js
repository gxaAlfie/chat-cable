import React from 'react'
import MessageChannel from './MessageChannel'
import ChatArea from './ChatArea'
import ActionCable from 'actioncable'

class ChannelDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: props.messages,
      message: 'doodle',
    }
    this.App || (this.App = {});
    this.App.cable = ActionCable.createConsumer();
  }

  sendMessage(event) {
    const enterEvent = event.type == 'keydown' && event.key == 'Enter'
    const sendButtonClickEvent = event.type == 'click' && $(event.target).is('button')
    if (enterEvent || sendButtonClickEvent) {
      const message = $("input[type='text']").val().trim()
      $("input[type='text']").val('')
      this.App.messageSubscription.perform('send_message', { message })
    }
  }

  newMessageReceived(data) {
    $('.chat-area').append(`<div>${data.message}</div>`)
  }

  render () {
    return (
      <React.Fragment>
        <MessageChannel app={this.App} newMessageReceived={this.newMessageReceived}/>
        <ChatArea messages={this.state.messages}/>
        <div className='input-group chat-input'>
          <input type='text' className='form-control' placeholder='Enter Message...' onKeyDown={this.sendMessage.bind(this)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default ChannelDisplay
