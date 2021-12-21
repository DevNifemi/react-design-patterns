import axios from "axios"
import React, { useEffect, useState } from "react"

export const withUser = (Component, url) => {
    return props => {
        const [ data, setData] = useState([])

        useEffect(() => {
            ( async () => {
                const response = await axios.get(url)
                setData(response.data)
        })()
        
    }, [url])

    return <Component {...props} data={data} />
    }
}