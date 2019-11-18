/*
//Exercice 2
var calendrier =["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
var i;
for (i=0; i<calendrier.length; i++){
    document.write(calendrier[i]);
    document.write("<br>");
}

 */
/*
//Exercice 3
var calendrier =["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
var i;
for (i=calendrier.length-1; i>=0; i--){
    document.write(calendrier[i]);
    document.write("<br>");
}

 */
/*
//Exercice 4
var tab2Exp =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var i;
for (i=0; i<tab2Exp.length; i++){
    tab2Exp[i]=Math.pow(2,i);
    document.write("exp: tabexpo"+i+ " = " +tab2Exp[i]);
    document.write("<br>");
}
 */
/*
//Exercice 5
var tab2Exp =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var i;
for (i=0; i<tab2Exp.length; i++){
    tab2Exp[i]=Math.pow(2,i);
    document.write("exp: tabexpo"+i+ " = " +tab2Exp[i]);
    document.write("<br>");
}

document.write("Le plus grand est : "+Math.max(...tab2Exp));

 */
/*
var tab =[];
tab[0]=1;
tab[1]=1;
var i;
var j;
for (j=0; j<11; j++){
    for (i=2; i<1000; i++){
        tab[i]=tab[i-1]+tab[i-2];
    }
    document.write(+tab[j]+" ");
}

 */

/*
var tab =[2,3,4,5,6,0,9,8,98,0,10];
var i;
var cpt;
var element = 0;
var indices = [];
var idx = tab.indexOf(element);
cpt=0;
for (i=0; i<tab.length; i++){
    if (tab[i]===0){
        cpt=cpt+1;
    }
}
while (idx != -1) {
    indices.push(idx);
    idx = tab.indexOf(element, idx + 1);
}
document.writeln(cpt);
document.writeln("<br>");
document.writeln(indices);

 */

/*
var mathieu=["S", "B", "J"];
var i;

for (i=0; i <= 2; i++) {
    mathieu[i] = prompt("Entrez le nom du " + i+1 + "e");
}
alert(mathieu);

 */
/*
// Tri croissant ou decroissant
var i;
var tmp=0;
var j;
var tab =[2,3,4,5,6,0,9,8,98,0,10];

for(i = 0; i < tab.length; i++)
{
    for(j =i+1; j < tab.length; j++)
    {
        if(tab[i] > tab[j])
        {
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
    }
}
document.write(tab);

 */


// inverser les elements d'un tableau
var i;
var tab =[2, 3, 4, 5 , 6 , 0 , 9 , 8 , 98 , 0 , 10];
for (i=tab.length-1; i>=0; i--){
    document.write(tab[i]+" ,");
}