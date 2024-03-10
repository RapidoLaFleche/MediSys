let compteurspace = document.getElementById("firstcompteurelement");
let compteur = 0;

function affichageComplexe(nb) {
    if (nb >= 1000) {
        let millier = nb / 1000;
        result = millier + "K";
    }
    else {
        result = nb;
    }
    return result;
}

function incrementCompteurspace() {
    if (compteur < 1200) {
        compteur += 4;
        compteurspace.textContent = affichageComplexe(compteur);

        if (compteur > 1200) {
            compteur = 1200;
            compteurspace.textContent = affichageComplexe(compteur);
        }
    }
}
incrementCompteurspace();

setInterval(incrementCompteurspace, 1);


let secondcompteurspace = document.getElementById("secondcompteurelement");
let secondcompteur = 0;

function secondincrementCompteurspace() {
    if (secondcompteur < 1000) {
        secondcompteur += 4;
        secondcompteurspace.textContent = affichageComplexe(secondcompteur);

        if (secondcompteur >= 1000) {
            secondcompteur = 1000;
            secondcompteurspace.textContent = affichageComplexe(secondcompteur);
        }
    }
}
secondincrementCompteurspace();

setInterval(secondincrementCompteurspace, 1);


let thirdcompteurspace = document.getElementById("thirdcompteurelement");
let thirdcompteur = 0;

function thirdincrementCompteurspace() {
    if (thirdcompteur < 300000) {
        thirdcompteur += 1000;
        thirdcompteurspace.textContent = affichageComplexe(thirdcompteur);

        if (thirdcompteur >= 300000) {
            thirdcompteur = 300000;
            thirdcompteurspace.textContent = affichageComplexe(thirdcompteur);
        }
    }
}
thirdincrementCompteurspace();

setInterval(thirdincrementCompteurspace, 1);