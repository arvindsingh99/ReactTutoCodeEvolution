import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

export default class MethodAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentMessage: 'Hello My Child -parent says'
        }
        this.messageHandler = this.messageHandler.bind(this)
    }
    // messageHandler() {
    //     alert(`Messages: + ${this.state.parentMessage}`)
    // }

    messageHandler(childParameter) {
         alert(`Messages: \n ${this.state.parentMessage}  \n ${childParameter}`)
    }
    render() {
        return (
            <div>
                {/* //Sending methoad as a prop to child component
                <MethodAsPropsChild parent={this.messageHandler} /> */}
                <MethodAsPropsChild parent={this.messageHandler} />
            </div>
        )
    }
}
