/*
let personne3 = {
    prenom : "Anthoine",
    nom : "Héon",
    age : 18
};
document.write(personne3.prenom+" "+personne3.nom+" "+personne3.age);
document.write("<br>");

let personne4 ={};
personne4.prenom= "Idiot";
personne4.nom= "Fou";
personne4.age= "19";
document.write(personne4.prenom+" "+personne4.nom+" "+personne4.age);

let pokemon = {
    nom : "Pikachu",
    type : "Electric",
    hp : 50,
    nomattaque1 : "Agility",
    nomattaque2 : "Thundershock",
    degatsAttaque1 : 95,
    degatsAttaque2 : 20
};
document.write("<br>");
document.write(pokemon.nom+" "+pokemon.type+" "+pokemon.hp+" "+pokemon.nomattaque1+" "+pokemon.nomattaque2+" "+pokemon.degatsAttaque1+" "+pokemon.degatsAttaque2);

let pokemon1 = {
    nom : "Greninja",
    type : "obscur",
    hp : 230,
    nomattaque1 : "Shuriken flurry",
    nomattaque2 : "haze slash",
    degatsAttaque1 : 85,
    degatsAttaque2 : 110
};
document.write("<br>");
for( let cle in pokemon1) {
    document.write(cle+": ");
    document.write(pokemon1[cle]);
    document.write("<br>");
}
document.write("<br>");

 */
/*
class Pokemon3 {
    constructor(nom,type,hp, nomattaque1,nomattaque2,degatsAttaque1,degatsAttaque2){
        this.nom=nom;
        this.type=type;
        this.hp=hp;
        this.nomattaque1=nomattaque1;
        this.nomattaque2=nomattaque2;
        this.degatsAttaque1=degatsAttaque1;
        this.degatsAttaque2=degatsAttaque2;
    }
     Salutation(){
        return('Bonjour ! Je m\'appelle ' + this.nom + " " + this.hp + '.');
    }
}



let anthoine = new Pokemon3("Greninja", "obscur" , 138,"Shuriken flurry","haze slash",858,110);
for( let cle in anthoine) {
    document.write(cle+": ");
    document.write(anthoine[cle]);
    document.write("<br>");
}
let zama = anthoine.Salutation();
document.write(zama);

 */
/*
//================================Exercice1========================================
class Cylindre {
    constructor(hauteur,rayon){
        this.hauteur=hauteur;
        this.rayon=rayon;
    }
    GetVolume(){
        var resultat;
        resultat=this.hauteur*(this.rayon*this.rayon)*Math.PI;
        return resultat;
    }
}
let cylindre1= new Cylindre(6,3);
let cylindre2= new Cylindre(5,7);
let cylindre3= new Cylindre(4,9);
let cylindre4= new Cylindre(7,4);
let cylindre5= new Cylindre(1,2);
let test1= cylindre1.GetVolume();
let test2= cylindre2.GetVolume();
document.write("Le volume du cylindre 1 est : "+test1);
document.write("<br>");
document.write("Le volume du cylindre 2 est : "+test2);

class Boite {
    constructor(tab){
        this.tab=tab;
    }
    GetVolumeBoite(){
        let total=0;
       for (let i=0;i<this.tab.length;i++){
           total+=this.tab[i].GetVolume();
       }
        return total;
    }
}
let tab1=[cylindre1,cylindre2,cylindre3,cylindre4,cylindre5];
let boite1= new Boite(tab1);
let essai= boite1.GetVolumeBoite();
document.write("<br>");
document.write(essai);

 */
/*
//================================Exercice2========================================
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Examen {
    constructor(){
        this.note1=getRandomInt(21);
        this.note2=getRandomInt(21);
        this.note3=getRandomInt(21);
        this.note4=getRandomInt(21);
        this.note5=getRandomInt(21);
    }
    GetNote(){
        let resultat;
        resultat=this.note1+this.note2+this.note3+this.note4+this.note5;
        return resultat;
    }
}


class Etudiant {
    constructor(nom,prenom,examen){
        this.nom=nom;
        this.prenom=prenom;
        this.examen=examen;
    }
}
let nom=["Anthoine","Mathieu","Felix","Arthur","Thomas","Alexandre","Benjamin","Joel","Johnatan","Souleymane"];
let prenom=["Heon","Sevegny","Cassa","Forget","Lajeunesse","Boomer","Bosson","Dervain","Gii","Soumare"];
let etudiant=[];
for (let i=0;i<10;i++){
    etudiant[i]= new Etudiant(nom[i],prenom[i],new Examen());
}

for (let i=0; i < 10; i++) {
    if (etudiant[i].examen.GetNote()>=60) {
        document.write(" Reussi : " +etudiant[i].nom+" "+etudiant[i].prenom+ " "+etudiant[i].examen.GetNote());
        document.write("<br>");
    }
    else {

        document.write("Echoué : " +etudiant[i].nom+" "+etudiant[i].prenom+ " "+etudiant[i].examen.GetNote());
        document.write("<br>");
    }
}

 */

/*
//================================Exercice3========================================
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Guerrier {
    constructor(){
        this.pointdevie=100;
        this.force=Math.floor(Math.random() * 10) + 1;
        this.agilite=Math.floor(Math.random() * 10) + 1;
        this.chance=getRandomInt(2);
        this.precision=Math.floor(Math.random() * 10) + 1;
    }
    Attaquer(){
        let degat1;
        degat1=(this.force+this.precision+this.agilite)*this.chance;
        this.chance=getRandomInt(2);
        return degat1;
    }
    AttaqueRecu(degat1){
            this.pointdevie-=degat1;
    }
}



let guerrier1= new Guerrier();
let guerrier2= new Guerrier();
document.write("Le point de vie du guerrier 1 est " + guerrier1.pointdevie + " , sa force est " + guerrier1.force + " , son agilité est: " + guerrier1.agilite + " , il a une chance de " + guerrier1.chance + " et une precision de " + guerrier1.precision);
document.write("<br>");
document.write("Le point de vie du guerrier 2 est " + guerrier2.pointdevie + " , sa force est " + guerrier2.force + " , son agilité est: " + guerrier2.agilite + " , il a une chance de " + guerrier2.chance + " et une precision de " + guerrier2.precision);
document.write("<br>");
while(guerrier1.pointdevie > 0 || guerrier2.pointdevie>0) {
    let essai = guerrier1.Attaquer();
    let essai2 = guerrier2.Attaquer();
    guerrier2.AttaqueRecu(essai);
    guerrier1.AttaqueRecu(essai2);
    document.write("Point attaque du guerrier 1 est : " + essai);
    document.write("<br>");
    document.write("Point attaque du guerrier 2 est : " + essai2);
    document.write("<br>");
    document.write("Point de vie apres attaque reçu du guerrier est : " + guerrier1.pointdevie);
    document.write("<br>");
    document.write("Point de vie apres attaque reçu du guerrier est : " + guerrier2.pointdevie);
    document.write("<br>");
}

 */
/*
//================================Exercice========================================
class Papillon {
    constructor( nom, couleur, masse, longueur, largeur){
        this.nom=nom;
        this.couleur=couleur;
        this.masse=masse;
        this.longueur=longueur;
        this.largeur=largeur;
    }
    MangerFraise(masse1){
        this.masse+=masse1;
    }
    GetMasse(){
        return this.masse;
    }
    ChangerCouleur(couleur){
        this.couleur=couleur;
    }
    GetCouleur(){
        return this.couleur;
    }

    Grandir(longueur,largeur){
        this.longueur=longueur;
        this.largeur=largeur;
    }
    GetSurface(){
        var resultat;
        resultat=this.largeur*this.longueur;
        return resultat;
    }
}

let papillon1=new Papillon("anthoine", "noir", 10, 2,3);
document.write("La masse est "+papillon1.masse);
document.write("<br>");
document.write("La couleur est "+papillon1.couleur);
document.write("<br>");
document.write("La longueur est "+papillon1.longueur);
document.write("<br>");
document.write("La largeur est "+papillon1.largeur);
document.write("<br>");
document.write("La surface est "+papillon1.GetSurface());
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Mon papillon s'appelle "+papillon1.nom);
document.write("<br>");
papillon1.MangerFraise(4);
papillon1.ChangerCouleur("rose");
papillon1.Grandir(6,3);
document.write("La nouvelle masse est "+papillon1.GetMasse());
document.write("<br>");
document.write("La nouvelle couleur est "+papillon1.GetCouleur());
document.write("<br>");
document.write("La longueur est "+papillon1.longueur);
document.write("<br>");
document.write("La largeur est "+papillon1.largeur);
document.write("<br>");
document.write("La nouvelle surface est "+papillon1.GetSurface());

 */
