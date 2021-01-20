class UsersController < ApplicationController
  before_action :set_user

  def edit
  end

  def update
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
