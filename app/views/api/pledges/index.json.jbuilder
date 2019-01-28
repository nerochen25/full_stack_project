
json.pledges do
    @pledges.each do |pledge|
      json.set! pledge.id do
        json.partial! 'api/pledges/pledge', pledge: pledge
      end
    end
  end
  
  json.supporters do
    @pledges.map(&:supporter).each do |supporter|
      json.set! supporter.id do
        json.partial! 'api/users/user', user: supporter
      end
    end
  end
  
  json.projects do
    @pledges.map(&:project).each do |project|
      json.set! project.id do
        json.partial! 'api/projects/project', project: project
      end
    end
  end