import {Switch, Route, Redirect} from 'react-router-dom'
import {noAuthRoutes} from './../../routes'

export const AppRouter = () => {
    return(
            //? Switch is now working but where is some bugs with Redirecting
            <Switch>
               { Object.keys(noAuthRoutes).map(key => {
                   return(
                        <Route key={noAuthRoutes[key].path} path={noAuthRoutes[key].path} component={noAuthRoutes[key].Component} exact />
                   )
               })}
            </Switch>
    )
}

