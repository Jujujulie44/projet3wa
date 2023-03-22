import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { useNavigate } from "react-router-dom";
import {Fragment} from "react";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";


const EditPicture = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    
    
    const submit = (e) => {
        e.preventDefault()
        const dataFile = new FormData();
        const files = {...e.target.image.files};
            
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('product_id', id)

        
        axios.post(`${BASE_URL}/editPictureById`,dataFile)
            .then(res => navigate(`/allArticle`))
            .catch(err => console.log(err))
        }
        
        
        
    
    return (
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
            <form className="form-demo" onSubmit={submit} encType="multipart/form-data">
            <fieldset>
                <legend>Vous souhaitez modifier l'image ?</legend>
                <input className="form-input" type='file' name="image" />
                <input className="form-submit" type='submit' />
            </fieldset>  
            </form>
            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>

        </Fragment>
        
    )
}

export default EditPicture