class Api::PlaylistListingsController < ApplicationController

  def create
    playlist_listing = PlaylistListing.new(playlist_listing_params)
    if playlist_listing.save!
      @playlist = Playlist.find(params[:playlist_listing][:playlist_id])
      render 'api/playlists/show'
    else
      render json: playlist_listing.errors, status: 422
    end
  end

  def destroy
    @playlist_listing.find(params[:id])
    @playlist = Playlist.find(@playlist_listing.playlist_id)
    @playlist_listing.destroy
    render 'api/playlists/show'
  end

  private

  def playlist_listing_params
    params.require(:playlist_listing).permit(:song_id, :playlist_id)
  end

end
