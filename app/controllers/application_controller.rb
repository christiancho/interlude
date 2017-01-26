class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User
      .joins(:sessions)
      .where("session_token = ?", session[:session_token])
      .first
  end

  helper_method :current_user, :logged_in?

  def login!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
    new_geopoint = Geopoint.new(
      http_user_agent: request.env["HTTP_USER_AGENT"],
      ip_address: request.location.ip,
      metrocode: request.location.data["metrocode"],
      geo_lat: request.location.data["latitude"].to_f,
      geo_lng: request.location.data["longitude"].to_f
    )
    @current_user.geopoints.push(new_geopoint) if new_geopoint.is_valid?
    Session.find_by(session_token: session[:session_token])
  end

  def logout!
    current_user.sessions.where(session_token: session[:session_token]).destroy_all
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
