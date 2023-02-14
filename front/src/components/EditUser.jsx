import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect, Fragment} from "react"
import inputCheck from "../tools/inputLength.js"


const EditUser = () => {
    const [user, setUser] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getUserById`,{id})
            .then(res => setUser(res.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
        setUser({...user, [name]:value})
        } 
    }
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(user.nom) && inputCheck(user.prenom)&& inputCheck(user.email)&& inputCheck(user.password)){
            axios.post(`${BASE_URL}/editUserById`,{...user})
        }
    }
    
    return (
        <Fragment>
            { user &&  (
                <form onSubmit={submit}>
                    <input type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                    <input type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                    <input type='email' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                    <input type='password' name='password' placeholder='password' onChange={handleChange} value={user.password} />
                    <input type='text' name='role_id' placeholder='id du role' onChange={handleChange} value={user.role_id} />
                    <select onChange={null} value={null}>
                    <option value='2'>Admin</option>
                    <option value='1'>user</option>
                    </select>
                    <input type='submit' />
                </form>
            )}
        </Fragment>
    )
}

export default EditUser