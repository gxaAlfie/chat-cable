class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from('MessagesChannel')
  end

  def send_message(data)
    MessageServices::Messenger.new(data).call
  end
end
