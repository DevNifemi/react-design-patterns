import axios from "axios"
import React, { useEffect, useState } from "react"

const ResourceLoader = ({ urlName, url, children }) => {

   const [ data, setData] = useState([])

    useEffect(() => {
        ( async () => {
            const response = await axios.get(url)
            console.log(response, 'Is here!');
            // const data = response.data.length = 10
            setData(response.data)
        })()
        
    }, [url])

    return (
        <>
        { React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { [urlName]: data})
            }
            return child
        })}
        </>
     )
}

export default ResourceLoader
