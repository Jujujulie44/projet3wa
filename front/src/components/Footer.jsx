import { NavLink } from "react-router-dom";
import {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons";


 const Footer = () => {
   
    
     return(
     	<Fragment>
             <footer>
                <div className="foot">
            		<h3>Contact :</h3>
		            <address>
		            	<p>Mail : <a href="mailto:ficellesetmessages@gmail.com" target="_blank">ficellesetmessages@gmail.com</a></p>
		            	<p>Téléphone : <a href="tel:+336675360419" target="_blank">06 75 46 27 69</a></p>
		            	<p>Adresse : Rue de Brocéliande 44300 NANTES</p>
		            	<h3>Réseaux sociaux :</h3>
		            		<div className="networks">
								<NavLink to="/"><FontAwesomeIcon icon={faFacebook} className="fa-brands" /></NavLink>
							 	<NavLink to="/"><FontAwesomeIcon icon={faInstagram} className="fa-brands" /></NavLink>
							</div>
							<div className="legal-notice">
    							<NavLink to="/MentionsLegales">Mentions légales</NavLink>
    						</div>
					</address>
		    	</div>
             </footer>
        </Fragment> 
         )
 }

export default Footer



