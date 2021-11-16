import React from 'react'

const Hello = ()=>{

    //Using JSX 
    // return(
    //     <div className='dummyClass'>
    //         <h1>Example with JSX</h1>
    //         <h1>Hello Arvind</h1>
    //     </div>
    // )

    // Equivalent code not using JSX
   return React.createElement(
       'div',
   {
       id: 'hello',
       className: 'dummyClass'
   },
   React.createElement('h1', null, 'Hello Arvind')
   )
}

export default Hello