//      ========= Exercice 1 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var res;
var entree;
//ETAPE 2 INITIALISATION DES VARIABLES
res=0;
tps=0;
tvq=0;
total=0;
grand=0;
n=prompt("combien de commande?")
//ETAPE 3 RESOLUTION ET AFFICHAGE
for (i=0;i<n;i++) {
    entree=prompt("voulez vous une entrée ?");
    if (entree === 'o' || entree === 'O') {
        res = res + 3.5;
    } else {
        res = res;
    }
    plat = prompt("quel plat choisissez vous ?");
    while (plat !== "makis" && plat !== "nigiris" && plat !== "padthai") {
        plat = prompt("quel plat choisissez vous ?");
    }
    if (plat === "makis") {
        res = res + 10;
    } else if (plat === "nigiris") {
        res = res + 11;
    } else if (plat === "padthai") {
        res = res + 14;
    } else {
    }
    dessert = prompt("voulez vous un dessert ?");
    if (dessert === 'o' || dessert === 'O') {
        res = res + 4.5;
    } else {
        res = res;
    }
    document.write("Le montant sans taxe "+i+ " est : " + res);
    document.write("<br>");
    tps = res * 0.05;
    tvq = res * 0.09975;
    total = res + tps + tvq;
    document.write("total"+i+" = " +total);
    document.write("<br>");
    grand+=total;
    res=0;

}
document.write("<br>");

document.write(" Grand total est = " +grand);
