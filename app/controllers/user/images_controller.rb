class User::ImagesController < ApplicationController
  def show
    user = User.find(params[:id])
    redirect_to rails_blob_url(user.image)
  end
end
