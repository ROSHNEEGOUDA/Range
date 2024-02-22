import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';

const Cm = () => {
  return (
    <div>
      <div className='grid grid-cols-4 h-[100vh]'>
        <div className='col-span-1 h-[100vh] flex flex-col gap-6 items-center bg-slate-100 border-2 border-slate-200'>
            <div className='bg-white border-blue-500 border-2 w-60 h-12 rounded-md mt-10 justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition'>Introduction</div>
            <div className='bg-white border-blue-500 border-2 w-60 h-12 rounded-md mt-2 justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition'>Course plan</div>
            <div className='bg-white border-blue-500 border-2 w-60 h-12 rounded-md mt-2 justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition'>History</div>
            <div className='bg-white border-blue-500 border-2 w-60 h-12 rounded-md mt-2 justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition'>Common attacks</div>
            {/* <div className='bg-white border-blue-500 border-2 w-60 h-12 rounded-md mt-2 justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition'>Module - 5</div> */}
        </div>
        <div className='col-span-3 h-[100vh] p-16 flex flex-col gap-6'>
            <div className='text-2xl font-bold'>Course Name</div>
            <div className='grid grid-cols-4 '>
                <div className='text-lg col-span-1 flex flex-col'>
                    <div className='mt-6'>
                        Module - 1
                    </div>
                    <div className='mt-6'>
                        Module - 2
                    </div>
                    <div className='mt-6'>
                        Module - 3
                    </div>
                    <div className='mt-6'>
                        Module - 4
                    </div>
                    <div className='mt-6'>
                        Module - 5
                    </div>
                </div>
                <div className='col-span-3 flex flex-col'>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 mt-8">
                        <div className="w-[45%] bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 mt-10">
                        <div className="w-[45%] bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 mt-12">
                        <div className="w-[45%] bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 mt-10">
                        <div className="w-[45%] bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2.5 mt-10">
                        <div className="w-[45%] bg-blue-600 h-2.5 rounded-full"></div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cm;
