
function estvalide(button){ 
    return (button.innerHTML.length == 0);
}

function setSymbol(btn,symbole){
    btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, currentTurn){
    if( pions[0].innerHTML == joueurs[currentTurn] &&
        pions[1].innerHTML == joueurs[currentTurn] &&
        pions[2].innerHTML == joueurs[currentTurn] )
        return true;

    if( pions[3].innerHTML == joueurs[currentTurn] &&
        pions[4].innerHTML == joueurs[currentTurn] &&
        pions[5].innerHTML == joueurs[currentTurn] )
        return true;

    if( pions[6].innerHTML == joueurs[currentTurn] &&
        pions[7].innerHTML == joueurs[currentTurn] &&
        pions[8].innerHTML == joueurs[currentTurn] )
        return true;

    if( pions[0].innerHTML == joueurs[currentTurn] &&
        pions[3].innerHTML == joueurs[currentTurn] &&
        pions[6].innerHTML == joueurs[currentTurn] )
        return true;

    if( pions[1].innerHTML == joueurs[currentTurn] &&
        pions[4].innerHTML == joueurs[currentTurn] &&
        pions[7].innerHTML == joueurs[currentTurn] )
        return true;

    if( pions[2].innerHTML == joueurs[currentTurn] &&
        pions[5].innerHTML == joueurs[currentTurn] &&
        pions[8].innerHTML == joueurs[currentTurn] )
        return true;

                    
    if( pions[0].innerHTML == joueurs[currentTurn] &&
        pions[4].innerHTML == joueurs[currentTurn] &&
        pions[8].innerHTML == joueurs[currentTurn] )
        return true;

        
    if( pions[2].innerHTML == joueurs[currentTurn] &&
        pions[4].innerHTML == joueurs[currentTurn] &&
        pions[6].innerHTML == joueurs[currentTurn] )
        return true;
}

 

function tableauEstPlein(pions){
    for(var i=0, len=pions.length; i<len; i++){
        if(pions[i].innerHTML.length == 0)
        return false;
    }

    return true;
}

var Afficheur = function(element){ 
    var display = element;

    function setText(message){
        display.innerHTML = message;
    }

    return {sendMessage: setText};
}

function main(){
    var pions = document.querySelectorAll("#jeu button");
    var joueurs = ['X','O'];
    var currentTurn = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#gameStatus"));

   
    afficheur.sendMessage("Le jeu peut démarrer. <br/> Joueur "+ joueurs[currentTurn] + " c'est votre tour.");

    for(var i=0, len = pions.length; i<len; i++){
        pions[i].addEventListener("click",function(){
            if(jeuEstFini)  
             return;

            if (!estvalide(this)){
                afficheur.sendMessage("Déplacement invalide !");
                alert("Déplacement invalide !");
                        }else{
                setSymbol(this, joueurs[currentTurn]);
                
                jeuEstFini = rechercherVainqueur(pions,joueurs, currentTurn);

                //le jeu est fini 'quelq'un a gagné)
                if(jeuEstFini){
                    afficheur.sendMessage("Joueur "+ joueurs[currentTurn] +" a gagné!<br/><a href=\"index.html\"> Rejouer</a>");
                    alert("Joueur "+ joueurs[currentTurn] +" a gagné!");
                    
                   // location.reload();
                    return;
                  
                }
                //Le jeu est fini (match nul)
                    if(tableauEstPlein(pions)){
                        afficheur.sendMessage("Match nul !!!");
                        alert("match nul");
                        return;
                    }
                //le jeu n'est pas encore fini
                
               currentTurn = currentTurn^1;
               afficheur.sendMessage("Joueur "+joueurs[currentTurn]+" à votre tour");
            
            }
            
          
                
        });
    }
}

 
main();