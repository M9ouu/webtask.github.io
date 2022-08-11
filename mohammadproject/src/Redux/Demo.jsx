import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Demo() {
    const state =useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <>
    <div className='container'>
      <div>
        <h1 className='text-dark'>{state}</h1>
        <hr />
        <center>
        <div className='btn-group'>
            <button className='btn btn-danger' onClick={()=>dispatch({'type':'update'})}>+</button>
            <button className='btn btn-success' onClick={() =>dispatch({'type':'unupdate'})}>-</button>
        </div>
        </center>
      </div>
    </div>
    </>
  )
}
 // const [count, setCount]= useState(0)
    // const IncNum =() =>{
    //     setCount(count + 1)
    // }
    // const DecNum =() =>{
    //     setCount(count - 1)
    // }
  