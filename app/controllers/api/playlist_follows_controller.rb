class Api::PlaylistFollowsController < ApplicationController

  def create
    @playlist_follow = PlaylistFollow.new(playlist_id: params[:playlist_follow][:playlist_id])
    @playlist_follow.user_id = User.find_by(username: params[:playlist_follow][:username]).id
    if @playlist_follow.save
      render :show
    else
      render json: @playlist_follow.errors, status: 422
    end
  end

  def destroy
    @playlist_follow = PlaylistFollow.find(params[:id])
    @playlist_follow.destroy
    render :show
  end

  private

  def playlist_follow_params
    params.require(:playlist_follow).require(:playlist_id, :username)
  end

end
