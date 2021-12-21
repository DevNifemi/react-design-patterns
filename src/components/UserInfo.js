import React from 'react'

export const UserInfo = ({ data }) => {

    return data ? (
        <div>
            { data.map(here => (
                 <p>Number {here.id} is as follows: {here.title} </p>
            ))}
        </div>
    ) :  <p>Loading User Data...</p>
}

