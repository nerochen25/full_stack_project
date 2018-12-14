class Project < ApplicationRecord
  validates :title, :description, :creator_id, :category_id, :funding_goal, :due_date, presence: true

  belongs_to :creator
  belongs_to :category
  has_many :backers
  has_many :rewards, dependent: :destroy
  has_many :pledges

  def backer_count
    self.pledges.count
  end
end
