import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { useNavigate } from "react-router-dom";


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
        <form onSubmit={submit} encType="multipart/form-data">
            <input type='file'name="image" />
            <input type='submit' />
        </form>
    )
}

export default EditPicture