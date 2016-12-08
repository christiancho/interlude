class Api::AlbumsController < ApplicationController

  def show
    sleep 1 # mimic latency
    @album = Album.find(params[:id])
  end

end
