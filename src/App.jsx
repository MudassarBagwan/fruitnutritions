import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { About,HomeLayout,Fruits,Landing } from './pages';

function App() {


  const router=createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          
         
        },
        {
          path:'/about',
          element:<About/>,
          
        },
        {
          path:'/fruits/:id',
          element:<Fruits/>,
          
        },
      
      ]

    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
