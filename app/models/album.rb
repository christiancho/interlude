# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord

  validates :title, :artist, presence: true
  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path('missing/album.png')
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist

end
