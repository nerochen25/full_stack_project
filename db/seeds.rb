# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.delete_all
Project.delete_all
Category.delete_all

art = Category.create!(
  name: "Art",
)

comics = Category.create!(
  name: "Comics",
)

crafts = Category.create!(
  name: "Crafts",
)

dance = Category.create!(
  name: "Dance",
)

design = Category.create!(
  name: "Design",
)

fashion = Category.create!(
  name: "Fashion",
)

film_video = Category.create!(
  name: "Film & Video",
)

food = Category.create!(
  name: "Food",
)

games = Category.create!(
  name: "Games",
)

journalism = Category.create!(
  name: "Journalism",
)

music = Category.create!(
  name: "Music",
)

photography = Category.create!(
  name: "Photography",
)

publishing = Category.create!(
  name: "Publishing",
)

technology = Category.create!(
  name: "Technology",
)

theater = Category.create!(
  name: "Theater",
)

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
  title: 'Loopio & Loopio Sport | Never lose your keys or phone again',
  description: 'Never lose your keys or phone again, or anything the Loopio is attached to. Designed to be the best bluetooth tracker ever.',
  creator_id: demo1.id,
  category_id: technology.id,
  funding_goal: 50000,
  due_date: Time.new,
  reward_offered: true
)
project1Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/key_tracker.png")
project1.photo.attach(io: project1Photo, filename: "key_tracker.png")

project2 = Project.create!(
  title: 'Morph Bottle - A Flexible Storage Water Bottle for your EDC',
  description: 'Keep your valuables secure in our modular hydration bottle with a self-adjusting silicone storage compartment',
  creator_id: demo2.id,
  category_id: food.id,
  funding_goal: 40000,
  due_date: Time.new,
  reward_offered: true
)

project2Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/c227bbc92065fe96b17e6d9d4ad2e625_original.jpg")
project2.photo.attach(io: project2Photo, filename: "water_bottle.png")


project3 = Project.create!(
  title: 'Archon : The invisible wireless charger',
  description: 'A long-distance wireless charger designed to charge through desks, tabletops, and thick cases.',
  creator_id: demo3.id,
  category_id: technology.id,
  funding_goal: 100000,
  due_date: Time.new,
  reward_offered: true
)

project3Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/3d0f84714aad7b03ed68d24ae0dbe584_original.jpg")
project3.photo.attach(io: project3Photo, filename: "wireless_charger.png")


project4 = Project.create!(
  title: 'PROJECT OMMI: A Sci-Fi Thriller Feature Film',
  description: 'Set in a future Bangladesh, a hacker creates an AI child to save real children.',
  creator_id: demo1.id,
  category_id: technology.id,
  funding_goal: 100000,
  due_date: Time.new,
  reward_offered: true
)
project4Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/4573e6fddeaab133feffc79fac62227f_original.png")
project4.photo.attach(io: project4Photo, filename: "project_ommi.png")
