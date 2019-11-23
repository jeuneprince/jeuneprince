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
//================================Exercice1========================================
class Cylindre {
    constructor(hauteur,rayon){
        this.hauteur=hauteur;
        this.rayon=rayon;
    }
    GetVolume(){
        var resultat;
        resultat=this.hauteur*(this.rayon*this.rayon)*3.14;
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


