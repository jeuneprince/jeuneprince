/*
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

  */

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