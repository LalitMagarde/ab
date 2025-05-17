import React from 'react'
import { toast } from 'react-toastify';

const Users = (props) => {

  const {user,setuser} = props;

  const deletehandler = (id)=>{
      
     const deleteuser = user.filter((element)=>{
      console.log(id);
      console.log(element.id);
      return id!=element.id;
     })
     setuser(deleteuser);
   
     toast.success('User deleted successfully');

  }

  const userlist  = user.map((element) =>{
    return ( 
    <li
     key={element.id}
     className='pl-4 pr-4 pt-2 pb-2 flex justify-between bg-gray-400 '>
        <div>
          <h3>{element.username}</h3>
          <h3>{element.email}</h3>
        </div>
        <button type='button' className='text-red-600' onClick={()=>{deletehandler(element.id)}} >Delete</button>
    </li>
    )
    })

  
  return (
    <ul className=' flex flex-col gap-2 '>
        
      { userlist.length ? userlist : 
        <h3 className='text-red-600' >no data available</h3>
      }
        
      
    </ul>
  )
}

export default Users