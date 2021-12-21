import axios from "axios"
import React, { useEffect, useState } from "react"

const DataContainer = ({ children }) => {

   const [ data, setData] = useState([])

    useEffect(() => {
        // anonymous async function to fetch data 
        ( async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        })()
        
    }, [])

    return (
        <>
        { React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {data})
            }
            return child
        })}
        </>
     )
}

export default DataContainer
