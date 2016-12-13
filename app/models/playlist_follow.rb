# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord

  validates :user, :playlist, presence: true
  validates_uniqueness_of :playlist, scope: :user

  belongs_to :user
  belongs_to :playlist

end
