import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user,index, refetch}) => {
    const {email, role} =user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Beares ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>{
            refetch()
            toast.success('Successfully add admin')
        })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td><button class="btn">Remove</button></td>
        <td>{role!='admin' && <button onClick={makeAdmin} class="btn">Admin</button>}</td>
      </tr>
    );
};

export default UsersRow;