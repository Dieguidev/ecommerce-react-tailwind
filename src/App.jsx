import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context'
import { Home } from './pages/Home'
import { MyOrders } from './pages/MyOrders'
import { MyAccount } from './pages/MyAccount'
import { MyOrder } from './pages/MyOrder'
import { NotFound } from './pages/NotFound'
import { SignIn } from './pages/SignIn'
import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'
import { CheckoutSideMenu } from './components/CheckoutSideMenu'




const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}


function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>


  )
}

export default App
