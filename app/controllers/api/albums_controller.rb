class Api::AlbumsController < ApplicationController

  def show
    @album = Album.includes(:songs).find(params[:id])
  end

end
