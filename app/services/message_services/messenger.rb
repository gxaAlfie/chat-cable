module MessageServices
  class Messenger
    def initialize(params)
      @params = params
    end

    def call
      @message = Message.create(message_params)
      broadcast_to_channel(@message)
    end

    private

    def broadcast_to_channel(message)
      ActionCable.server.broadcast('MessagesChannel', {
        message: message.as_json(include: [:user])
      })
    end

    def message_params
      {
        channel_id: @params['channel_id'],
        content: @params['message'],
        user_id: @params['user_id']
      }
    end
  end
end
