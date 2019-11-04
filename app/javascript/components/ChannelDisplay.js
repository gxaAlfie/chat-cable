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
      this.App.messageSubscription.perform('send_message', { message, channel_id: this.props.channel.id, user_id: this.props.user.id })
    }
  }

  newMessageReceived(data) {
    let { messages } = this.state
    messages.push(data.message)

    this.setState({ messages }, () => {
      this.updateBadgeCount()
      this.scrollToBottom()
    })
  }

  updateBadgeCount() {
    let $channelElement = $('.list-group-item:not(.dropdown-toggle)')

    if ($channelElement.is('.active')) {
      $channelElement = $channelElement.filter('.active')
    } else {
      $channelElement = $channelElement.first()
    }
    $channelElement.find('span.badge').html(this.state.messages.length).removeClass('d-none')
  }

  scrollToBottom() {
    const topCoordOfLastMessage = $('.media.message').last().get(0).offsetTop
    $('.chat-area').animate({ scrollTop: topCoordOfLastMessage }, 1000)
  }

  render () {
    return (
      <React.Fragment>
        <MessageChannel app={this.App} newMessageReceived={this.newMessageReceived.bind(this)}/>
        <ChatArea messages={this.state.messages}/>
        <div className='input-group chat-input'>
          <input type='text' className='form-control' placeholder='Enter Message...' onKeyDown={this.sendMessage.bind(this)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default ChannelDisplay
