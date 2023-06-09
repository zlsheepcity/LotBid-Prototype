//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Libraries
  import React from 'react'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Project
  import {
    ReactProviderAuth,
    IAuthUser,
    authUserGet,
    authUserTemplate,
  } from 'Auth'
  import { ReactProviderRoutes } from 'Parts/router'
  import { ReactProviderTheme  } from 'Parts/theme'
  import { ReactProviderRedux  } from 'Components/Redux'
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~


//nom:AppProviderDefault
export const AppDefault:React.FC = () => {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ auth
  const [loading, setLoading] = React.useState(true)
  const [authUser, setAuthUser] = React.useState<IAuthUser>(authUserTemplate)
  const readAuthUser = async () => {
    const user:IAuthUser = await authUserGet()
    setAuthUser(user)
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ run

  const appMounted = async () => {
    /// run on mounted
    setLoading(true)
    readAuthUser()
    setLoading(false)
  }
  React.useEffect(() => {appMounted()}, [])

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ render

  return (
    <div id="App">
      <ReactProviderRedux>
        <ReactProviderAuth user={authUser}>
          <ReactProviderTheme>
            <ReactProviderRoutes />
          </ReactProviderTheme>
        </ReactProviderAuth>
      </ReactProviderRedux>
    </div>
  );

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
}

export const App = AppDefault
export default App
