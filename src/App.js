import './App.css';
import React, {useState} from 'react';

const App =()=> {
const [result, setResult] = useState('');

const handleClick= (e)=>{
     setResult(result + (e.target.name));
    //  console.log(e.target.name);
 }

 const clearHandleClick = ()=>{
   setResult("");
 }

const calculate = () =>{
  try{
    setResult(eval(result).toString());
  }
  catch(err){
    setResult("Error")
  }
 
}
  return (
    <div className="container">
    <h1>Calculator</h1>
    <div>    
    <form>
      <input defaultValue={result} />
    </form>
      <div className='first-row'>      
        <button name="1" onClick={handleClick} value='1'>1</button>
        <button name="2" onClick={handleClick} value='2'>2</button>
        <button name="3" onClick={handleClick} value='3'>3</button>
        <button name="+" onClick={handleClick} value='+'>+</button>
      </div>
      <div className='second-row'>
        <button name="4" onClick={handleClick} value='4'>4</button>
        <button name="5" onClick={handleClick} value='5'>5</button>
        <button name="6" onClick={handleClick} value='6'>6</button>
        <button name="-" onClick={handleClick} value='-'>-</button>
      </div>
      <div className='third-row'>
        <button name="7" onClick={handleClick} value='7'>7</button>
        <button name="8" onClick={handleClick} value='8'>8</button>
        <button name="9" onClick={handleClick} value='9'>9</button>
        <button name="*" onClick={handleClick} value='*'>&times;</button>
        
      <div className='fourth-row'>
        <button name="c" onClick={clearHandleClick} value='c'>c</button>
        <button name="0" onClick={handleClick} value='0'>0</button>
        <button name="/" onClick={handleClick} value='/'>&divide;</button>
        <button name="=" onClick={calculate} value='='>=</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
