import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect} from "react"

const ShowRole = () => {
    const [role, setRole] = useState("")
    
    console.log(role)
    
    useEffect(() => {
        axios.post(`${BASE_URL}/test`,{
            id: 1,
            name:"user"
        })
        .then(res => setRole(res.data.result[0].name))
        .catch(err => console.log(err))
    },[])
    
    return(
        <h1>hello</h1>    
    )    
}

export default ShowRole