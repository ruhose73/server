import {MainPage, AuthPage} from './pages'
import { AUTH_ROUTE } from './utils/consts'



export const noAuthRoutes = [
   
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    }
]