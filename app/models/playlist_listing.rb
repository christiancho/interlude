# == Schema Information
#
# Table name: playlist_listings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistListing < ApplicationRecord

  validates :playlist, :song, presence: true

  belongs_to :playlist
  belongs_to :song

  def self.include_song_and_playlist_info_by_id(listing_id)
    PlaylistListing.includes(:playlist, :song).find(listing_id)
  end

end
