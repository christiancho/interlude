class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
  end

end
