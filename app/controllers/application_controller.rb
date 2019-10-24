class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_channels

  def set_channels
    @channels = Channel.with_message_count.order(:name)
  end
end
