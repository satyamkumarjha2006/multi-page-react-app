import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './Componenets/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Componenets/About/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import Github from './Componenets/Github/Github.jsx'
import GithubInfoLoader from './Componenets/Github/GithubInfoLoader.jsx'
import User from './Componenets/User/User.jsx'
import Login from './Componenets/Login/Login.jsx'
import Start from './Componenets/Start/Start.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route 
      loader={GithubInfoLoader} 
      path='github' element={<Github/>}  />
      <Route path='user/:userId' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/start' element={<Start/>}/>
    </Route>

  )
)
  










createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
