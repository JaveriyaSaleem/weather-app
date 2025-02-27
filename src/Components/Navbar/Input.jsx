import React from 'react'
import { useRef } from 'react'
export  let inputRef;
import '../City/city.css'

const Input = (props) => {
 inputRef = useRef("karachi")
  
  return (
      <form className=''>
                           {   console.log(inputRef.current.value)}
                        <label htmlFor="search" className="mb-2 text-sm font-medium  sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search" className="block w-full md:w-[500px] p-4 ps-10  text-sm  border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 bg-dark  dark:placeholder-gray-400" placeholder="Search" required ref={inputRef} />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 bg-black hover:bg-black dark:focus:ring-blue-800" onClick={props.onClick}>Search</button>
                        </div>
                     
                    </form>

  )
}
export default Input

