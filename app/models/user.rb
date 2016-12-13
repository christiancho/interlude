# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  f_name             :string           not null
#  l_name             :string           not null
#  password_digest    :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord

  validates :username, :email, presence: true, uniqueness: true
  validates :f_name, :l_name, presence: true
  validates_format_of :username, with: /[A-Za-z0-9]+/
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_confirmation_of :email
  validates_format_of :f_name, :l_name, with: /[a-z]+/i
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 8, allow_nil: true }

  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path("missing_avatar.png")

  has_many :playlists
  has_many :sessions
  has_many :playlist_follows
  has_many :subscriptions,
    through: :playlist_follows,
    source: :playlist

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.include_playlists_and_subscriptions(user_id)
    User.includes(:playlists, :subscriptions).find(user_id)
  end

  def reset_session_token!
    self.sessions.create(session_token: User.generate_session_token)
    self.sessions.last.session_token
  end

  def ensure_session_token(http_user_agent)
    self.sessions.create(
      session_token: User.generate_session_token,
      http_user_agent: http_user_agent
    )
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def image_url
    image.url
  end

  def to_param
    username
  end

end
