import React, { Component } from 'react'
import PersonRender from './PersonRender'
export default class ListRendering extends Component {
    render() {
        const persons = [
            {
                name: 'Arvind',
                age: 21,
                Occupation: 'Student'
            },
            {
                name: 'Mohan',
                age: 27,
                Occupation: 'Farmer'
            }
        ]
        const personList = persons.map(person => <PersonRender person={person} />)
        return (
            <div>
              {personList}
            </div>
        )
    }
}
