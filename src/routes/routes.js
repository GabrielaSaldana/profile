const routes = {
  projectDetail: ({ projectId }) => `${routes.projects()}/${projectId}`,
  projects: () => "/projects",
  home: () => "/"
};

export default routes;
