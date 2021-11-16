import React, { Component } from 'react'

export default class MethodAsPropsChild extends Component {
    render() {
        return (
            <div>
                {/* //Taking method of parent component as a props
              <button onClick={this.props.parent}> Click to See message from parent</button>   */}
                    {/* Sending message to parent */}
                <button onClick={() => this.props.parent('Hello Dad from Child -child says')}> Click to See messages</button>
            </div>
        )
    }
}
