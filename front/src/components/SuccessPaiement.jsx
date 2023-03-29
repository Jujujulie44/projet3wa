
import { useNavigate } from "react-router-dom";
import {Fragment} from "react";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import cartesBancaires from "../image/cartesBancaires.png";

const SuccessPaiement = () => {
   const navigate = useNavigate()
   
   const onClick = () => {
      
      navigate("/SuccessCommande")
    };
   
   
  return (
    <Fragment>
    <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
      <div className="clear"></div>
        

            <h2 className="adminStyle">Finalisez votre Commande</h2>
            <form className="form-demo">
                <fieldset>
                    <legend>Encore quelques détails</legend>
                    <label>Votre nom :</label>
                    <input className="form-input"  type='text' name='nom' placeholder='Nom' />
                    <label>Votre prénom :</label>
                    <input className="form-input"  type='text' name='prénom' placeholder='Prénom' />
                    <label>Où souhaitez-vous votre consultation ?</label>
                    <input type="checkbox" name="au cabinet"  value="cabinet"/><label>Au cabinet</label>
                    <input type="checkbox" name="au cabinet"  value="visio"/><label>En visio</label>
                    <input type="checkbox" name="au cabinet"  value="telephone"/><label>Par téléphone</label>
                </fieldset>
                
             </form>
                <h2 className="adminStyle">Le paiement</h2>
            <form className="form-demo">
                <fieldset>
                    <legend>Coordonnées bancaires :</legend>
                    <img src={cartesBancaires}  className="cartesBancaires"  alt="Cartes bancaires"/>
                    <div className="clear"></div>
                    <label>N° de la carte bancaire</label>
                    <input className="form-input"  type='number' name='N° de carte' placeholder='**** **** **** ****' />
                    <label>Date d'expiration :</label>
                    <input className="form-input"  type='date' name='date'/>
                    <label>Code de la carte :</label>
                    <input className="form-input"  type='number' name='Code de la carte' placeholder='CVC'/>
                    
                    
                    <div  className="btn-product" >
                 <button type="button"  onClick={onClick}>Valider ma commande </button>
                </div>
                </fieldset>
                
            </form>
      <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
      <div className="clear"></div>
    </Fragment>
  ); 
  
}

export default SuccessPaiement