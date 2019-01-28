class Project < ApplicationRecord
  # added creator, and category
  validates :title, :description, :creator_id, :category_id, :funding_goal, :due_date, presence: true
  # validate :ensure_photo

  belongs_to :creator,
    class_name: 'User',
    foreign_key: :creator_id

  has_one_attached :photo

  belongs_to :category,
    class_name: 'Category',
    foreign_key: :category_id
  
  has_many :pledges, dependent: :destroy,
    class_name: 'Pledge',
    foreign_key: :project_id
  
  has_many :backers,
    through: :pledges,
    source: :supporter


  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Must be attached"
    end
  end

  #
  # has_many :rewards, dependent: :destroy
  #   class_name: 'Reward',
  #   foreign_key: :project_id

  def backer_count
    self.pledges.count
  end
end
