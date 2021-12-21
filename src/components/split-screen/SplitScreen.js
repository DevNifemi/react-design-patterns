import React from 'react'

export const SplitScreen = ({ weight = 1, children}) => {
    // extracting the necessary components from children prop 
    const [leftComp, rightComp] = children

    return (
        <div>
            {/* rendering extracted components  */}
            {leftComp}

            {rightComp}
        </div>
    )
}
