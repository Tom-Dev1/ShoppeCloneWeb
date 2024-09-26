import { useRoutes } from 'react-router-dom'
import Productlist from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainlLayout from './components/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainlLayout>
          <Productlist />
        </MainlLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements // return the routes for use  app
}
