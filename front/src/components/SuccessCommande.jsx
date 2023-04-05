import {useState} from "react";
import {StoreContext} from "../tools/context.js";
import { useNavigate } from "react-router-dom";
import {useContext, Fragment} from "react";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import arabesqueAdmin from "../image/arabesqueAdmin.png";



const SuccessCommande = () => {
   const [showAlert, setShowAlert] = useState(true); // Gestion de l'état de l'alerte
   const navigate = useNavigate()
   const [state,_] = useContext(StoreContext)
   
   
   
   const onClick = () => {
      setShowAlert(false);
      navigate('/');
    };
   
  return (
    <Fragment>
    
    <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
      <div className="clear"></div>
      <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
      <div>
      {state.user.isLogged === true &&  showAlert && (
        
          <div  role="alert">
            <h2 className="userStyle">Merci pour votre confiance {state.user.prenom}. </h2>
            <h2 className="userStyle">Votre commande a été traitée avec succès</h2>
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