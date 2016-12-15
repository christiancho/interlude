class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.get_by_username(params[:user_id])
  end

  def show
    @playlist = Playlist.include_tracks_by_id(params[:id])
  end

  def create
    user = User.find_by(username: params[:playlist][:username])
    @playlist = Playlist.new(name: params[:playlist][:name], user_id: user.id)
    if @playlist.save
      @playlist = Playlist.include_tracks_by_id(@playlist.id)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      @playlist = Playlist.include_tracks_by_id(@playlist.id)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: @playlist
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :username, :image)
  end

end
