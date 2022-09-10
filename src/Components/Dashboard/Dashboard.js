import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping,faStar, faUser, faUsers,faPlus, faGear, faGears} from "@fortawesome/free-solid-svg-icons"



const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ml-12">
    {/* <!-- Page content here --> */}
    {admin?<h1 className='text-3xl font-bold mt-12  text-success'>
      Welcome To Dashboard <span className='text-xl text-secondary'>(Admin)</span></h1>
    :<h1 className='text-3xl font-bold mt-12 text-success'>Welcome To Dashboard</h1>}
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-60 dashboard-bg text-base-content">
      {/* <!-- Sidebar content here --> */}
      {admin? ' ': <li><Link to='/dashboard/order'>
      <FontAwesomeIcon icon={faBagShopping} />
        My Orders</Link></li>}
      {admin ? '' : <li><Link to='/dashboard/review'>
      <FontAwesomeIcon icon={faStar} />
        Review</Link></li>}
      <li><Link to='/dashboard'>
      <FontAwesomeIcon icon={faUser} />
        My profile</Link></li>
      {admin && 
      <>
      <li><Link to='/dashboard/user'>
        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
        All Users</Link></li>
      <li><Link to='/dashboard/addproduct'>
      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        Add Product</Link></li>
      <li><Link to='/dashboard/manageproduct'>
      <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        Manage Products</Link></li>
      <li><Link to='/dashboard/allorders'>
      <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>
        Manage All Orders</Link></li>
      </>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;