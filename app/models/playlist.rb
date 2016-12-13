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
  validates_uniqueness_of :name, scope: :user_id

  belongs_to :user
  has_many :playlist_listings
  has_many :songs, through: :playlist_listings
  has_many :albums, through: :songs
  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path('missing_playlist.jpg')
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.include_tracks_by_id(playlist_id)
    Playlist
      .includes(:playlist_listings, :songs, :user)
      .find(playlist_id)
  end

  def self.get_by_username(username)
    Playlist
      .includes(:songs, :albums)
      .joins("JOIN users ON users.id = playlists.user_id")
      .where("users.username = ?", username)
  end

  def image_url
    image.url
  end

end
