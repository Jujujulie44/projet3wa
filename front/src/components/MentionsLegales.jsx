import { useNavigate } from "react-router-dom";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import {Fragment} from "react";

const MentionsLegales = () => {
    const navigate = useNavigate();
    
    
    	const onClick = () => {
      
      navigate('/');
    };
    
    return(
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
        <h2>Mentions Légales</h2>
        <div className="mentions-legales">
            <p>Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, 
                dite L.C.E.N, nous portons à la connaissance des utilisateurs et visiteurs du site "Ficelles et Message, les informations suivantes : </p>
        </div>
        <h4>Edition du site : </h4>
        <div className="mentions-legales">
            <p>Le présent site, accessible à l’URL : http://julieandre.ide.3wa.io:3000  est édité par :
                Julie André, résidant au 2 rue du Haut Launay 4300 Nantes</p>
        </div>
        <h4>Le sites Internet : </h4>
        <div className="mentions-legales">
            <p>Le Site est hébergé par la société 3WA</p>
        </div>
        <h4>Responsable de publication : </h4>
        <div className="mentions-legales">
            <p>Le Directeur de la publication du Site est Julie André.</p>
        </div>
        <h4>Me contacter : </h4>
        <div className="mentions-legales">
            <p>- Par téléphone : 06-07-08-09-00</p>
            <p>- Par email : andre@julie.com</p>
            <p>- Par courrier : 13 rue du Haut Launay, 44300 Nantes</p>
        </div>
        <h4>Protection et gestion des données personnelles : </h4>
        <div className="mentions-legales">
            <p>En France, les données personnelles sont notamment protégées par la loi n° 78 -87 du 6janvien 1978, la loi n° 2004 -801 du 6 août 2004, l'article L.226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
        </div>
        <h4>Limitation de responsabilité : </h4>
        <div className="mentions-legales">
            <p>Les mentions légales définies sur cette page s'appliquent à l'ensemble du présent site internet et sont succeptibles d'évoluer sans préavis. L'utilisateur du site est donc invité à les consulter régulièrement afin d'en prendre connaissance.</p>
            <p> Ficelles et Messages ne commercialise pas vos données personnelles qui sont uniquement utilisées par  nécessité de connexion et d'inscription.</p>
        </div>
        <h4>images publiques : </h4>
        <div className="mentions-legales">
            <p>Toutes les images proviennent des sites : Pixabay, Font Awesome, FreePNG</p>
        </div>
        <div  className="btn-product" >
	    	<button type="button"  onClick={onClick}>Retour à l'accueil </button>
	    </div>
        <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </Fragment>
        )
}

export default MentionsLegales
