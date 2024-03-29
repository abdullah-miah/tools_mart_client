import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://tools-mart-server.vercel.app/alluser', {
    method: 'GET',
    headers:{
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()));
if (isLoading) {
    return <Loading></Loading>
}
    return (
        <div>
          <h1 className='text-2xl mt-5 font-bold text-center btn btn-outline mb-5'>All Users</h1>
            <h1 className=' mb-2 text-xl'>All users:{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>SL.NO</th>
        <th>Email</th>
        <th>Remove User</th>
        <th>Make Admin</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user, index)=><UsersRow
        key={user._id}
        user={user}
        index={index}
        refetch={refetch}
        users ={users}
        ></UsersRow>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;