class Api::AlbumsController < ApplicationController

  def show
    @album = Album.include_songs_by_id(params[:id])
  end

end
