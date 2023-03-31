import {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import decorationBasGauche from "../image/decorationBasGauche.png";
import voyanceAuCabinet from "../image/voyance-en-cabinet.jpg";
import voyanceParTelephone from "../image/voyance-par-telephone.jpg";
import voyanceEnVisio from "../image/voyance-en-visio.jpg";
import arabesqueAdmin from "../image/arabesqueAdmin.png";

const AboutUs = () => {
	
	 const navigate = useNavigate()
	
	const onClick = () => {
      
      navigate('/userArticle');
    };


    return(
        <Fragment>
	        <h2 className="adminStyle">Plusieurs méthodes de consultations s'offrent à vous : </h2>
			<img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
			<Fragment>
	    		<article>
	    			<h2 className="diane">Guidance Au Cabinet : </h2>
	    			<div >
	    				<img src={voyanceAuCabinet}  className="photo-portrait"  alt="voyance au cabinet"/>
	    			</div>
	    			<div className="presentation">
	        			<p> Cartomancienne, je suis passionnée et profondément terrienne.
	        			J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.
	        			toujours pour vocation : <strong>L'Humain.</strong>
	        			</p>
	    		    </div>
				</article>
				<div className="clear"></div>
				<article>
				    <h2 className="diane">Guidance par téléphone : </h2>
				    <div >
	    				<img src={voyanceParTelephone}  className="photo-portrait"  alt="voyance par téléphone"/>
	    			</div>
	    			<div className="presentation">
	        			<p> Cartomancienne, je suis passionnée et profondément terrienne.
	        			J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.</p>
	        			<p> toujours pour vocation : <strong>L'Humain.</strong></p>
	    		    </div>
				</article> 
				
				<article>
					<h2 className="diane">Guidance en visio : </h2>
					<div >
	    				<img src={voyanceEnVisio}  className="photo-portrait"  alt="voyance en visio"/>
	    			</div>
					<div className="presentation">
	        			<p> Cartomancienne, je suis passionnée et profondément terrienne.
	        			J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.</p>
	        			<p> toujours pour vocation : <strong>L'Humain.</strong></p>
	    		    </div>
	    		</article>
	    		
	    		<div  className="btn-product" >
	    			<button type="button"  onClick={onClick}> voir les tirages </button>
	    		</div>
    			<img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
				<div className="clear"></div>
		</Fragment>  	
    </Fragment>
    )
}

export default AboutUs