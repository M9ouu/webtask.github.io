import React from 'react'
import {  useSelector } from 'react-redux'
export default function Demo1() {
    const state =useSelector((state)=>state.count)

  return (
   <>
   <div className='container mt-3'>      
        <hr />         
        <h1 className='text-dark'>{state}</h1>
    </div>
   </>
  )
}
