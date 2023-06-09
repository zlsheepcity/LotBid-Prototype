//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Libraries
  import React from 'react'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Interfaces
  import {
    IObject as IO,
    IRoute, routeTemplate,
    IRoutes, routesTemplate,
  } from 'Interfaces'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Project
  import * as PAGES from 'Pages'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Sub components
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ routes
export const routes:IRoutes = {
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  CustomPageTemplate: {
    ...routeTemplate,
    path: '/template',
    title: 'TemplatePage',
    component: <div></div>,
  },
  CustomPageTemplateAllProps: {
    ...routeTemplate,
    path: '/template',
    title: 'TemplatePage',
    roleRequired: false,
    roleAccessList: [],
    component: <div></div>,
  },
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ APP CORE
  Index: {
    ...routeTemplate,
    path: '/',
    title: 'Index',
    roleRequired: false,
    component: <PAGES.HomeIndex />,
  },

  AuthLogin: {
    ...routeTemplate,
    path: '/login',
    title: 'Login',
    roleRequired: false,
    component: <PAGES.AuthLogin />,
  },

  AuthLoginMode: {
    ...routeTemplate,
    pathMaker: (params:IO) => `/login/${params.mode}`,
    path: '/login/:mode',
    title: 'Login',
    roleRequired: false,
    component: <PAGES.AuthLogin />,
  },

  AuthLogout: {
    ...routeTemplate,
    path: '/logout',
    title: 'Logout',
    roleRequired: false,
    component: <PAGES.AuthLogout />,
  },

  AuthProfile: {
    ...routeTemplate,
    path: '/profile',
    title: 'Profile',
    roleRequired: true,
    component: <PAGES.AuthProfile />,
  },

  AuthHome: {
    ...routeTemplate,
    path: '/home',
    title: 'Home',
    roleRequired: false,
    component: <PAGES.HomeIndex />,
  },
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ PROJECT PAGES
  Landing: {
    ...routeTemplate,
    path: '/landing',
    title: 'Landing',
    roleRequired: false,
    component: <PAGES.LandingPage />,
  },
  Registration: {
    ...routeTemplate,
    path: '/registration',
    title: 'Registration',
    roleRequired: false,
    component: <PAGES.RegistrationPage />,
  },
  Notification: {
    ...routeTemplate,
    path: '/notification',
    title: 'Notification',
    roleRequired: false,
    component: <PAGES.NotificationPage />,
  },
  LotPage: {
    ...routeTemplate,
    path: '/lot',
    title: 'LotPage',
    roleRequired: false,
    component: <PAGES.LotPage />,
  },
  Examples: {
    ...routeTemplate,
    path: '/examples',
    title: 'Examples',
    roleRequired: false,
    component: <PAGES.ExamplesPage />,
  },
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
}; // end of routes
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export default routes
