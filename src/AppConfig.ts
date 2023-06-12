//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const AppConfigCore = {
  v: '1.2', // version
  developerMode: true,
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const AppConfigProject = {
  name: 'AbbTemplate',
  defaultHtmlTitle: 'AbbTemplate',
  authRoles: [
    'guest',
    'admin',
    'developer',
  ],
  authRolesSuperusers: [
    'admin',
    'developer',
  ],
};

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const AppConfig = {
  ...AppConfigCore,
  ...AppConfigProject,
};
export default AppConfig;
