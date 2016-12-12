class Api::PlaylistListingsController < ApplicationController

  def create
    playlist_listing = PlaylistListing.new(
      params[:song_id],
      params[:playlist_id]
    )
    if playlist_listing.save!
      @playlist = Playlist.find(params[:playlist_id])
      render 'playlist/show'
    else
      render json: playlist_listing.errors, status: 422
    end
  end

  def destroy
    @playlist_listing.find(params[:id])
    @playlist = Playlist.find(@playlist_listing.playlist_id)
    @playlist_listing.destroy
    render 'playlist/show'
  end

end
