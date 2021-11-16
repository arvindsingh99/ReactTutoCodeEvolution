import React, { Component } from 'react'

export default class PropsComponent extends Component {
    render() {
        return (
            <div>
              <h1> Hello {this.props.name}. I am {this.props.realname}</h1>  
            </div>
        )
    }
}
