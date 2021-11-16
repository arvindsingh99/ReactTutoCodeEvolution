import React, { Component } from 'react'

export default class EventHandling extends Component {
    clickHandler(){
        console.log('You Clicked the Button')
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click Me</button> 
            </div>
        )
    }
}
