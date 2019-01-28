class User < ApplicationRecord
  validates :password_digest, :session_token, :email_address, presence: true
  validates :email_address, uniqueness: true
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :project_proposals, dependent: :destroy,
    class_name: 'Project',
    foreign_key: :creator_id
  
  has_many :pledges, dependent: :destroy,
    class_name: 'Pledge',
    foreign_key: :supporter_id

  has_many :supporting_projects, dependent: :destroy,
    through: :pledges,
    source: :project


  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
