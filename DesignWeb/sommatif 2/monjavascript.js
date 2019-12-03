/*
//      ========= Exercice 1 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var resultat;
var j;
//ETAPE 2 INITIALISATION DES VARIABLES
resultat=0;
nb=0;

//ETAPE 3 RESOLUTION ET AFFICHAGE
document.write("Nb spectacteur Prix billets Revenu");
document.write("<br>")
for (j=0;j<160;j+=10){
    for (i=0;i<1;i++){
        resultat=j*3;
        document.write("-------- "+ j+ " ----------- 3 -----------" +resultat);
    }
    document.write("<br>");
}

 */
/*
//      ========= Exercice 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var resultat;
var j;
var esp;
var count;
//ETAPE 2 INITIALISATION DES VARIABLES
resultat=0;
esp="-";
count = 30;

//ETAPE 3 RESOLUTION ET AFFICHAGE
for (j=0;j<7;j++){
    if (j===0){
        document.write("______________________________");
    }
    else if (j===1){
        document.write("_________________________");
    }
    else if (j===2){
        document.write("____________________");
    }
    else if (j===3){
        document.write("_______________");
    }
    else if (j===4){
        document.write("__________");
    }
    else if (j===5){
        document.write("_____");
    }
    else if (j===6){
        document.write("");
    }
    for (i=0;i<6;i++){

        document.write(resultat+ " ");
        resultat= resultat + 10;

    }
    resultat= (resultat * 2) -20;
    document.write("<br>");
}

 */


/*
//      ========= Examen 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var nom;
var presence;
var nbCoups;
var moyenne;
var continuer;
var i;
var total;
//ETAPE 2 INITIALISATION DES VARIABLES
i=1;
moyenne=0;
total=0;
//ETAPE 3 RESOLUTION ET AFFICHAGE
do {
    nom=prompt("Quel est le nom du frappeur ?");
    presence=prompt("quel est le nombre de presence ?");
    nbCoups=prompt("Quel est le nombre de coups ?");
    moyenne=(nbCoups/presence)*1000;
    document.write("La moyenne " +i+ " est : "+moyenne);
    i++
    total+=moyenne;
    document.write("<br>");

    continuer=prompt("Voulez vous continuer ? tapez o pour oui et n'importe pour le reste ");

}while(continuer==='o');

document.write("Le total est : "+total);

 */
/*
//      ========= Position ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var nombre;
//ETAPE 2 INITIALISATION DES VARIABLES
nombre=Number(prompt("Donnez un nombre entre 1 et 9"));
//ETAPE 3 RESOLUTION ET AFFICHAGE
if (nombre===1){
    document.writeln("Le joueur est un lanceur\n");
}
else if (nombre===2){
    document.writeln("Le joueur est un receveur\n");
}
else if (nombre===3){
    document.writeln("Le joueur est un premier but\n");
}
else if (nombre===4){
    document.writeln("Le joueur est un deuxième but\n");
}
else if (nombre===5){
    document.writeln("Le joueur est un troisième but\n");
}
else if (nombre===6){
    document.writeln("Le joueur est un arrêt-court\n\n");
}
else if (nombre===7 || nombre===8 || nombre===9){
    document.writeln("Le joueur est un voltigeur\n");
}
else {
    document.writeln("Cette position n’existe pas");
}

 */
/*
//      ========= Exercice 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var j;
var res;
//ETAPE 2 INITIALISATION DES VARIABLES
res=2;
//ETAPE 3 RESOLUTION ET AFFICHAGE
for (i=1;i<4;i++){
    for (j=0;j<5;j++){
        document.write(res+ "  ");
       res=res*res;
    }
document.write("<br>");
        res=i+2;
}

 */

/*


//      ========= Exercice 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var n;
var i;
var res;
var j;
//ETAPE 2 INITIALISATION DES VARIABLES
n=4;
res=0
//ETAPE 3 RESOLUTION ET AFFICHAGE
for (j=0;j<7;j++){
    document.write("Bonjour variable " +n);
    for (i=1;i<5;i++){
        document.write("<br>");
        res=n*i;
        document.write(+n+ "*" +i+ " = " +res);
    }
    document.write("<br>");
    n=n+1;

}

 */


/*
//      ========= Exercice 2 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var a;
var b;
var c;
var discriminant;
var racine;
var sol1;
var sol2;
var i;
//ETAPE 2 INITIALISATION DES VARIABLES
i=0;
discriminant=0;
racine=0;
sol1=0;
sol2=0;
//ETAPE 3 RESOLUTION ET AFFICHAGE
do {
    a=Number(prompt("Donnez le a"));
    b=Number(prompt("Donnez le b"));
    c=Number(prompt("Donnez le c"));

    discriminant= (b*b)-4*(a*c);
    if (discriminant>0){
        racine=Math.sqrt(discriminant);
        sol1= ((-(b))+racine)/(2*a);
        sol2= ((-(b))-racine)/(2*a);
        document.write(a+"x*2+ "+b+"x+ "+c+"=0");
        document.write("<br>");
        document.write("Le discriminant est : "+discriminant);
        document.write("<br>");
        document.write("La racine carrée est : "+racine);
        document.write("<br>");
        document.write("La solution 1 est : "+sol1);
        document.write("<br>");
        document.write("La solution 2 est : "+sol2);
        document.write("<br>");
    }
    else {
        document.write("Aucune solution");
    }
    continuer=prompt("Voulez vous continuer ? tapez o pour oui et n'importe pour le reste ");
}while(continuer==='o');

 */
/*
var i;
var j;
var resultat;
resultat=1;
for (j=0;j<5;j++){
    if (j===0){
        document.write("");
    }
    else if (j===1){
        document.write("_");
    }
    else if (j===2){
        document.write("__");
    }
    else if (j===3){
        document.write("___");
    }
    else if (j===4){
        document.write("____");
    }

    for (i=0;i<4;i++){

        document.write(resultat+ " ");
        resultat= resultat + 1;


    }
    resultat= (resultat * 2)-2;
    document.write("<br>");
}

 */


    let tab = new Array(10);        // En fait, un Tableau 2D, c'est d'abord un Tableau.

for(let i=0; i<10; i++)
{
    tab[i] = new Array(10);     // dans lequel chaque élément est lui même un tableau.
    // donc des tableau dans un Tableau.
}

//==============================================================

for(let j=0; j<10; j++)               //j est pour vertical et k horizontal
{
    for(let k=0; k<10; k++)
    {
        tab[j][k] = (j+1) * (k+1);
        if(tab[j][k] < 10) {
            document.write(tab[j][k] + " . . ");
        }
        else if(tab[j][k] < 100) {
            document.write(tab[j][k] + " . ");
        }
        else {
            document.write(tab[j][k]);
        }
    }
    document.write("<br>");
}
