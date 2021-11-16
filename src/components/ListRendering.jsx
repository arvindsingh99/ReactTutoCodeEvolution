import React, { Component } from 'react'
import PersonRender from './PersonRender'
export default class ListRendering extends Component {
    render() {
        const persons = [
            {   id: 1,
                name: 'Arvind',
                age: 21,
                Occupation: 'Student'
            },
            {   id: 2,
                name: 'Mohan',
                age: 27,
                Occupation: 'Farmer'
            }
        ]
        const personList = persons.map(person => <PersonRender key={person.id} person={person} />)
        return (
            <div>
              {personList}
            </div>
        )
    }
}
