
var octet=[true,true,true,true,true,true,true,true];
var motdepassinvalid=["44","444","4444"];
var  motDePasseUsager ="123";
var choix;
var i=0;
function AfficherMenu() {
    choix=prompt("Appuyer sur:\n 1 : Lire un octet.\n" +
        "2 : Afficher un octet\n" +
        "3 : Traduire l’octet en décimal.\n" +
        "4 : Quitter\n")
}
function LireOctet(octet) {
    for (var j=0; j<8; j++){
        octet[j]=prompt("donner un booleen");
    }
    return octet;
}

function AfficherOctet(octet){
    document.write("<br>");
    for (var k=0; k<8; k++){
        if (octet[k]==="true"){
            octet[k]=1;
        }
        else { octet[k]=0;}
    }

}

function TraduireOctetDecimal(octet){
var resultat=0;
for (i=0;i<8;i++){
    if (octet[i]===1 || octet[i]==='true'){
        resultat =resultat+ Math.pow(2,i);
    }
}
return resultat;
}

while (i<3) {
    motDePasseUsager = prompt("Donnez le mot de passe");
    if (motDePasseUsager != "123") {
        motdepassinvalid[i] = motDePasseUsager;
        i++;
    }

    else {
        AfficherMenu(octet);
        if(choix==1){
            var test;
            test=LireOctet(octet);
        }
        else if (choix==2){
            AfficherOctet(octet);
        }
        else if (choix==3){
            var essai2;
                essai2=TraduireOctetDecimal(octet);
        }
        else if (choix==4){
            i=3;
        }
    }
}
document.write("<br>");
document.write(essai2);
document.write("<br>");
document.write(octet);
document.write("<br>");
document.write("Le programme va fermer.");
document.write("<br>");
document.write(motdepassinvalid);

/*
//================Question 1================
function Noel() {
    document.write(" ABCDEFGHIJKLMNOPQRSTUVWX")
}
var mot;
mot=prompt("donnez un mot");
if (mot!="noel"){
    var longueur=mot.length;
    document.write(mot+" = ")
    for (var i=0; i<longueur; i++){
        document.write("*");
    }
}
else {

}

 */
/*
//===========  Déclaration du Tableau 2D ============================================================
let tab = new Array(10);        // En fait, un Tableau 2D, c'est d'abord un Tableau.
for (let u = 0; u < 10; u++) {
    tab[u] = new Array(10);     // dans lequel chaque élément est lui même un tableau.
    // donc des tableaux dans un Tableau.
    for (let v = 0; v < 10; v++) {
        tab[u][v] = "..";
    }
}

//===============   Remplissage   ==================================================================
for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
        if (j === k || (j+k) === 9)
        {
            tab[j][k] = "x";
        }
    }
}

//===============   Affichage   ===========================================================================
for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
        document.write(tab[a][b] + " ");
    }
    document.write("<br>");
}

 */
/*
//===========  Déclaration du Tableau  ===============================================================
let tab = new Array(5);        // En fait, un Tableau 2D, c'est d'abord un Tableau.
for(let u=0; u<5; u++)
{
    tab[u] = new Array(24);     // dans lequel chaque élément est lui même un tableau.
    // donc des tableau dans un Tableau.
    for(let v=0; v<24; v++)
    {
        tab[u][v] = "..";
    }
}
//===============   Remplissage   ===================================================================
for(let j=0; j<5; j++)
{
    for(let k=0; k<24; k++)
    {
        if((j===0) && (k!=5 && k!=11 && k!= 17 && k!=19 && k!=20 && k!= 21 && k!=22 && k!=23))  // la 1ere ligne horizontale
        {
            tab[j][k] = "x";
        }
        if((j===1) && (k===4 || k===6 || k===10 || k===12 || k===18))  // toutes les barres verticales
        {
            tab[j][k] = "x";
        }
        if((j===2) && (k===4 || k===6 || k===10 || k===12 || k===18 || k===13 || k===14 || k===15))  // toutes les barres verticales
        {
            tab[j][k] = "x";
        }
        if((j===3) && (k===0 || k===4 || k===6 || k===10 || k===12 || k===18))    // le petit dernier morceaux du J  : C'est mon prénom que j'Écris   :) hi hi hi
        {
            tab[j][k] = "x";
        }
        if((j===4) && (k!=5 && k!=11 && k!= 17)){  // la dernière ligne horizontale du bas
            tab[j][k] = "x";
        }
    }
}
//========  Affichage  =============================================================================

for(let a=0; a<5; a++)
{
    for(let b=0; b<24; b++)
    {
        document.write(tab[a][b] + " ");
    }
    document.write("<br>");
}

 */

