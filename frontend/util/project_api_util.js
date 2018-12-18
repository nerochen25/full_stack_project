export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects',
  });
};


export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`,
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    processData: false,
    contentType: false,
    data: project,
  });
};

export const updateProject = (project) => {
  let id = project.get('project[id]');
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${id}`,
    processData: false,
    contentType: false,
    data: project,
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`,
  });
};
