import React from 'react'

export default function PersonRender(person) {
    return (
        <div>
            <h2> I am {person.name}. I am {person.age} year Old and I am {person.occupation} </h2> 
        </div>
    )
}
