import React from 'react'

export const SmallListItem = ({ person}) => {
    // extracting values from person props 
    const {name, age} = person
    return (
        <div>
            <p>{name} is {age} years</p>
        </div>
    )
}

