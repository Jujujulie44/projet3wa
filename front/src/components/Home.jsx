// import {BASE_URL} from "../tools/constante.js";
// import {NavLink} from "react-router-dom";
import {Fragment} from "react";
// import {StoreContext} from "../tools/context.js"; 
import photoPortrait from "../image/PhotoPortrait.jpg";


const Home = () => {
    return(
        <Fragment>
    
        <blockquote lang="fr">
			<q className="citation">&nbsp;On ne vois bien qu'avec le coeur, l'essentiel est invisible pour les yeux&nbsp;</q>
			<cite className="auteur">Antoine de saint Exupéry</cite>
		</blockquote>
		
		<Fragment>
    		<article className="container">
    		    <img src={photoPortrait} className="photo-portrait" alt="Cartomancienne"/>
    			<h2>Qui je suis ?</h2>
    			<div className="presentation">
        			<p> Cartomancienne, je suis passionnée et profondément terrienne.
        			J'ai exercé durant 20 ans comme assistante sociale auprès de public en grande difficulté.</p>
        					
        			<p> toujours pour vocation : L'Humain.</p>
        					
        			<h2> Dans toute sa splendeur et son lot de complexités, l'altruisme fait partie de mon ADN.</h2>
        					
        			<p> L'Art de la cartomancie est un leg familial. Il s'impose comme une destinée. Un chemin évident où nous sommes guidés par des forces inexplicables. 
        			Issue d'une famille où l'ésotérisme et la spiritualité font partie intégrante de nos vies, j'ai étudié dès le plus jeune âge d'abord le Tarot de Marseille et Celtique, 
        			ainsi que les Oracles Gé et de Belline.</p>
    		    </div>
    		</article>
		</Fragment>  	
    </Fragment>
    )
}

export default Home