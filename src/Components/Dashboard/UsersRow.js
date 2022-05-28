import React from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/useAdmin';

const UsersRow = ({user,index, refetch, users}) => {
    const {email, role} =user;
    const [admin] = useAdmin();
    const makeAdmin=()=>{
        fetch(`https://limitless-everglades-10134.herokuapp.com/user/admin/${email}`,{
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
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
       const url = `https://limitless-everglades-10134.herokuapp.com/deleteUsers/${id}`
       fetch(url, {
           method: 'DELETE'
       }) 
       .then(res => res.json())
       .then(data =>{
           console.log(data);
        //    const remaining = user.filter(u => u._id !== id);
        //    users(remaining);
        refetch()
        toast.success('User remove successfuly')
       })
    }
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td>{admin? '':<button onClick={()=>handleDelete(user._id)} class="btn">Remove</button>}</td>
        <td>{role!='admin' && <button onClick={makeAdmin} class="btn">Make Admin</button>}</td>
      </tr>
    );
};

export default UsersRow;