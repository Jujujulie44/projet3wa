import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import Login from "../components/Login.jsx"
import AddUser from "../components/AddUser.jsx"
import Profil from "../components/Profil.jsx"
import UploadFile from "../components/UploadFile";
import Deconnexion from "../components/Deconnexion";
import AddArticle from "../components/AddArticle";
import AllArticle from "../components/AllArticle";
import Article from "../components/Article";
import EditArticle from "../components/EditArticle";
import Users from "../components/Users";
import EditUser from "../components/EditUser";
import EditPicture from "../components/EditPicture"; 
import UserArticle from "../components/UserArticle";
import Cart from "../components/Cart";
import UpDateUser from "../components/UpDateUser";
import SuccessCommande from "../components/SuccessCommande";
import MentionsLegales from "../components/MentionsLegales";
import SuccessPaiement from "../components/SuccessPaiement";
import AboutUs from "../components/AboutUs.jsx"

const routes = [
    {path:"/", component:<Home />},
    {path:"/login", component:<Login />},
    {path:"/addUser", component:<AddUser />},
    {path:"/profil", component:<Profil />, auth:"user"},
    {path:"/uploadFile", component:<UploadFile />, auth:"admin"},
    {path:"/logout", component:<Deconnexion />},
    {path:"/addArticle", component:<AddArticle />, auth:"admin"},
    {path:"/allArticle", component:<AllArticle />, auth:"admin"},
    {path:"/article/:id", component:<Article />, auth:"admin"},
    {path:"/editArticle/:id", component:<EditArticle />, auth:"admin"},
    {path:"/users", component:<Users />, auth:"admin"},
    {path:"/user/:id", component:<EditUser />, auth:"admin"},
    {path:"/editPicture/:id", component:<EditPicture />, auth:"admin"},
    {path:"/UserArticle", component:<UserArticle />},
    {path:"/Cart", component:<Cart />, auth:"user"},
    {path:"/UpDateUser", component:<UpDateUser />, auth:"user"},
    {path:"/SuccessCommande", component:<SuccessCommande />, auth:"user"},
    {path:"/MentionsLegales", component:<MentionsLegales />},  
    {path:"/SuccessPaiement", component:<SuccessPaiement />, auth:"user"},
    {path:"/AboutUs", component:<AboutUs />},
    
    {path:"*", component:<Error404 />}
    
]

export default routes