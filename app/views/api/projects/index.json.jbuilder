json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
    end
  end
end

json.users do
  @projects.map(&:creator).each do |creator|
    json.set! creator.id do
      json.partial! 'api/users/user', user: creator
    end
  end
end
