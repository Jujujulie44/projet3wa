import axios from "axios";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../tools/constante.js';
import {useEffect, useState, Fragment} from "react";
import decorationBasGauche from "../image/decorationBasGauche.png";
import arabesqueAdmin from "../image/arabesqueAdmin.png";



const Users = () => {
    
    const [usersList, setUsersList] = useState([]);
    const navigate = useNavigate();
    
    
    
    useEffect(() => {
        if(usersList.length === 0){
            axios.get(`${BASE_URL}/getUsers`)
                .then(res => setUsersList(res.data.result))
                .catch(err => console.log(err))
        }
    },[usersList]);
    
    
    const deleteUser = (id) => {
        axios.post(`${BASE_URL}/deleteUserById`,{id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };
    
    const onClick = () => {
      
      navigate('/profil');
    };
    
    
    return(
        <Fragment>
        <h2 className="adminStyle">Gestion des utilisateurs </h2>
        <div>
            {usersList.map((user,i) => {
                return(
                    <div key={i}>
                    <table>
                        <tbody>
                            <tr>
    							<th>Nom : </th>
    							<th>Prénom :</th>
    							<th>Email :</th>
    							<th></th>
						    </tr>
						    <tr>
    							<td>{user.nom}</td>
    							<td>{user.prenom}</td>
    							<td>{user.email}</td>
    							<td className="btn-product-users"> <button onClick={() => deleteUser(user.id)}>Supprimer</button></td>
    						</tr>
                        </tbody>
                    </table>
                </div>
                )
            })}
            <div  className="btn-product-admin" >
    	    	<button type="button"  onClick={onClick}> retour </button>
    	    </div>
        </div>
        <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
        <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
		<div className="clear"></div>
        </Fragment>
    )
}

export default Users 

//import {NavLink} from 'react-router-dom'
//<li>Nom:<NavLink to={`/user/${user.id}`}>{user.nom}</NavLink></li>
//<li>Prenom:{user.prenom}</li>