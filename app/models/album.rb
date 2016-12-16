# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  year               :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Album < ApplicationRecord

  validates :title, :artist, presence: true
  has_attached_file :image,
    default_url: ActionController::Base.helpers.asset_path('missing_album.png')
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :songs,
    dependent: :delete_all

  def self.include_songs_by_id(album_id)
    Album.includes(:artist).includes(:songs).find(album_id)
  end

  def self.get_top_three(search_query)
    Album.includes(:artist).where('LOWER(title) ~ ?', search_query.downcase).limit(3)
  end

  def image_url
    image.url
  end

end
