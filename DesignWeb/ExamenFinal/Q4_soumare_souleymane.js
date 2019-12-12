//================================Question4========================================
class Sportif {
    constructor( prenom, nom, taille, poids){
       this.prenom=prenom;
       this.nom=nom;
       this.taille=taille;
       this.poids=poids;
    }

    GetIndiceMasseCorporelle(){
        var imc;
        imc=this.poids/(this.taille*this.taille);
        return imc;
    }

    MangerHamburger(masse){
        return this.poids+=masse;
    }

    AllerAuGym(heure){
        return this.poids-=0.5*heure;

    }

}

let sportif1=new Sportif("Souleymane", "Soumare", 1.75, 60);
document.write(sportif1.prenom+" "+sportif1.nom+" est un Sportif de poids "+sportif1.poids+" et de taille "+sportif1.taille+".");
document.write("<br>");
document.write("Son indice de Masse corporelle est de "+sportif1.GetIndiceMasseCorporelle());
document.write("<br>");
document.write("Apres avoir mangé 2kg d'hamburger, son nouveau poids avant le GYM est de : "+sportif1.MangerHamburger(2)+"  kg");
document.write("<br>");
document.write("Son nouveau poids apres 3 heures de GYM est de : "+sportif1.AllerAuGym(3)+"  kg");
document.write("<br>");