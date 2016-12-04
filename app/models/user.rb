class User < ApplicationRecord

  validates :username, :email, presence: true, uniqueness: true
  validates :f_name, :l_name, presence: true
  validates_format_of :username, with: /[A-Za-z0-9]+/
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_format_of :f_name, :l_name, with: /[a-z]+/i
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 8, allow_nil: true }

  after_save :ensure_session_token

  has_many :sessions

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.sessions.create(session_token: User.generate_session_token)
    self.sessions.last.session_token
  end

  def ensure_session_token
    self.sessions.create(session_token: User.generate_session_token)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
