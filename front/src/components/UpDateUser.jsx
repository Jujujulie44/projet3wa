import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {StoreContext} from "../tools/context.js"
import {useState, useEffect, Fragment, useContext} from "react"
import inputCheck from "../tools/inputLength.js"

const UpDateUser = () => {
    const initialState = {nom:'',prenom:'',email:''};
    const [user, setUser] = useState(initialState)
    const [state, dispatch] = useContext(StoreContext)
    
    console.log(state)
    
    useEffect(() => {
        setUser({
            nom:state.user.nom,
            prenom:state.user.prenom,
            email:state.user.email
        })
        
        // axios.post(`${BASE_URL}/editUserById`,{id})
        //     .then(res => setUser(res.data.result[0]))
        //     .catch(err => console.log(err))
    },[])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
            setUser({...user, [name]:value})
        } 
    }
    
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(user.nom) && inputCheck(user.prenom) && inputCheck(user.email)){
            axios.post(`${BASE_URL}/editUserById`,{...user, id:state.user.id})
            .then(res => {
                dispatch({type:"UPDATE_USER", payload:user})
                console.log(res)
                setUser(initialState);
            })
            .catch(e => console.log(e))
        }
    }
    
    return (
        <Fragment>
            { user &&  (
                <form onSubmit={submit}>
                    <fieldset>
                        <legend>Vous souhaitez modifier vos informations ? </legend>
                        <label> Votre nom : </label>
                            <input type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                        <label> Votre prénom : </label>
                            <input type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                        <label> Votre adresse mail : </label>
                            <input type='email' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                            <input type='submit' />
                    </fieldset>
                </form>
            )}
        </Fragment>
        )
}

export default UpDateUser