# == Schema Information
#
# Table name: sessions
#
#  id              :integer          not null, primary key
#  session_token   :string           not null
#  user_id         :integer          not null
#  http_user_agent :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  ip_address      :string
#  metro_code      :string
#  geo_lat         :float
#  geo_lng         :float
#

class Session < ActiveRecord::Base

  validates :user_id, :session_token, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

end
