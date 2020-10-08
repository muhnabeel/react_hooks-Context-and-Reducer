import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = () => {

  
    let counterval = useContext(CounterContext);
     console.log(counterval);
     console.log('worksss');

    return (


  <div>
   
    <h3>Counter Value is : { counterval[0]  }</h3>
   <h1>hello Child</h1>

<button onClick={ ()=> {counterval[1](++counterval[0]) } } >Click</button>


  </div>

  )

}


export default Child;
