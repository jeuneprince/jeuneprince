//ETAPE 1 DECLARATION DE VARIABLES
var interne;
var externe;
var resultat;
//ETAPE 2 INITIALISATION DES VARIABLES
resultat=15;

//ETAPE 3 RESOLUTION ET AFFICHAGE
for (externe=0;externe<11;externe++){
    for (interne=0;interne<21;interne++) {
        document.write(+resultat + " ");
        resultat = resultat + 4;

    }
    document.write("<br>");
    resultat=resultat-64;
}