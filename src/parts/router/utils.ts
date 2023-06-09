import {
  IObject as IO,
  IRoute,
  IRoutes,
  routeTemplate,
  routesTemplate,
} from 'Interfaces'


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Normalize routes

export const routesListNormalize = (routes:IRoutes = {}):IRoutes => {
  return Object.entries(routes).reduce(
    (normalizedRoutes:IRoutes, [key,route]:[key:string;route:IRoute]) => ({
          ...normalizedRoutes, [key]: {
            ...routeTemplate,  // base layer
            ...route,          // current data layer
               key,
    }}), routesTemplate
  );
}
