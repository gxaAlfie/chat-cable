class MessagesController < ApplicationController
  def index
    @messages = channel.messages.order(:created_at).as_json(include: [:user])
  end

  private

  def channel
    params[:channel_id].present? ? Channel.find(params[:channel_id]) : Channel.first
  end
end
