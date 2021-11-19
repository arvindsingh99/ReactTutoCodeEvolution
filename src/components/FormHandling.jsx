import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            choice: '',
        }
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    choiceHandler = (event) => {
        this.setState({
            choice: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`Username: ${this.state.username} \n Comment: ${this.state.comment} \n Choice: ${this.state.choice}`)
        //To prevent refresh page
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.usernameHandler} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <input type="text" value={this.state.comment} onChange={this.commentHandler} />
                    </div>
                    <div>
                        <label>Choice</label>
                        <select value={this.state.choice} onChange={this.choiceHandler}>
                            <option value="React"> React </option>
                            <option value="Node"> Node.Js </option>
                            <option value="HTML"> HTML </option>
                            <option value="Express"> Express </option>
                        </select>
                    </div>
                    <button type='Submit'>Submit</button>

                </form>
            </div>
        )
    }
}
