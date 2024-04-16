import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();
  
  const handleUserName = (e) => {
     setEmail(e.target.value);
  }
 
  const handlePassword = (e) => {
 
     setPassword(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/eventtypes')
      }
      
 })
    .catch(err => console.log(err))

 }



  


  return (
    <div >
      <div className='text-center mt-12 '>
        <h1 className='text-2xl'>Sked.com</h1>
        <h1 className='text-4xl'>Welcome back</h1>
      </div>
      <div class="w-[500px]  ml-[420px] mt-10">
          <form action="POST" class="bg-white h-[400px] shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="email">
                Email address
              </label>
              <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="abc@example.com" onChange={handleUserName}/>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2 mt-7" for="password">
                <div className='flex justify-between'>
                  <div>Password</div>
                  <div>Forgot?</div>
                </div>
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="•••••••••••••" onChange={handlePassword}/>
              
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-black text-white items-center p-2  border rounded-md w-full" type="button" onClick={handleSubmit}>
                Sign In
              </button>
            </div>
            <hr className='mt-7 mb-7'></hr>
            <button className='flex justify-center mb-10 p-2 items-center border rounded-md w-full'>
              <img class="text-subtle mr-2 h-4 w-4 dark:invert" src="https://app.cal.com/google-icon.svg" alt=""/>
              <h1 className='mt-[4px]'>Sign in with Google</h1>
            </button>
          </form>
         <Link to="/signup" ><div className='text-center mt-7'>Don't have an account?</div></Link>
       </div>
    </div>
  )
}

export default Login;
