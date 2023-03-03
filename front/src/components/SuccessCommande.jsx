import {useState} from "react";
import { useNavigate } from "react-router-dom";

const SuccessCommande = () => {
   const [showAlert, setShowAlert] = useState(true); // Gestion de l'état de l'alerte
   const navigate = useNavigate()
   
   const handleClick = () => {
      setShowAlert(false);
      navigate('/');
    }
   
  return (
    <div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          <p>Votre commande a été traitée avec succès!</p>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={handleClick}>
          <span aria-hidden="true">Retour à l'accueil</span>
          </button>
        </div>
      )}
    </div>
  ); 
}

export default SuccessCommande