# == Schema Information
#
# Table name: geopoints
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  metrocode  :string
#  geo_lat    :float
#  geo_lng    :float
#  ip_address :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Geopoint < ApplicationRecord

  validates :user, presence: true

  belongs_to :user

  def coords
    { "lat": geo_lat, "lng": geo_lng }
  end

end
