import {useState, useEffect, Fragment} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"

const EditArticle = () => {
    const [article, setArticle] = useState(null)
    const [buttonText, setButtonText] = useState("Modifier")
    const {id} = useParams()
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getArticleByID`,{id})
            .then(res => setArticle(res.data.result[0]))
            .catch(err => console.log(err))
        
    },[id])
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setArticle({...article, [name]: value})
        setButtonText("enregistrer les modifications")
    }
    
    const submit = (e) =>{
        e.preventDefault()
        axios.post(`${BASE_URL}/editArticle`,{...article})
    } 
    
    return (
        <Fragment>
            {article !== null && (
                <form onSubmit={submit}>
                    <input type="text" placeholder='title' name='title' onChange={handleChange} value={article.title} />
                    <input type="text" placeholder='descriptif' name='descriptif' onChange={handleChange} value={article.descriptif} />
                    <input type="text" placeholder='prix' name='prix' onChange={handleChange} value={article.prix} />
                    <input type='submit' placeholder='modifier' value={buttonText} />
                </form>
            )}
        </Fragment>
    )
}

export default EditArticle