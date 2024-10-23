import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'

const router = createBrowserRouter([{
  element: <Landing/>,
  path: '/'
}])

function App() {
 return <RouterProvider router={router}/>
}

export default App
