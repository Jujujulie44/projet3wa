
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"

 const Footer = () => {
   
    
     return(
             <footer>
                <div class="foot">
            	<h3>Contact</h3>
	            <address>
	            	<p>Mail : <a href="mailto:ficellesetmessages@gmail.com" target="_blank">ficellesetmessages@gmail.com</a></p>
	            	<p>Téléphone : <a href="tel:+336675360419" target="_blank">06 75 46 27 69</a></p>
	            	<p>Adresse : Rue de Brocéliande 44300 NANTES</p>
	            	<h3>Réseaux sociaux</h3>
	            	<div class="networks">
		            	<a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
						<a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
	            	</div>
	            </address>
            </div>
             </footer>
         )
 }

export default Footer