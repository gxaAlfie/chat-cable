class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from('MessagesChannel')
  end

  def send_message(data)
    ActionCable.server.broadcast('MessagesChannel', { message: data['message'] })
  end
end
