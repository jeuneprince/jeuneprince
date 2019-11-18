
//      ========= Exercice 4 partie 1 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var note;
var total;

var moyenne;
//ETAPE 2 INITIALISATION DES VARIABLES
moyenne=0;
total=0;

//ETAPE 3 RESOLUTION ET AFFICHAGE
for (i=1;i<11;i++) {
    note=Number(prompt("Entrez la note de l'etudiant"));
    total=total+note;
    document.write("La note du " +i+"e etudiant est de "+note);
    document.write("<br>");
}
moyenne=total/10;
document.write("<br>");
document.write("Cela fait une moyenne de: " +moyenne);
/*



//      ========= Exercice 4 partie 2 ============      //
//ETAPE 1 DECLARATION DE VARIABLES
var note= 60;
var total;
var moyenne;

//ETAPE 2 INITIALISATION DES VARIABLES
cpt=0;
total=0;
moyenne=0;

//ETAPE 3 RESOLUTION ET AFFICHAGE

while (note>=60) {
    note=Number(prompt("Donnez la note"));
    if (note>=60){
        total=total+note;
        document.write("la note de l'etudiant "+cpt+" est: "+note);
        document.write("<br>");
        cpt++;
    }
    else {

    }

}
document.write("<br>");
moyenne=total/cpt;
document.write(moyenne);

 */