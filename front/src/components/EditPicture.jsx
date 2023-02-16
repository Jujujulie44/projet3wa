import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"

const EditPicture = () => {
    const {id} = useParams()
    
    const submit = (e) => {
        e.preventDefault()
        const dataFile = new FormData();
        const files = {...e.target.image.files};
            
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('product_id', id)

        
        axios.post(`${BASE_URL}/editPictureById`,dataFile)
            .then(res => console.log(res))
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