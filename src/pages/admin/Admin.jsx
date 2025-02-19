import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useProfileQuery } from '../../redux/api/auth.api'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/auth.slice'

const Admin = () => {
   const {isError} = useProfileQuery({})
    const dispatch = useDispatch()

   useEffect(()=> {
    if(isError){
        dispatch(logout())
    }
   }, [isError])
   
   const navigate = useNavigate()
   const handleLogout = ()=>{
    dispatch(logout())
   }
  return (
    <div className='flex'>
        <aside id='admin-sidebar' className='overflow-auto w-80 h-screen sticky top-0 left-0 bg-sky-950 p-6 text-white flex flex-col'>
            <p className='text-2xl font-bold'>Admin Dashboard</p>
            <ul className='my-6 flex-1'>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={ "groups"}>Groups</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"users"}>Users</NavLink>
                </li>
                <li>
                    <NavLink className="py-2 px-1 mb-1.5 rounded block " to={"shop"}>Shop</NavLink>
                </li>
            </ul>
            <button onClick={handleLogout} className='bg-red-500 py-2 rounded'>Log Out</button>
        </aside>
        <div className='flex-1 min-h-screen '>
            <div className='w-full h-16 sticky top-0 left-0 bg-sky-900'></div>
            <div className='p-6'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Admin