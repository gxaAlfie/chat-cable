import React from 'react'
import ActionCable from 'actioncable'

class MessageChannel extends React.Component {
  componentDidMount() {
    this.props.app.messageSubscription = this.props.app.cable.subscriptions.create(
      { channel: 'MessagesChannel' },
      {
        received: (data) => { this.props.newMessageReceived(data) }
      }
    )
  }

  render () {
    return null
  }
}

export default MessageChannel
