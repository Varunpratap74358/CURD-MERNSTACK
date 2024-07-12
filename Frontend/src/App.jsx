
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './componantes/getuser/User'
import Add from './componantes/adduser/Add'
import Edit from './componantes/updateuser/Edit'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User />,
    },
    {
      path:"/add",
      element:<Add />,
    },
    {
      path:"/edit/:id",
      element:<Edit />,
    },
  ])

  return (
    <div className='App'>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  )
}

export default App
