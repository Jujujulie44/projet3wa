import {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import decorationBasGauche from "../image/decorationBasGauche.png";
import photoPortrait from "../image/PhotoPortrait.jpg";
import arabesqueAdmin from "../image/arabesqueAdmin.png";

const Home = () => {
	
	 const navigate = useNavigate()
	
	const onClick = () => {
      
      navigate('/userArticle');
    };


    return(
        <Fragment>
	        <blockquote lang="fr">
				<q>&nbsp;On ne voit bien qu'avec le coeur, l'essentiel est invisible pour les yeux&nbsp;</q>
				<cite className="auteur">Antoine de saint Exupéry</cite>
			</blockquote>
			<img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
			<Fragment>
	    		<article>
	    			<h2 className="diane">Qui je suis ?</h2>
	    			<div >
	    				<img src={photoPortrait}  className="photo-portrait"  alt="Cartomancienne"/>
	    			</div>
	    			<h2 className="diane">Je suis Diane</h2>
	    			<div className="presentation">
	        			<p> Cartomancienne, je suis passionnée et profondément terrienne.
	        			J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.</p>
	        			<p> toujours pour vocation : <strong>L'Humain.</strong></p>
	        		<blockquote lang="fr">		
	        			<q>&nbsp;Dans toute sa splendeur et son lot de complexités, l'altruisme fait partie de mon ADN.&nbsp;</q>
	        		</blockquote>
	    		    </div>
					<h2>Pourquoi Ficelles et Messages ?</h2>
					<div className="presentation2">	
						<p> L'Art de la <strong>cartomancie</strong> est un leg familial. Il s'impose comme une destinée. Un chemin évident où nous sommes guidés par des forces inexplicables. 
	        			Issue d'une famille où l'ésotérisme et la spiritualité font partie intégrante de nos vies, j'ai étudié dès le plus jeune âge d'abord le Tarot de Marseille et Celtique, 
	        			ainsi que les Oracles Gé et de Belline.</p>
					</div>
					<div className="presentation3">
						<p>Vous êtes peut- être à la croisée des chemins et vos blocages résistent, conspirent contre vous.</p>
						<p>Vous avez besoin d'être balisés, d'être guidés :</p>
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

export default Home