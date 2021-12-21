import React from 'react'

export const NumberedList = ({ items, itemComponent: ItemComponent, resourceName}) => {
    return (
        <div>
            {
                // loop through data list is presenting 
                items.map((item, i) => (
                    <>
                   <h2>{i + 1}</h2> <ItemComponent key={i} {...{ [resourceName]: item}}/>
                   </>
                ))
            }
        </div>
    )
}

