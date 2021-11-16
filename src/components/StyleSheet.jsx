import React from 'react'

export default function StyleSheet(props) {
    let className= props.primary ? 'primary':''
    return (
        <div>
           <h1 className={className}> StyleSheet Example</h1> 
        </div>
    )
}
