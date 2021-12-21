import React from 'react'

export const SmallProduct = ({ products }) => {
    // extracting values from person props 
    const {name, price} = products
    return (
        <div>
            <p>{name} is {price}</p>
        </div>
    )
}

