import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Arvind Singh"
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }


    render() {
        console.log('LifecycleB Render')
        return (
            <div>
                <h3>LifecycleB</h3>
            </div>
        )
    }
}
