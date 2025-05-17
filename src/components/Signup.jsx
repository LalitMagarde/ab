
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';


const Signup = (props) => {
``
     const { toggler, settoggler,user,setuser } = props;

     const { register,
          handleSubmit,
          reset } = useForm();


     const submitHandler = (data) => {
          
          data.id = nanoid();
          setuser([...user,data]);
          toast.success('user created successfully');
          reset();
     }

     console.log(user);

     return (
          <div className=' w-[50%]  border border-white p-6 rounded-[10px]'>
               <h1 className='text-6xl'>Let's start the journey</h1>
               <br />
               <form
                    className=' flex flex-col items-center p-4 gap-4 '
                    onSubmit={handleSubmit(submitHandler)}
               >

                    <input type="text"
                         placeholder='UserName'
                         {...register('username')}
                         className='block font-thin  border-b outline-0 p-2 w-full text-2xl'
                    />
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
                    already have an account ?
                    <button type='button'
                         className='text-blue-600 text-center'
                         onClick={() => { settoggler(!toggler) }}
                    >Signin</button>
               </p>

          </div>

     )
}

export default Signup