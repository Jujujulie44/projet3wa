import {useState} from "react";

const SuccessCommande = () => {
   const [showAlert, setShowAlert] = useState(true); // Gestion de l'état de l'alerte

  return (
    <div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          <p>Votre commande a été traitée avec succès!</p>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  ); 
}

export default SuccessCommande