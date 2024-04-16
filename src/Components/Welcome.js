import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

const Welcome = () => {
  return (
    <div>
        <div className='flex justify-between'>
            <h1 className='mt-12 ml-14 font-bold text-3xl'>Sked.com</h1>
            <div className='flex mt-12 mb-16 pt-3 pb-2 pl-4 pr-4  rounded-full border-black border-2 '>
                <h1 className='font-bold text-2xl '>PLANS</h1>
                <h1 className='font-bold text-2xl ml-4 '>PRODUCTS</h1>
            </div>
            <Link to="/login" className='mt-12 mb-16 text-white bg-black font-bold text-2xl mr-14 border pr-4 pl-4 pt-3 pb-2 rounded-full hover:rounded-xl '>LOGIN</Link>
        </div>

        <h1 className='text-[250px] font-bold mt-20 ml-36'>Sked.com</h1>
        
    </div>
  )
}

export default Welcome