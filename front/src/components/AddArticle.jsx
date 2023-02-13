import axios from "axios"
import {useState} from "react";
import {BASE_URL} from '../tools/constante.js';
import inputCheck from "../tools/inputLength.js";


const AddArticle = ()=> {
    const [addArticleData, setAddArticleData]= useState ({
        title:'', 
        descriptif:'', 
        prix:0
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
            setAddArticleData({...addArticleData, [name]:value})
        }
    }   
    
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(addArticleData.title) && inputCheck(addArticleData.descriptif)){
            axios.post(`${BASE_URL}/addArticle`,{
               title : addArticleData.title,
               descriptif: addArticleData.descriptif,
               prix: addArticleData.prix,
            })
        }
    }
    
    return(
        <form onSubmit={submit}>
            <input type='text' placeholder='title' name='title' onChange={handleChange} value={addArticleData.title} />
            <input type='text' placeholder='descriptif' name='descriptif' onChange={handleChange} value={addArticleData.descriptif} />
            <input type='number' placeholder='prix' name='prix' onChange={handleChange} value={addArticleData.prix} />
            <input type='submit' />
            
        </form>    
    )

}

export default AddArticle