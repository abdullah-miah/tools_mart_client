import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile px-14">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    {admin?<h1 className='text-3xl font-bold mt-12 text-success'>
      Welcome To Dashboard <span className='text-xl text-secondary'>(Admin)</span></h1>
    :<h1 className='text-3xl font-bold mt-12 text-success'>Welcome To Dashboard</h1>}
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {admin? ' ': <li><Link to='/dashboard/order'>My Orders</Link></li>}
      {admin ? '' : <li><Link to='/dashboard/review'>Review</Link></li>}
      <li><Link to='/dashboard'>My profile</Link></li>
      {admin && 
      <>
      <li><Link to='/dashboard/user'>All Users</Link></li>
      <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
      <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
      <li><Link to='/dashboard/allorders'>Manage All Orders</Link></li>
      </>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;