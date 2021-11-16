import React, { Component } from 'react'
export default class Counter extends Component {

    //Shortcut for constructor is rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount(){ 
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementCount(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <h4>Counter: {this.state.count} </h4>
                <button onClick={()=> this.incrementCount()}>Increment</button>
                <button onClick={()=> this.decrementCount()}>Decrement</button>
            </div>
        )
    }
}
