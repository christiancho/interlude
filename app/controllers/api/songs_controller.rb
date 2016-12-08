class Api::SongsController < ApplicationController

  def show
    @song = Song.includes(:album).includes(:artist).find(params[:id])
  end

end
