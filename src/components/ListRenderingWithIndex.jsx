import React, { Component } from 'react'

export default class ListRenderingWithIndex extends Component {
    render() {
        const persons = ['mohan', 'sohan', 'jagmohan', 'mohan' ]
        const personList = persons.map((person, index) => <div><h1 key={index}>{index}{person}</h1></div>)
        return (
            <div>
              {personList}
            </div>
        )
    }
}
