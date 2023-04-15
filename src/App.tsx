import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import NavLayout from './layout/NavLayout'
import Home from './pages/Home'
import DemoPage from './pages/Demo'


const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout  />,
    children: [
      {
        path: '/',
        element: <Home  />
      },
      {
        path: '/demo',
        element: <DemoPage  />
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
