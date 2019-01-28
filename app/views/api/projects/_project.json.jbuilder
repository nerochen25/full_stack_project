
json.extract! project, :id, :title,
  :description, :funding_goal, :category_id,
  :due_date, :creator_id, :reward_offered, :created_at

json.pledges project.pledges.ids
json.backers project.backers.ids


# if project.photo.attached?
#   json.photoUrl url_for(@project.photo)
# end
