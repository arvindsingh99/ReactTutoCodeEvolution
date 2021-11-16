import React, { Component } from 'react'
// Four Methods
export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        //If/else Rendering

        // Is is not a good method because all the return statements are in if/else block
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h2>Welcome Arvind!</h2>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h2>You are not logged in </h2>
        //         </div>
        //     )
        // }


        //Element Variables Rendering

        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Arvind!</div>
        // }
        // else{
        //     message= <div>You are not Logged in !!</div>
        // }
        // return(
        //     <div> 
        //         <h2>{message}</h2>
        //     </div>
        // )


        //Ternary Operator Rendering

        // return(
        // this.state.isLoggedIn ? <div> Welcome Arvind!</div> :<div> You are not Logged in !!</div> 
        // )
        


        //Short Circuit Rendering

        return(
            this.state.isLoggedIn && <div>Welcome Arvind!</div>
        )
    }
}
