class Category < ApplicationRecord
  validates :name, presence: true

  has_many :projects, dependent: :destroy,
    class_name: 'Project',
    foreign_key: :category_id
end
