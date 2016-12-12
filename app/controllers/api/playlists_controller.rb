class Api::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.includes(:playlist_listings, :songs).find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      @playlist = Playlist.includes(:playlist_listings, :songs, :user).find(@playlist.id)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def update
    @playlist = Playlist.includes(:playlist_listings, :songs, :user).find(params[:id])
    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def destroy
    @playlist = Playlist.includes(:playlist_listings, :songs, :user).find(params[:id])
    @playlist.destroy
    render json: @playlist
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end

end
