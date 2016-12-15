class Api::PlaylistListingsController < ApplicationController

  def create
    @playlist_listing = PlaylistListing.new(playlist_listing_params)
    if @playlist_listing.save!
      @playlist_listing = PlaylistListing.include_song_and_playlist_info_by_id(@playlist_listing.id)
      render :show
    else
      render json: playlist_listing.errors, status: 422
    end
  end

  def destroy
    @playlist_listing = PlaylistListing.find(params[:id])
    @playlist = Playlist.find(@playlist_listing.playlist_id)
    @playlist_listing.destroy
    render :show
  end

  private

  def playlist_listing_params
    params.require(:playlist_listing).permit(:song_id, :playlist_id)
  end

end
