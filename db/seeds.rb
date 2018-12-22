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

Awaken_Realms = User.create!(
  username: 'Awaken_Realms',
  email_address: 'Awaken_Realms@gmail.com',
  password: 'password'
)

Lucy_Saunders = User.create!(
  username: 'Lucy_Saunders',
  email_address: 'Lucy_Saunders@gmail.com',
  password: 'password'
)

Alana_Youssefian = User.create!(
  username: 'Alana_Youssefian',
  email_address: 'Alana_Youssefian@gmail.com',
  password: 'password'
)

TinyMOS = User.create!(
  username: 'TinyMOS',
  email_address: 'TinyMOS@gmail.com',
  password: 'password'
)

Supply_Unica = User.create!(
  username: 'Supply_Unica',
  email_address: 'Supply_Unica@gmail.com',
  password: 'password'
)

Elea_Chang = User.create!(
  username: 'Elea_Chang',
  email_address: 'Elea_Chang@gmail.com',
  password: 'password'
)

Pop_Culture_Hero_Coalition = User.create!(
  username: 'Pop_Culture_Hero_Coalition',
  email_address: 'Pop_Culture_Hero_Coalition@gmail.com',
  password: 'password'
)

Karina_y_Paola = User.create!(
  username: 'Karina_y_Paola',
  email_address: 'Karina_y_Paola@gmail.com',
  password: 'password'
)

Ana_Gomez = User.create!(
  username: 'Ana_Gomez',
  email_address: 'Ana_Gomez@gmail.com',
  password: 'password'
)

Sam_Crawford = User.create!(
  username: 'Sam_Crawford',
  email_address: 'Sam_Crawford@gmail.com',
  password: 'password'
)

Natalia_Zoila = User.create!(
  username: 'Natalia_Zoila',
  email_address: 'Natalia_Zoila@gmail.com',
  password: 'password'
)

itten = User.create!(
  username: 'itten',
  email_address: 'itten@gmail.com',
  password: 'password'
)

Klint_Bro = User.create!(
  username: 'Klint_Bro',
  email_address: 'Klint_Bro@gmail.com',
  password: 'password'
)

HAPE_Collective = User.create!(
  username: 'HAPE_Collective',
  email_address: 'HAPE_Collective@gmail.com',
  password: 'password'
)

Jesse_Konig = User.create!(
  username: 'Jesse_Konig',
  email_address: 'Jesse_Konig@gmail.com',
  password: 'password'
)

Wolfgang_Mustain = User.create!(
  username: 'Wolfgang_Mustain',
  email_address: 'Wolfgang_Mustain@gmail.com',
  password: 'password'
)

project20 = Project.create!(
  title: 'Hadron Gamma Ray Watch',
  description: 'After many years of photographing a wide array of subjects, I was struck by the graphic beauty of the Hadron Collider ,the worlds largest and most powerful particle collider. This inspired me to design a watch devoted to its beauty .THE HARDRON GAMMA RAY.',
  creator_id: Wolfgang_Mustain.id,
  category_id: fashion.id,
  funding_goal: 100080,
  due_date: Time.new,
  reward_offered: true
)

project20Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/watch.jpg")
project20.photo.attach(io: project20Photo, filename: "watch.png")

project19 = Project.create!(
  title: 'Help Re-Launch D.C.s Best Food Truck!',
  description: 'Swizzler needs help bringing Real American Eats (and grass-fed beef burger deliciousness) to Washington, D.C.!',
  creator_id: Jesse_Konig.id,
  category_id: food.id,
  funding_goal: 80000,
  due_date: Time.new,
  reward_offered: true
)

project19Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/hotdog.jpg")
project19.photo.attach(io: project19Photo, filename: "hotdog.png")

project11 = Project.create!(
  title: 'SuperKids! Mental Health Support Coloring Book',
  description: 'An interactive book for hospitalized children, providing mental health help for fear, depression, anxiety, anger, and physical pain.',
  creator_id: Pop_Culture_Hero_Coalition.id,
  category_id: comics.id,
  funding_goal: 89000,
  due_date: Time.new,
  reward_offered: true
)

project11Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/superkids.jpg")
project11.photo.attach(io: project11Photo, filename: "superkids.png")


project12 = Project.create!(
  title: 'Mexplory: The alternative map of Mexico City',
  description: 'Mostraremos la cara auténtica de la ciudad, beneficiando a los negocios locales // We’ll show the real Mx City while helping the locals',
  creator_id: Karina_y_Paola.id,
  category_id: journalism.id,
  funding_goal: 50000,
  due_date: Time.new,
  reward_offered: true
)

project12Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Mexplory.jpg")
project12.photo.attach(io: project12Photo, filename: "Mexplory.png")

project2 = Project.create!(
  title: 'Morph Bottle - A Flexible Storage Water Bottle for your EDC',
  description: 'Keep your valuables secure in our modular hydration bottle with a self-adjusting silicone storage compartment',
  creator_id: demo2.id,
  category_id: food.id,
  funding_goal: 43290,
  due_date: Time.new,
  reward_offered: true
)

project2Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/c227bbc92065fe96b17e6d9d4ad2e625_original.jpg")
project2.photo.attach(io: project2Photo, filename: "water_bottle.png")

project1 = Project.create!(
  title: 'Loopio & Loopio Sport | Never lose your keys or phone again',
  description: 'Never lose your keys or phone again, or anything the Loopio is attached to. Designed to be the best bluetooth tracker ever.',
  creator_id: demo1.id,
  category_id: technology.id,
  funding_goal: 45395,
  due_date: Time.new,
  reward_offered: true
)
project1Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/key_tracker.png")
project1.photo.attach(io: project1Photo, filename: "key_tracker.png")

project17 = Project.create!(
  title: 'A bar with home-brewed beverages by Klint & Bro',
  description: 'The opening of our bar with a focus on fermented beverages in a slightly forgotten neighborhood in Copenhagen, Nørrebro.',
  creator_id: Klint_Bro.id,
  category_id: food.id,
  funding_goal: 267000,
  due_date: Time.new,
  reward_offered: true
)

project17Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/A+bar+with+home-brewed+beverages+by+Klint+%26+Bro.jpg")
project17.photo.attach(io: project17Photo, filename: "bar_bro.png")



project3 = Project.create!(
  title: 'Archon : The invisible wireless charger',
  description: 'A long-distance wireless charger designed to charge through desks, tabletops, and thick cases.',
  creator_id: demo3.id,
  category_id: technology.id,
  funding_goal: 90042,
  due_date: Time.new,
  reward_offered: true
)

project3Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/3d0f84714aad7b03ed68d24ae0dbe584_original.jpg")
project3.photo.attach(io: project3Photo, filename: "wireless_charger.png")


project5 = Project.create!(
  title: 'Tainted Grail: The Fall of Avalon',
  description: 'Adventure, survival co-op Board Game set in unique grim world inspired by Arthurian Legends. Unforgettable experience for 1-4 players.',
  creator_id: Awaken_Realms.id,
  category_id: games.id,
  funding_goal: 41233,
  due_date: Time.new,
  reward_offered: true
)
project5Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Tainted_Grail.jpg")
project5.photo.attach(io: project5Photo, filename: "tainted.png")

project6 = Project.create!(
  title: 'Flourish Vol. 2: A Travel & Lifestyle Magazine',
  description: 'Vol. 2 - The British Isles is all about how we thrive in a particular place, community, or culture, and flourishing in the outdoors.',
  creator_id: Lucy_Saunders.id,
  category_id: journalism.id,
  funding_goal: 89063,
  due_date: Time.new,
  reward_offered: true
)
project6Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Flourish+Vol.+2-+A+Travel+%26+Lifestyle+Magazine.jpg")
project6.photo.attach(io: project6Photo, filename: "flourish_travel.png")

project7 = Project.create!(
  title: 'Album recording: Alana Youssefian and Le Bienaimé',
  description: 'Brillance Indéniable: Virtuoso Violin in the Court of Louis XV. The album will feature beautiful, never-before-recorded works for baroque violin and ensemble by Louis-Gabriel Guillemain, the star violinist of King Louis XVs court.',
  creator_id: Alana_Youssefian.id,
  category_id: art.id,
  funding_goal: 708609,
  due_date: Time.new,
  reward_offered: true
)
project7Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Album+recording-+Alana+Youssefian+and+Le+Bienaime%CC%81.jpg")
project7.photo.attach(io: project7Photo, filename: "Bienaimé.png")

project8 = Project.create!(
  title: 'NANO1: Worlds Smallest Astronomy Camera - Just Got Smaller',
  description: 'The Worlds Smallest Astronomy Camera - just got smaller. Capture Milky Way, Northern Lights and more in 4K, on your next epic travel!.',
  creator_id: TinyMOS.id,
  category_id: photography.id,
  funding_goal: 65678,
  due_date: Time.new,
  reward_offered: true
)
project8Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/NANO1-+Worlds+Smallest+Astronomy+Camera+-+Just+Got+Smaller+.jpg")
project8.photo.attach(io: project8Photo, filename: "NANO1.png")

project9 = Project.create!(
  title: 'UNICA Mag: Ceramics | Sharing Food',
  description: 'A new publication dedicated to sharing stories about how ceramics influence the world around us.',
  creator_id: Supply_Unica.id,
  category_id: publishing.id,
  funding_goal: 65679,
  due_date: Time.new,
  reward_offered: true
)
project9Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/UNICA.jpg")
project9.photo.attach(io: project9Photo, filename: "unica.png")

project10 = Project.create!(
  title: 'Disabled And Here: a photo series',
  description: 'A portrait series and stock photo project highlighting disabled people of color around the Pacific Northwest.',
  creator_id: Elea_Chang.id,
  category_id: crafts.id,
  funding_goal: 656710,
  due_date: Time.new,
  reward_offered: true
)

project10Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/diabled.jpg")
project10.photo.attach(io: project10Photo, filename: "disabled.png")


project13 = Project.create!(
  title: 'LOculto - Bringing Spanish food to Brockley, London SE4',
  description: 'Great local support has encouraged us to open our 2nd site, LOculto Restaurant & Wine Bar - join us and be part of our new adventure',
  creator_id: Ana_Gomez.id,
  category_id: food.id,
  funding_goal: 180900,
  due_date: Time.new,
  reward_offered: true
)

project13Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/LOculto.jpg")
project13.photo.attach(io: project13Photo, filename: "LOculto.png")

project14 = Project.create!(
  title: 'La Medea: the soundtrack recording!',
  description: 'Help Jason & the Argonauts make a soundtrack record of the genre-bending live film La Medea.',
  creator_id: Sam_Crawford.id,
  category_id: music.id,
  funding_goal: 1000000,
  due_date: Time.new,
  reward_offered: true
)

project14Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/La+Medea.jpeg")
project14.photo.attach(io: project14Photo, filename: "lamedea.png")

project15 = Project.create!(
  title: 'Limbo',
  description: 'Limbo es un cortometraje sobre Eva, una madre que vive con el pesar de no poder encontrar a su hija desaparecida.',
  creator_id: Natalia_Zoila.id,
  category_id: design.id,
  funding_goal: 40900,
  due_date: Time.new,
  reward_offered: true
)

project15Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/limbo.jpeg")
project15.photo.attach(io: project15Photo, filename: "limbo.png")

project16 = Project.create!(
  title: 'Stonehenge and the Sun',
  description: 'A new gaming experiment which challenges and expands the scope of tabletop games.',
  creator_id: itten.id,
  category_id: games.id,
  funding_goal: 78000,
  due_date: Time.new,
  reward_offered: true
)

project16Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Stonehenge+and+the+Sun.jpg")
project16.photo.attach(io: project16Photo, filename: "Stonehenge.png")


project18 = Project.create!(
  title: 'Pulo NDJs debut album: Desert to Douala (Wonderwheel Rec)',
  description: 'Pulo NDJ is an encounter between talented artists from Chad & Cameroon, globe-trotting Nickodemus and HAPE Collectives own DJ Buosis',
  creator_id: HAPE_Collective.id,
  category_id: music.id,
  funding_goal: 15000,
  due_date: Time.new,
  reward_offered: true
)

project18Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/Pulo.jpg")
project18.photo.attach(io: project18Photo, filename: "pulo.png")


project4 = Project.create!(
  title: 'PROJECT OMMI: A Sci-Fi Thriller Feature Film',
  description: 'Set in a future Bangladesh, a hacker creates an AI child to save real children.',
  creator_id: demo1.id,
  category_id: technology.id,
  funding_goal: 87912,
  due_date: Time.new,
  reward_offered: true
)
project4Photo = open("https://s3-us-west-1.amazonaws.com/fileupload-wearestarters-dev/4573e6fddeaab133feffc79fac62227f_original.png")
project4.photo.attach(io: project4Photo, filename: "project_ommi.png")
