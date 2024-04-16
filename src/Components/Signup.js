import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = ({history}) => {
 const [name,setName] = useState();
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
 const navigate = useNavigate();

 const handleUserName = (e) => {
    setName(e.target.value);
 }

 const handleUserEmail = (e) => {
    setEmail(e.target.value);
 }

 const handlePassword = (e) => {

    setPassword(e.target.value);
 }

 const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
 })
    .catch(err => console.log(err))

 }

  return (
    <div className='flex'>
    <div className='pt-[50px] pl-[160px]  '>
        <h3 className='font-extrabold text-3xl'>Create your Sked.com account</h3>
        <div className='w-[450px] mt-7 mr-[120px]'>
          <form action="POST" >
          <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="name">
                    Username
                </label>
                <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" type="text" placeholder="" value={name} onChange={handleUserName}/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="email">
                    Email address
                </label>
                <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" type="text" placeholder="abc@example.com" value={email} onChange={handleUserEmail}/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 mt-7" for="password">
                    <div className='flex justify-between'>
                    <div>Password</div>
                    </div>
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="•••••••••••••"
                
                value={password}
                onChange={handlePassword}
                />
                {/* <ul className='text-gray-500 mt-5'>
                    <li>• &nbsp; Mix of uppercase & lowercase letters</li>
                    <li>• &nbsp; Minimum 7 characters long</li>
                    <li>• &nbsp; Contain at least 1 number</li>
                </ul> */}
            </div>

            <div class="flex items-center justify-between">
          
                <button class="bg-black text-white items-center p-2  border rounded-md w-full" type="button" onClick={handleSubmit}>
                    Create account
                </button>
              
            </div>
            </form>
            <div class="relative flex items-center mt-7">
                <div class="border-slate-300 flex-grow border-t"></div>
                <span class="text-subtle leadning-none mx-2 flex-shrink text-sm font-normal ">or continue with</span>
                <div class="border-slate-300 flex-grow border-t"></div>
            </div>
            <button className='flex justify-center mt-7 mb-7 p-2 items-center border border-slate-300 rounded-md w-full'>
              <img class="text-subtle mr-2 h-4 w-4 dark:invert" src="https://app.cal.com/google-icon.svg" alt=""/>
              <h1 className='mt-[4px]'>Sign in with Google</h1>
            </button>
            <div className='text-gray-500 mt-7 flex ml-[100px]'>
                Already have an account?
                <Link to="/login" >
                    <div className='text-black ml-3 r'>Signin</div>
                </Link>
            </div>
        </div>
        
    </div>
    <div className=' border bg-[#e5e7eb]  rounded-2xl pt-[280px]  pl-[180px] pr-[160px] w-full h-[654px] '>
      <div className='text-6xl'>
        Sked.com
      </div>
    </div>
    </div>
  )
}

export default Signup