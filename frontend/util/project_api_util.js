export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects',
    error: (err) => console.log(err),
  });
};


export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`,
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project },
  });
};

export const updateProject = (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${project.id}`,
    data: { project },
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${id}`,
  });
};
