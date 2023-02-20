import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import UploadFile from "./components/UploadFile";
import Deconnexion from "./components/Deconnexion";

import AddArticle from "./components/AddArticle";
import AllArticle from "./components/AllArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";

import AddUser from "./components/AddUser";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import EditPicture from "./components/EditPicture"; 


import Error404 from "./components/Error404";


function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/uploadFile" element={<UploadFile />} />
                <Route path="/logout" element={<Deconnexion />} />
                
                <Route path="/addArticle" element={<AddArticle />} />
                <Route path="/allArticle" element={<AllArticle />} />
                <Route path="/editArticle/:id" element={<EditArticle />} />
                <Route path="/article/:id" element={<Article />} />
                
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/:id" element={<EditUser />} />
                
                <Route path="/editPicture/:id" element={<EditPicture />} />
                
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
