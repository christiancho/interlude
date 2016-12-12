# == Schema Information
#
# Table name: artists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Artist < ApplicationRecord

  validates :name, presence: true, uniqueness: true
  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path('missing_artist.png')
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :albums
  has_many :songs, through: :albums

  def self.include_albums_by_id(artist_id)
    Artist.includes(:albums).find(artist_id)
  end

  def image_url
    image.url
  end

end
