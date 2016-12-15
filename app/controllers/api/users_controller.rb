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
    if @user
      render :show
    else
      render json: ["No user found with username #{params[:id]}."], status: 404
    end
  end

  def update
    @user = User.find_by(username: current_user.username)
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :email, :image)
  end

end
