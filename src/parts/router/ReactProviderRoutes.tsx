//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Libraries
  import React from 'react'
  import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
    RouteObject as IRouteObject,
  } from 'react-router-dom'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Interfaces
  import {
    IObject as IO,
    IRoute, routeTemplate,
    IRoutes, routesTemplate,
  } from 'Interfaces'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Project
  import { AppConfig } from 'Src/AppConfig'
  import { routes } from 'Src/AppRoutes'
  import { Error404 as Error404Page } from 'Pages'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Sub components
  import { routesListNormalize } from './utils'
  import { ProtectedRoute } from './ProtectedRoute'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ React router

const routesForReactRouter:IRouteObject[] = [

  // convert routes
  ...Object.values(routes).map(
    (route:IRoute) => ({
      path: route.path,
      element: <ProtectedRoute route={route} />,
    })
  ),

  // append special routes
  { path: '*', element: <Error404Page /> }
]
//const basename = process.env.APP_BASENAME || AppConfig.APP_BASENAME
//console.log('router basename:',basename)
//const router = createBrowserRouter(routesForReactRouter, {basename})
const router = createHashRouter(routesForReactRouter)

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Context

export interface IRoutesContext {
  routes: IRoutes;
  routePath: (key:string, params?:IO) => string;
}
const initialRoutesContext:IRoutesContext = {
  routes,
  routePath: (key:string, params:IO = {}) => '',
}
const RoutesContext = React.createContext<IRoutesContext>(initialRoutesContext);
export const useRoutesProvider = () => React.useContext(RoutesContext);


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Provider component

export const ReactProviderRoutes:React.FC = () => {
  const [routesList, setRoutesList] = React.useState<IRoutes>(routesListNormalize(routes))
  const value = {
    ...initialRoutesContext,
    routes: routesList,
    routePath: (key:string, params:IO = {}) => {
      const { pathMaker } = routes[key] || {pathMaker:undefined}
      if (typeof pathMaker === 'function') return pathMaker(params)
      return routes[key] && routes[key]?.path || ''
    }
  }
  return (
    <RoutesContext.Provider value={value}>
      <RouterProvider
        router={router}
        fallbackElement={<Error404Page />}
        />
    </RoutesContext.Provider>
  );
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default ReactProviderRoutes;
