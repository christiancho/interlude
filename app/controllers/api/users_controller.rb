class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      @user.ensure_session_token(request.env["HTTP_USER_AGENT"])
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :email, :image_url)
  end

end
