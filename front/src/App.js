import './App.css';
import Router from "./components/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}

export default App;