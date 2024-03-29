import axios from "axios"
import {useState, Fragment} from "react";
import {BASE_URL} from '../tools/constante.js';
import inputCheck from "../tools/inputLength.js";
import { useNavigate } from "react-router-dom";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import arabesqueAdmin from "../image/arabesqueAdmin.png"; 

const AddArticle = ()=> {
    const [addArticleData, setAddArticleData]= useState ({
        title:'', 
        descriptif:'', 
        prix:0
    
    })
    
    const onClick = () => {
      
      navigate('/profil');
    };
    
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        
            setAddArticleData({...addArticleData, [name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(addArticleData.title) && inputCheck(addArticleData.descriptif)){
            const dataFile = new FormData();
            const files = {...e.target.image.files};
            
            dataFile.append('files', files[0], files[0].name)
            dataFile.append('title', addArticleData.title)
            dataFile.append('descriptif', addArticleData.descriptif)
            dataFile.append('prix', addArticleData.prix)
            
            
            axios.post(`${BASE_URL}/addArticle`,dataFile)
    }
        navigate("/allArticle")
    }
    
    return(
        <Fragment>
            <img src={decorationHautDroit} className="decorationright" alt="décoration haut de page" />
            <div className="clear"></div>
            <h2 className="adminStyle"> Vous êtes sur votre interface admin </h2>
            
                <form className="form-demo" onSubmit={submit} encType="multipart/form-data">
                    <fieldset>
                      <legend>
                        Vous souhaitez ajouter un article ?
                      </legend>
                      <label className="form-label">Ajouter une image :</label>
                      <input type='file' name='image' />
                      <label>Ajouter un produit : </label>
                      <input type='text' placeholder='titre du produit' name='title' onChange={handleChange} value={addArticleData.title} />
                      <label>Concernant le produit : </label>
                      <input type='text' placeholder='description du produit' name='descriptif' onChange={handleChange} value={addArticleData.descriptif} />
                      <label>Son prix : </label>
                      <input type='number' name='prix' onChange={handleChange} value={addArticleData.prix} />
                      <input className="form-submit" placeholder='Ajouter' type='submit' />
                    </fieldset>
                </form>
                <div  className="btn-product" >
	    		    <button type="button"  onClick={onClick}> retour </button>
	    	    </div>
                <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
            <img src={decorationBasGauche} className="decoration" alt="décoration bas de page" />
        </Fragment>
    )

}

export default AddArticle