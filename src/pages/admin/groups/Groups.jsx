import React, { useEffect, useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Groups = () => {

  return (
    <div>
        <h2 className='text-3xl'>Groups</h2>
        <ul className='flex my-6 gap-4' id='group-tab'>
            <li>
                <NavLink end={true} to={""}>Videolar</NavLink>
            </li>
            <li>
                <NavLink to={"table"}>Table</NavLink>
            </li>
            <li>
                <NavLink to={"text"}>Text</NavLink>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Groups