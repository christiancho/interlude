# == Schema Information
#
# Table name: playlist_listings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistListing < ApplicationRecord

  validates :playlist, :song, presence: true

  belongs_to :playlist
  belongs_to :song

end
