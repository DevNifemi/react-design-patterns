import React from 'react'

export const LargeListItem = ({ person}) => {
    // extracting values from person props 
    const {name, age, hairColor, hobbies} = person
    return (
        <div>
            <p>{name} is {age} years and {hairColor} hair color</p>
            <ul>
                {hobbies.map((hobby, idx) => (
                    <li key={idx}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

