import * as ProjectApi from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProjects = projects => {
  return {
    type: RECEIVE_PROJECTS,
    projects,
  };
};

const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project: project,
  };
};

const removeProject = project => {
  return {
    type: REMOVE_PROJECT,
    projectId: project.id,
  };
};

export const fetchProjects = () => dispatch => {
  return ProjectApi.fetchProjects()
    .then((projects) => dispatch(receiveProjects(projects)));
};

export const fetchProject = (id) => dispatch => {
  return ProjectApi.fetchProject(id)
    .then((project) => dispatch(receiveProject(project)));
};

export const createProject = (project) => dispatch => {
  return ProjectApi.createProject(project)
    .then((project) => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
  return ProjectApi.updateProject(project)
    .then((project) => dispatch(receiveProject(project)));
};

export const deleteProject = (id) => dispatch => {
  return ProjectApi.deleteProject(id)
    .then((project) => dispatch(removeProject(project)));
};
