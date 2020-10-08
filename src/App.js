 import React, { useState } from 'react';
 import Parent from './Parent';
 import CounterContext from './CounterContext';


 const App = () => {

  let  Counter  = useState(1);


 	return (


  <CounterContext.Provider value={Counter}>
   <div>

     <Parent />

   </div>
   </CounterContext.Provider>
   )

 }


export default App;
