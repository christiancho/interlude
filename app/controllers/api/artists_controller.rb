class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.order(:name)
  end

  def show
    @artist = Artist.include_albums_by_id(params[:id])
  end

end
