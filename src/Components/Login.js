import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const history = useNavigate();
  
  const handleUserName = (e) => {
     setEmail(e.target.value);
  }
 
  const handlePassword = (e) => {
 
     setPassword(e.target.value);
  }



  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:8000/login",{
            email,password
        })
        .then(res => {
          if(res.data == "exist"){
            history('/eventtypes',{state:{id:email}})
          }
          else if(res.data == "notexist"){
            alert("User not signed up")
          }
        })
        .catch(e => {
          alert("wrong details");
          console.log(e);
        })
    }
    catch(e){
        console.log(e);
    }
  }


  return (
    <div >
      <div className='text-center mt-12 '>
        <h1 className='text-2xl'>Sked.com</h1>
        <h1 className='text-4xl'>Welcome back</h1>
      </div>
      <div class="w-[500px]  ml-[420px] mt-10">
          <form class="bg-white h-[400px] shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="email">
                Email address
              </label>
              <input class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="abc@example.com"/>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2 mt-7" for="password">
                <div className='flex justify-between'>
                  <div>Password</div>
                  <div>Forgot?</div>
                </div>
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="•••••••••••••"/>
              
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-black text-white items-center p-2  border rounded-md w-full" type="button" onClick={submit}>
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
