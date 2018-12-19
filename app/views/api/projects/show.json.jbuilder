json.project do
  json.partial! 'api/projects/project', project: @project
  if @project.photo.attached?
    json.photoUrl url_for(@project.photo)
  end
end

json.user do
  json.partial! 'api/users/user', user: @project.creator
end

# json.photoUrls @project.photos.map { |file| url_for(file) }

json.category do
  json.partial! 'api/categories/category', category: @project.category
end
