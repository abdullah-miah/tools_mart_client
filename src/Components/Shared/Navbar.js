import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
    const ItemsMenu =
    <>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            {
              user && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
        <li>{user?<button onClick={logout} class="btn btn-ghost text-white text-xl">Sign Out</button>:<Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div  style={{backgroundColor: '#d9edc6'}}>
          <div class="navbar sticky top-0 lg:px-14">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {ItemsMenu}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Tools Mart</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-xl text-bold">
          {ItemsMenu}
            
          </ul>
        </div>
        <div className='navbar-end'>
        <label for="my-drawer-2" tabindex="1" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
      </div>
        </div>
    );
};

export default Navbar;