class Session < ActiveRecord::Base

  validates :user_id, :session_token, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

end
