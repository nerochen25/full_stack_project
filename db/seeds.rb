# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Project.delete_all

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

demo4 = User.create!(
  username: 'Demo User4',
  email_address: 'username4@gmail.com',
  password: 'password'
)

project1 = Project.create!(
  title: 'Key Radar',
  description: 'Help people with bad-memory find their keys with advanced radar technology',
  creator_id: demo1.id,
  category_id: 1,
  funding_goal: 50000,
  due_date: Time.new,
  reward_offered: true
)

project2 = Project.create!(
  title: 'Water Bottle',
  description: 'Install with auto-heating system',
  creator_id: demo2.id,
  category_id: 2,
  funding_goal: 40000,
  due_date: Time.new,
  reward_offered: true
)

project3 = Project.create!(
  title: 'Wireless Charger',
  description: 'Developed with advanced charging technology',
  creator_id: demo3.id,
  category_id: 3,
  funding_goal: 100000,
  due_date: Time.new,
  reward_offered: true
)
