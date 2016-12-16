class Api::SearchesController < ApplicationController

  def index
    search_query = params[:search_query]
    @artists = Artist.get_top_three(search_query)
    @albums = Album.get_top_three(search_query)
    @songs = Song.get_top_three(search_query)
    @users = User.get_top_three(search_query)
    @playlists = Playlist.get_top_three(search_query)
  end

end
