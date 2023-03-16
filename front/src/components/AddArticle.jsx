import axios from "axios"
import {useState} from "react";
import {BASE_URL} from '../tools/constante.js';
import inputCheck from "../tools/inputLength.js";
import { useNavigate } from "react-router-dom";

const AddArticle = ()=> {
    const [addArticleData, setAddArticleData]= useState ({
        title:'', 
        descriptif:'', 
        prix:0
    
    })
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
            setAddArticleData({...addArticleData, [name]:value})
        }
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
        <form onSubmit={submit} encType="multipart/form-data">
            <h1>Ajouter une image : </h1>
            <label name='image'>
                <input type='file' name='image'/>
            </label>
            
            <h1>Ajouter un produit : </h1>
            <label> nom du produit
                <input type='text' placeholder='title' name='title' onChange={handleChange} value={addArticleData.title} />
            </label>
            
            <h1>Concernant le produit : </h1>
            <label> Description du produit
                <input type='text' placeholder='descriptif' name='descriptif' onChange={handleChange} value={addArticleData.descriptif} />
            </label>
            
            <h1>Indiquer le prix du produit :</h1>
            <label> Ajouter un prix
                <input type='number' placeholder='prix' name='prix' onChange={handleChange} value={addArticleData.prix} />
            </label>   
            <input type='submit' />
            
        </form>    
    )

}

export default AddArticle