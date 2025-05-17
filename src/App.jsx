import React, { useState } from 'react'
import Signup from './components/signup'
import Signin from './components/Signin'
import Users from './components/Users';

const App = () => {
  
  const [toggler,settoggler] = useState(false);
  const [user,setuser] = useState([]);

  return (
    <div className='w-screen h-screen bg-gray-800 flex'>
      <div className='w-[65%] h-[100%]  flex justify-center items-center flex-wrap  text-white '>
      { toggler ? < Signup  user={user} setuser={setuser} toggler={toggler} settoggler={settoggler} /> 
      : < Signin user={user} toggler={toggler} settoggler={settoggler} /> }
      </div>
      <div className='w-[35%] h-[100%] p-10 '>
        <Users user={user} setuser={setuser} />
      </div>
      
    </div>
  )
}

export default App