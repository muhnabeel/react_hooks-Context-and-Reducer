import React, { useReducer } from 'react';
import contextReducer from './contextReducer';


const Child2 = () => {
 

   let [state, dispatchs] = useReducer(contextReducer,11); 

   console.log(state);

    return(

      <div>

    <h3>reducer value is {state}</h3>
      <button onClick={()=>{dispatchs('INCREMENT')}}>Add alue to reducer</button>


     </div>
    )
}


export default Child2;