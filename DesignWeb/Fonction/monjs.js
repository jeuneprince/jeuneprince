var x;

x= Pileouface();
document.write(x);
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function Pileouface() {


// ÉTAPE 1 : Déclaration de nos variables
    var compteur;
    var cpt_p;
    var cpt_f;
    var v;
    var tab=[];
// ÉTAPE 2 : Initialisation ou Saisie des valeurs au clavier
    compteur = 0;
    cpt_p = 0;
    cpt_f = 0;
    v = 0;
// ÉTAPE 3 : Resolution du problème (Algorithme de résolution, Équation Mathématique, ...).
    while (compteur < 10) {
        v = getRandomInt(2);
        if (v == 0) {
            v = 'pile';
            cpt_p++;

        } else {
            v = 'face';
            cpt_f++;
        }

        compteur++;
    }
    tab[0]=cpt_p;
    tab[1]=cpt_f;

    return tab;
}
/*

    var max;
    var min;
    var moy;
    var i;
    var tab =[];
    for (i=0;i<4;i++){
        tab[i]=Number(prompt('Entrez une valeur'));
    }
    moy = Moyenne(tab);
    max = Maximum(tab);
    min= Minimum(tab);
    document.write("La moyenne est: "+moy);
    document.write("<br>");
    document.write("Le maximum est: "+max);
    document.write("<br>");
    document.write("Le minimum est: "+min);
    document.write("<br>");



    function Moyenne(tab) {
        var moy;
        var somme=0;
        for (var i=0;i<tab.length;i++){
            somme=somme+tab[i];
        }
        moy=somme/tab.length;
        return moy;
    }
    function Maximum(tab) {
        var max;
        max=Math.max(...tab) ;
        return max;
    }
    function Minimum(tab) {
        var min;
        min=Math.min(...tab) ;
        return min;
    }

 */