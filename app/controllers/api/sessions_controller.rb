class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: { message: ["Invalid credentials"] }, status: 401
    else
      login!(@user)
      render template: 'api/users/show'
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: { message: ["No user to log out"] }, status: 404
    end
  end

end
