import react from 'react';
import './App.css';
import {useState} from 'react';
import Counter from './components/counter'


export default function App() {
  
  const [name , setName] = useState('')
  const [head,sethead] = useState('')

  function handlechange (event) {
    setName(event.target.value)
}
function handlesubmit(event) {
    sethead(name)
    
}
  return (
          <div>
           <input
            className='inputTag'
            placeholder='Add your name...'
            onChange={handlechange}/>

            <button
            className = 'But' 
            onClick={handlesubmit}> 
            Submit</button>

            <h1 style={{marginLeft:200}}>Hii my name is : {head }</h1>
      <br/>
      <br/>
      <br/>
      <Counter/>
    </div>
  );
}
