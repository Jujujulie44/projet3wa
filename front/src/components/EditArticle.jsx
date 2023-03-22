import {useState, useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import inputCheck from "../tools/inputLength.js";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import { useNavigate } from "react-router-dom";

const EditArticle = () => {
    const [article, setArticle] = useState(null)
    const [buttonText, setButtonText] = useState("Modifier")
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getArticleByID`,{id})
            .then(res => setArticle(res.data.result[0]))
            .catch(err => console.log(err))
        
    },[id])
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
            setArticle({...article, [name]:value})
            setButtonText("enregistrer les modifications")
        }
    }
    
    const submit = (e) =>{
        e.preventDefault()
        if(inputCheck(article.title) && inputCheck(article.descriptif)){
            axios.post(`${BASE_URL}/editArticle`,{...article})
            .then(res => {
                console.log(res)
                setArticle(null)
            })
            .catch(e => console.log(e))
        } 
        
        navigate("/allArticle")
    }
    
    return (
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
            {article !== null && (
                <form onSubmit={submit} className="form-demo">
                <fieldset>
                <legend>Vous souhaitez modifier cet article ?</legend>
                <label> Le titre : </label>
                    <input className="form-input" type="text" placeholder='title' name='title' onChange={handleChange} value={article.title} />
                <label> La description : </label>   
                    <input className="form-input" type="text" placeholder='descriptif' name='descriptif' onChange={handleChange} value={article.descriptif} />
                 <label> Le prix : </label>   
                    <input className="form-input" type="number" placeholder='prix' name='prix' onChange={handleChange} value={article.prix} />
                 
                    <input className="form-submit" type='submit' placeholder='modifier' value={buttonText} />
                
                </fieldset>
                </form>
            )}
            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </Fragment>
    )
}

export default EditArticle