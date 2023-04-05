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
			<div className="clear"></div>
			<Fragment>
	    		<article>
	    			<h2 className="aboutUs">Guidance Au Cabinet : </h2>
	    			<div >
	    				<img src={voyanceAuCabinet}  className="photo-portrait"  alt="voyance au cabinet"/>
	    			</div>
	    			<div className="article-1">
	        			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	        			<p>toujours pour vocation : <strong>L'Humain.</strong></p>
	    		    </div>
				</article>
				<article>
				    <h2 className="aboutUs">Guidance par téléphone : </h2>
				    <div >
	    				<img src={voyanceParTelephone}  className="photo-portrait"  alt="voyance par téléphone"/>
	    			</div>
	    			<div className="article-1">
	        			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	        			<p> Lorem Ipsum is simply : <strong>Humani.</strong></p>
	    		    </div>
				</article> 
				
				<article>
					<h2 className="aboutUs">Guidance en visio : </h2>
					<div >
	    				<img src={voyanceEnVisio}  className="photo-portrait"  alt="voyance en visio"/>
	    			</div>
					<div className="article-1">
	        			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	        			<p> toujours pour vocation : <strong><em>L'Humain.</em></strong></p>
	    		    </div>
	    		</article>
	    		<img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
				<div className="clear"></div>
	    		<h2 className="adminStyle">Nos horaires d'ouverture : </h2>
	    		<div  className="tableauDeBord"></div>
	    		<table>
	    			<tbody>
						<tr>
							<th></th>
							<th>Au cabinet</th>
							<th>Par téléphone</th>
							<th>En visio</th>
						</tr>
						<tr>
							<td>Lundi</td>
							<td>de 10:30 à 12:30</td>
							<td>de 14:30 à 18:00</td>
							<td></td>
						</tr>
						<tr>
							<td>Mardi</td>
							<td>de 10:30 à 12:30</td>
							<td>de 14:30 à 18:00</td>
							<td></td>
			
						</tr>
						<tr>
							<td>Mercredi</td>
							<td></td>
							<td>de 10:30 à 12:30</td>
							<td>de 14:30 à 18:00</td>
						</tr>
						<tr>
							<td>Jeudi</td>
							<td></td>
							<td>de 10:30 à 12:30</td>
							<td></td>
						</tr>
						<tr>
							<td>Vendredi</td>
							<td>de 10:30 à 12:30</td>
							<td>de 14:30 à 18:00</td>
							<td></td>
						</tr>
					</tbody>
				</table>	    		
				
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