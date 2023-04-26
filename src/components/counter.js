import react from 'react';
import {useState} from 'react';
import './counter.css'

export default function Counter (){
    const [count,setcount] =useState(10)


    function handleclick() {
         setcount(count+1)
    }
    function handleclick1(){
        if(count>0){
            setcount(count-1)
        }
    }
    return(
        <div>
        <h4 className='heading'>count is {count}</h4>
        <button className='button1' onClick={handleclick}>increase</button>
        <button className='button2' onClick={handleclick1}>decrease</button>
        </div>
    )

}