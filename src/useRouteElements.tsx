import { useRoutes } from 'react-router-dom'
import Productlist from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Productlist />
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
  return routeElements // return the routes for use in your app  // or return the routeElements directly in your App.tsx file if you prefer.  // This is just an example. You can modify this according to your needs.  // For example, you could have a separate component for each route and return those components instead.  // For a complete solution, you may want to consider using a routing library like React Router or Next.js.  // For simplicity, this example
}
