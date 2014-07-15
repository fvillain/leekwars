global CITATIONS = [
   "Qu'est ce qu'ils foutent ces cons de Saxons ?",
   "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe.",
   "J'suis chef de guerre moi, j'suis pas là pour agiter des drapeaux et jouer d'la trompette...",
   "Mais j'ai pas l'temps ! De faire de la broderie, maintenant ! J'vous dis qu'on est en train de se prendre une peignée !",
   "Je vais tout casser, ici, MOI! Y va rester un tas de caaaailloux, comme ça! Je veux l'or, tout l'or sinon c'est la guerre !",
   "Cette fois-ci, on part avec les femmes ! HAHAAAHA !!!!",
   "En garde, ma biquette ! Je m’en vais te découper le gras du cul, ça t’fera ça de moins à trimbaler !",
   "Je préfère vous tuer de mes mains plutôt que de vous perdre.",
   "Si on faisait le coup du bouclier humain ?",
   "J'voudrais pas faire ma raclette, mais la soirée s'annonce pas super.",
   "Non, vous, vous vous maravez. Quand on a pas de technique, il faut y aller à la zob.",
   "SI VOUS VOULEZ QU'ON SORTE LES PIEDS DEVANT, FAUDRA NOUS PASSER SUR L'COOOORPS !",
   "Bon ça suffit maintenant ! Vous voulez qu'j'me foute en rogne comme un enseignant ?",
   "On a une nouvelle technique de combat : on se bat à moitié à mains nues, et à moitié avec du calcium."   
];


/*
* Return a random quote from the CITATION global variable
*
* Level: 1
* Coeur: 1
*/
function randomCitation()
{
   var index = randFloat(0, count(CITATIONS));
   index = floor(index);
   return CITATIONS[index];
}
/*
* Make your leek say a random citation
*
* Level: 1
* Coeur: 1
*/
function randomTaunt()
{ 
	if( getTP() > 1 ) { 
		say(randomCitation()); 
	} 
}
/*
* Say a random citation on victory, if enough TP
*
* Level: 1
* Coeur: 1
*/
function TauntOnVictory(enemy) 
{ 
	if(getLife(enemy) <= 0 && getTP() >= 1){ 
		say(randomCitation());
	}
}