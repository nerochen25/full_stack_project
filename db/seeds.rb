# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

demo1 = User.create!(
  username: 'Demo User',
  email_address: 'username@gmail.com',
  password: 'password'
)

demo2 = User.create!(
  username: 'Demo User2',
  email_address: 'username2@gmail.com',
  password: 'password'
)

demo3 = User.create!(
  username: 'Demo User3',
  email_address: 'username3@gmail.com',
  password: 'password'
)

project1 = Project.create!(
  title: 'Key Radar',
  description: 'Help bad-memory people find their keys with advanced radar technology',
  creator_id: demo1.id,
  category_id: 1,
  funding_goal: 50000,
  due_date: Date.new,
  reward_offered: true
)
