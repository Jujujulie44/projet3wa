import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddArticle = ()=> {
    const [addArticleData, setAddArticleData]= useState ({
        title:'', 
        descriptif:'', 
        prix:0
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setAddArticleData({...addArticleData,[name]:value})
    }
        
    
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/addArticle`,{
           title : addArticleData.title,
           descriptif: addArticleData.descriptif,
           prix: addArticleData.prix,
        })
    }
    
    return(
        <form onSubmit={submit}>
            <input type='text' placeholder='title' name='title' onChange={handleChange} value={addArticleData.title} />
            <input type='text' placeholder='descriptif' name='descriptif' onChange={handleChange} value={addArticleData.descriptif} />
            <input type='text' placeholder='prix' name='prix' onChange={handleChange} value={addArticleData.prix} />
            <input type='submit' />
            
        </form>    
    )

}

export default AddArticle