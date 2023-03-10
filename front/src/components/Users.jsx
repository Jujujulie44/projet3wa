import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useEffect, useState} from "react"
import {NavLink} from 'react-router-dom'


const Users = () => {
    const [usersList, setUsersList] = useState([])
   
    
    useEffect(() => {
        if(usersList.length === 0){
            axios.get(`${BASE_URL}/getUsers`)
                .then(res => setUsersList(res.data.result))
                .catch(err => console.log(err))
        }
    },[usersList])
    
    const deleteUser = (id) => {
        axios.post(`${BASE_URL}/deleteUserById`,{id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            {usersList.map((user,i) => {
                return(
                    <ul key={i}>
                        <li>Nom:<NavLink to={`/user/${user.id}`}>{user.nom}</NavLink></li>
                        <li>Prenom:{user.prenom}</li>
                        <button onClick={() => deleteUser(user.id)}>Supprimer cet utilisateur</button>
                    </ul>
                )
            })}
        </div>    
    )
}

export default Users