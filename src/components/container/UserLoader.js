import axios from "axios"
import React, { useEffect, useState } from "react"

const UserLoader = ({ id, children }) => {

   const [ data, setData] = useState([])

    useEffect(() => {
        ( async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            console.log(response, 'Is here!');
            // const data = response.data.length = 10
            setData(response.data)
        })()
        
    }, [id])

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

export default UserLoader
