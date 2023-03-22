import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Fragment} from "react";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";


const SuccessCommande = () => {
   const [showAlert, setShowAlert] = useState(true); // Gestion de l'état de l'alerte
   const navigate = useNavigate()
   
   const onClick = () => {
      setShowAlert(false);
      navigate('/');
    };
   
  return (
    <Fragment>
    <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
      <div className="clear"></div>
      <div>
        {showAlert && (
          <div  role="alert">
            <h2 className="successCommande">Merci pour votre confiance. </h2>
            <h2 className="successCommande">Votre commande a été traitée avec succès</h2>
          <div  className="btn-product" >
            <button type="button" data-dismiss="alert" aria-label="Close" onClick={onClick}>
              <span aria-hidden="true">Retour à l'accueil</span>
            </button>
          </div>
          </div>
        )}
      </div>
      <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
      <div className="clear"></div>
    </Fragment>
  ); 
}

export default SuccessCommande