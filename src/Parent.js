import React, { useState } from 'react';
import Child from './Child';
import Child2 from './Child2';


const Parent = () => {
 
    let [counter, setCounter] = useState(12); 

    return (


  <div>
   
   <h3>Parent counter value is {counter} </h3>

   <button onClick={()=>{setCounter(++counter)} } > normal counter</button>

   <hr></hr>
    <Child2></Child2>
    <Child />
  
  </div>

  )

}


export default Parent;
