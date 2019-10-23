
//      ========= Exercice 1 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var res;
//ETAPE 2 INITIALISATION DES VARIABLES
res=1;

//ETAPE 3 RESOLUTION ET AFFICHAGE
for (j=0;j<4;j++){
    for (i=0;i<4;i++) {

        document.write(+res + " ");
        res = res * 2;
    }
    document.write("<br>");
}


/*
//      ========= Exercice 3 ============      //
//ETAPE 1 DECLARATION DE VARIABLES
var i;
var res;
var n;
var a;
//ETAPE 2 INITIALISATION DES VARIABLES
res=0;
n=prompt("Donnez la base");
a=prompt("Donnez l'exposant maximal");
//ETAPE 3 RESOLUTION ET AFFICHAGE

    for (i=0;i<=a;i++) {
        res=Math.pow(n,i);
        document.write(+n+ " exp " +i+ " = " +res);
        document.write("<br>");
    }

 */