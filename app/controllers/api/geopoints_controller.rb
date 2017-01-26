class Api::GeopointsController < ApplicationController

  def index
    @geopoints = Geopoint.all
  end

  def show
    @geopoint = Geopoint.find(params[:id])
    if @geopoint
      render :show
    else
      render json: ["No geopoint information found."], status: 404
    end
  end

end
