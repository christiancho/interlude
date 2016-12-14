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

  def self.get_id_by_user_id_and_playlist_id(user_id, playlist_id)
    PlaylistFollow.find_by(user_id: user_id, playlist_id: playlist_id).id
  end

  def self.attach_playlist_by_id(id)
    PlaylistFollow.includes(:playlist).find(id)
  end

end
