import axios from "axios"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {BASE_URL} from "../tools/constante.js"

const Article = () => {
    const [article, setArticle] = useState([])
    const {id} = useParams()
    console.log(article)
    
    useEffect(() => {
       axios.post(`${BASE_URL}/articleDetail`,{id})
       .then(res => {
           setArticle(res.data.result)
       })
       .catch(err => console.log(err))
    },[id])
    
    return(
        <div>
        {article.map((item, i) => {
            return(
                <div key={i}>
                    <p>title: {item.title}</p>
                    <p>descriptif: {item.descriptif}</p>
                    <p>prix: {item.prix}</p>
                    
                </div>
            )
        })}
        </div>   
    )
}

export default Article