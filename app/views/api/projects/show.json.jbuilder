json.project do
  json.partial! 'api/projects/project', project: @project
end

json.user do
  json.partial! 'api/users/user', user: @project.creator
end
