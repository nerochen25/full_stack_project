json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
      if project.photo.attached?
        json.photo url_for(project.photo)
      end
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

json.categories do
  @projects.map(&:category).each do |category|
    json.set! category.id do
      json.partial! 'api/categories/category', category: category
    end
  end
end
