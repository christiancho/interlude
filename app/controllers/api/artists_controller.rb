class Api::ArtistsController < ApplicationController

  def show
    sleep 2
    @artist = Artist.find(params[:id])
  end

end
