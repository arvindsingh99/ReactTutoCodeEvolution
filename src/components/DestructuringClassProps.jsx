import React, { Component } from 'react'

export default class DestructuringClassProps extends Component {
    
    render() {
        const {name, realname} = this.props
        //For state deconstruction
        // const {state1, state2} = this.state
        return (
            <div>
               <h1>My name is {name} and my real name is {realname}</h1>  
            </div>
        )
    }
}
 