import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
export default class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Arvind Singh"
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }


    render() {
        console.log('LifecycleA Render')
        return (
            <div>
                <h3>LifecycleA</h3>
                <LifecycleB />
            </div>
        )
    }
}
