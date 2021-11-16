import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage() {
        //   Here we are changing the state or value of message attribute
        //To change state we call the setState() method
        this.setState({
            message: 'Thanks For Suscribing Us'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Here we use the Event Handler to call changeMessage() Method */}
                <button onClick={() => this.changeMessage()}>Button</button>
            </div>
        )
    }
}
