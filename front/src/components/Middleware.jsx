import {useContext, useEffect, useState, Fragment} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ReducerContext } from "../reducer/reducer.js";
import { userPath, adminPath } from '../config/path.js'

const Middleware = ({children}) => {
    const [state, dispatch] = useContext(ReducerContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const location = useLocation()
    const currentPath = location.pathname

    useEffect(() => {
        if(userPath.includes(currentPath) && !state.login){
            console.log("not user")
            navigate('/')
        }

        if(adminPath.includes(currentPath) && !state.admin){
            console.log("not admin")
            navigate('/')
        }
        
        setShow(true)
    }, [currentPath]);

    return(
        <Fragment>
            {show && children}
        </Fragment>
    )
}

export default Middleware