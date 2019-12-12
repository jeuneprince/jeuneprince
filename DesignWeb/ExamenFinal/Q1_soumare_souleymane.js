function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min+1) ) + min;
}

//==============================Question 1====================================
//Etape 1 : Declaration de variables
var tabChance=[];
var i;
var nombre;
var cpt_nombre=0;

//Etape2: initialisation des variables
nombre=Number(prompt("donnez un nombre entre 15 et 75"));

//Etape3:Resolution
for (i=0; i<200; i++){
    tabChance[i]=getRndInteger(75,15);
    if (nombre===tabChance[i]){
        cpt_nombre++;
    }
}

//Etape3:Affichage
document.write(tabChance);
document.write("<br>");
if (cpt_nombre===0){
    document.write("Il n'y a pas de nombre "+nombre+" dans le tableau");
}
else if (cpt_nombre===1){
    document.write("Le nombre "+nombre+ " se retrouve qu'une seule  fois dans le tableau");
}
else {
    document.write("Le nombre "+nombre+ " se retrouve " +cpt_nombre+ " fois dans le tableau");
}
