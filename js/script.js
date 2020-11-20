
document.addEventListener("DOMContentLoaded", function(event) {

    //Le jeu
    class Jeu {
        constructor(_idSvg, _idPointage) {
            console.log("creation jeu");

            this.s = Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);

            this.grandeurCarre = 20;
            this.grandeurGrille = 15;
        }

        nouvellePartie() {
            this.affichagePointage(1);

            this.pomme = new Pomme();
            this.serpent = new Serpent();
        }


        finPartie() {

        }

        affichagePointage(_lePointage) {
            this.sortiePointage.innerHTML = _lePointage;
        }
    }


    //Le serpent
    class Serpent{
        constructor()
        {
            console.log("creation serpent");
        }
    }

    //La pomme
    class Pomme{
        constructor() {
            console.log("creation pomme");
        }

    }

    var unePartie=new Jeu("#jeu", "#pointage");

    var btnJouer=document.querySelector("#btnJouer");
    btnJouer.addEventListener('click', nouvellePartie);

    function nouvellePartie(){
        unePartie.nouvellePartie();
    }
});