class ChannelsController < ApplicationController
  before_action :set_channel

  def show
    @messages = @channel.messages.includes(:user, :channel)
      .order(:created_at).as_json(include: [:user])
  end

  private

  def set_channel
    @channel = Channel.find_by(id: params[:id]) || Channel.first
  end
end
