import React, { Component } from 'react'

export default class LifecycleD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Arvind Singh"
        }
        console.log('LifecycleD constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleD getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifecycleD Should Component Update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleD getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleD componentDidUpdate')
    }


    render() {
        console.log('LifecycleD Render')
        return (
            <div>
                <h3>LifecycleD</h3>
            </div>
        )
    }
}
