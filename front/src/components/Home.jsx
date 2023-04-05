import {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import decorationBasGauche from "../image/decorationBasGauche.png";
import photoPortrait from "../image/PhotoPortrait.jpg";
import arabesqueAdmin from "../image/arabesqueAdmin.png";
import filRouge from "../image/fil-rouge.png";

const Home = () => {
	
	 const navigate = useNavigate()
	
	const onClick = () => {
      
      navigate('/userArticle');
    };


    return(
        <Fragment>
	        <blockquote className="citation "lang="fr">
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
	    	</article>
	    		<h2 className="diane">Je suis Diane</h2>
	    	<article className="article-1">
	        	<p> <strong>Cartomancienne</strong>, je suis passionnée et profondément terrienne.
	        	J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.</p>
	        	<p> toujours pour vocation : <strong>L'Humain.</strong></p>
		        <blockquote lang="fr">		
		        	<q>&nbsp;Dans toute sa splendeur et son lot de complexités, l'altruisme fait partie de mon ADN.&nbsp;</q>
		        </blockquote>
			</article>
			<h2>Pourquoi Ficelles et Messages ?</h2>
			<article className="article-2">
				<p>Selon la <em className="legende">légende japonaise</em> , nos vies sont reliées d'un fil rouge invisible et indestructible.
				Nos chemins sont parfois semés d'embûches  et il est difficile de renouer avec notre destinée.</p>
				<img src={filRouge}  className="filRouge"  alt="fil-Rouge"/>
				<div className="clear"></div>
				<p> L'Art de la <strong>cartomancie</strong> est un leg familial. Il s'impose comme une destinée. Un chemin évident où nous sommes guidés par des forces inexplicables. 
	        	Issue d'une famille où l'ésotérisme et la spiritualité font partie intégrante de nos vies, j'ai étudié dès le plus jeune âge d'abord le <strong>Tarot de Marseille</strong> et Celtique, 
	        	ainsi que les <strong>Oracles Gé</strong> et de <strong>Belline</strong>.</p>
			</article>
			<article className="article-3">
				<p>Vous êtes peut- être à la croisée des chemins et vos blocages résistent, conspirent contre vous</p>
			</article>
			<article className="article-4">
			<p>Vous avez besoin d'être balisés, d'être guidés :</p>
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