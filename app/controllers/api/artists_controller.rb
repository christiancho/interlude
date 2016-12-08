class Api::ArtistsController < ApplicationController

  def index
    sleep 1 # simulate latency
    @artists = Artist.order(:name)
  end

  def show
    sleep 1 # simulate latency
    @artist = Artist.includes(:albums).find(params[:id])
  end

end
