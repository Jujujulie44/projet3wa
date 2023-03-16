import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Fragment} from "react";

const SuccessCommande = () => {
   const [showAlert, setShowAlert] = useState(true); // Gestion de l'état de l'alerte
   const navigate = useNavigate()
   
   const onClick = () => {
      setShowAlert(false);
      navigate('/');
    };
   
  return (
    <Fragment>
      <div>
        {showAlert && (
          <div  role="alert">
            <h1>Merci pour votre confiance ! </h1>
            <h2>Votre commande a été traitée avec succès !</h2>
          <div  className="btn-product" >
            <button type="button" data-dismiss="alert" aria-label="Close" onClick={onClick}>
              <span aria-hidden="true">Retour à l'accueil</span>
            </button>
          </div>
          </div>
        )}
      </div>
    </Fragment>
  ); 
}

export default SuccessCommande