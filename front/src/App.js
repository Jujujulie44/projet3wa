import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import UploadFile from "./components/UploadFile";

import AddArticle from "./components/AddArticle";
import AllArticle from "./components/AllArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";


import Error404 from "./components/Error404";


function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/uploadFile" element={<UploadFile />} />
                
                <Route path="/addArticle" element={<AddArticle />} />
                <Route path="/allArticle" element={<AllArticle />} />
                <Route path="/editArticle/:id" element={<EditArticle />} />
                <Route path="/article/:id" element={<Article />} />
                
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
