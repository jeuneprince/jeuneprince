//      ========= Exercice 4 partie 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var note;
var total;
var moyenne;
//ETAPE 2 INITIALISATION DES VARIABLES
cpt=0;
total=0;
moyenne=0;

//ETAPE 3 RESOLUTION ET AFFICHAGE

do {
    note=Number(prompt("Donnez la note"));
    if (note>=60){
        total=total+note;
        document.write("la note de l'etudiant "+cpt+" est: "+note);
        document.write("<br>");
        cpt++;
    }
    else {

    }

}while (note>=60)
document.write("<br>");
moyenne=total/cpt;
document.write(moyenne);

