import { useForm } from "react-hook-form"
import { toast } from "react-toastify";


const Signin = (props) => {

  const {toggler,settoggler,user} = props;
   
  const {register,handleSubmit,reset} = useForm();
  

   const submitHandler = (data)=>{
      console.log(data);
      const user_email_exists = user.filter((element)=>{
         return element.email==data.email;            
         })
      
      if(!user_email_exists) toast.warn('no user exist');
      else{ 
      const user_password_exist = user_email_exists.find((element)=>{
         return element.password==data.password;
      })
     

      user_password_exist ? toast.success('user successfully logedin') : toast.warn('incorrect password');
   }
      
      reset();
   }



  return (
     <div className=' w-[50%]  border border-white p-6 rounded-[10px]'>
          <h1 className='text-6xl'>Let's start the journey</h1>
          <br />
     <form 
     className=' flex flex-col items-center p-4 gap-4 '
     onSubmit={ handleSubmit(submitHandler) } 
     >
    <input type="email" 
    placeholder='Your Email'
    {...register('email')}
    className='block font-thin  border-b outline-0 p-2 w-full text-2xl'
    />
    <input type="text" 
    placeholder='Password' 
    {...register('password')}
    className='block font-thin  border-b outline-0 p-2 w-full text-2xl'
    />

    <button className=' w-[25%] border border-white rounded-[5px] p-1 mt-4 text-[20px]'>Submit</button>
   </form>
    <p>
     Don't have an account ? 
     <button type='button' className='text-blue-600 text-center'
     onClick={()=>{ settoggler(!toggler) } }
     >Signup</button>
    </p>

     </div>
  )
}

export default Signin