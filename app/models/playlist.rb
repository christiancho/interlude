# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord

  validates :user, :name, presence: true
  validates_format_of :name, with: /\w/

  belongs_to :user
  has_many :playlist_listings
  has_many :songs, through: :playlist_listings

end
