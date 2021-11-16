import React from 'react'
//!st way to destructure props
// export default function DestructuringProps(name, realname) {
//     return (
//         <div>
//            <h1>{name}</h1> 
//         </div>
//     )
// }

export default function DestructuringProps(props) {
    const {name, realname} = props
    return (
        <div>
           <h1>My name is {name} and my real name is {realname}</h1> 
        </div>
    )
}
