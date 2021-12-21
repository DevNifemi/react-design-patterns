import React from 'react'

export const RegularList = ({ items, resourceName, itemComponent: ItemComponent}) => {
    return (
        <div>
            {
                // loop through data list is presenting 
                items.map((item, i) => (
                    <ItemComponent key={i} {...{ [resourceName]: item}}/>
                ))
            }
        </div>
    )
}

 