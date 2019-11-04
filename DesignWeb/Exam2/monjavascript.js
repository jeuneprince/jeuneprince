/*
//      ========= Exercice 1 ============      //

//ETAPE 1 DECLARATION DE VARIABLES
var i;
var res;
var entree;
//ETAPE 2 INITIALISATION DES VARIABLES
i=0;
res=0;
tps=0;
tvq=0;
total=0;
grand=0;
// n=prompt("combien de commande?")
//ETAPE 3 RESOLUTION ET AFFICHAGE
//for (i=0;i<n;i++){
do {


    entree=prompt("voulez vous une entrée ? tape o ou O pour oui et n ou N pour non");
    if (entree === 'o' || entree === 'O') {
        res = res + 3.5;
    } else {
        res = res;
    }
    plat = prompt("quel plat choisissez vous ?");
    while (plat !== "makis" && plat !== "nigiris" && plat !== "padthai") {
        plat = prompt("quel plat choisissez vous ? Nos differents plats sont makis, nigiris et padthai");
    }
    if (plat === "makis") {
        res = res + 10;
    } else if (plat === "nigiris") {
        res = res + 11;
    } else if (plat === "padthai") {
        res = res + 14;
    } else {
    }
    dessert = prompt("voulez vous un dessert ? tape o ou O pour oui et n ou N pour non");
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
    i++;
    nouveau=prompt("voulez vous une nouvelle commande ? tape o ou O pour oui et n ou N pour non");
}while (nouveau==='o'|| nouveau === 'O')
document.write("<br>");

document.write(" Grand total est = " +grand);

 */

/*
//      ========= Exercice 2 ============      //
var res;
res=0;
document.write("*  |  1  2  3  4  5  6  7  8  9 ");
document.write("<br>");
document.write("-------------------------------");
document.write("<br>");
for (var i=1;i<10;i++){
    document.write(i+"  | ");
    for ( var j=1;j<10;j++){
        res=i*j;
        if (res<10){
            document.write("  "+res);
        }
        else{
            document.write(" "+res);
        }
    }
    document.write("<br>");
}

 */





