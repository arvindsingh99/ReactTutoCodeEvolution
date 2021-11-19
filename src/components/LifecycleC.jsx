import React, { Component } from 'react'
import LifecycleD from './LifecycleD'
export default class LifecycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Arvind Singh"
        }
        console.log('LifecycleC constructor')
    }
    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }


    shouldComponentUpdate() {
        console.log('LifecycleC Should Component Update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleC componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: "Mohan"
        })
    }

        render() {
            console.log('LifecycleC Render')
            return (
                <div>
                    <h3>LifecycleC</h3>
                    <button onClick={this.changeState}>Button</button>
                    <LifecycleD />
                </div >
            )
        }
    }
