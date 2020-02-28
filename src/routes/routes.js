const routes = {
  projectDetail: ({ projectId }) => `${routes.projects()}/${projectId}`,
  projects: () => "/projects",
  contact: () => "/contact",
  home: () => "/"
};

export default routes;
