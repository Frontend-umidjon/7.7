import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact'
// import About from '../pages/About'
// import Layout from '../pages/Layout'
const Home = lazy(()=> import("../pages/home/Home"))
const About = lazy(()=> import("../pages/about/About"))
const Contact = lazy(()=> import("../pages/contact/Contact"))
const Layout = lazy(()=> import("../pages/layout/Layout"))
const Admin = lazy(()=> import("../pages/admin/Admin"))
const Groups = lazy(()=> import("../pages/admin/groups/Groups"))
const Users = lazy(()=> import("../pages/admin/users/Users"))
const Shop = lazy(()=> import("../pages/admin/shop/Shop"))
const Videolar = lazy(()=> import("../pages/admin/groups/videos/Videolar"))
const Text = lazy(()=> import("../pages/admin/groups/text/Text"))
const Table = lazy(()=> import("../pages/admin/groups/table/Table"))
const Auth = lazy(()=> import("../pages/auth/Auth"))
const Login = lazy(()=> import("../pages/login/Login"))

const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
            <Route path='about' element={<SuspenseContainer><About/></SuspenseContainer>}/>
        </Route>

        <Route path='login' element={<SuspenseContainer><Login/></SuspenseContainer>}/>

        <Route path='/' element={<Auth/>}>
          <Route path='admin' element={<SuspenseContainer><Admin/></SuspenseContainer>}>
            <Route path='groups' element={<SuspenseContainer><Groups/></SuspenseContainer>}>
              <Route index element={<SuspenseContainer><Videolar/></SuspenseContainer>}/>
              <Route path='table' element={<SuspenseContainer><Table/></SuspenseContainer>}/>
              <Route path='text' element={<SuspenseContainer><Text/></SuspenseContainer>}/>
            </Route>
            <Route path='users' element={<SuspenseContainer><Users/></SuspenseContainer>}/>
            <Route path='shop' element={<SuspenseContainer><Shop/></SuspenseContainer>}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default RouterMain