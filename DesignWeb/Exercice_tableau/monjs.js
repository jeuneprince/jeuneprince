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

/*
// inverser les elements d'un tableau
var i;
var tab =[2, 3, 4, 5 , 6 , 0 , 9 , 8 , 98 , 0 , 10];
for (i=tab.length-1; i>=0; i--){
    document.write(tab[i]+" ,");
}

 */
Tableau_2D_Basique();

document.write("<br>");
Dessiner_un_Carre();

document.write("<br>");
Dessiner_une_croix();

document.write("<br>");
Joel_2D();

document.write("<br>");


function Tableau_2D_Basique()
{
    //=============  Déclaration du Tableau 2D   ======================================================
    let tab = new Array(10);  // En fait, un Tableau 2D, c'est d'abord un Tableau.
    for(let i=0; i<10; i++)
    {
        tab[i] = new Array(10);  // dans lequel chaque élément est lui même un tableau.
        // donc des tableau dans un Tableau.
    }
    //==============  Affichage  =========================================================================
    for(let j=0; j<10; j++)
    {
        for(let k=0; k<10; k++)
        {
            tab[j][k] = (j+1) * (k+1);
            if(tab[j][k] < 10)
            {
                document.write(tab[j][k] + " . . ");
            }else if(tab[j][k] < 100)
            {
                document.write(tab[j][k] + " . ");
            }else
            {
                document.write(tab[j][k]);
            }
        }
        document.write("<br>");
    }
//========================================================================================================
}

function Dessiner_un_Carre()
{
    //===========  Déclaration du Tableau 2D ============================================================
    let tab = new Array(10);        // En fait, un Tableau 2D, c'est d'abord un Tableau.
    for(let u=0; u<10; u++)
    {
        tab[u] = new Array(10);     // dans lequel chaque élément est lui même un tableau.
        // donc des tableau dans un Tableau.
        for(let v=0; v<10; v++)
        {
            tab[u][v] = "..";
        }
    }
    //===============   Remplissage   ==================================================================
    for(let j=0; j<10; j++)
    {
        for(let k=0; k<10; k++)
        {
            if(j===0 || j===9 || k===0 || k===9)    // première et dernière ligne du Tableau 2D
            {
                tab[j][k] = "x";
            }
        }
    }
    //===============   Affichage   ===========================================================================
    for(let a=0; a<10; a++)
    {
        for(let b=0; b<10; b++)
        {
            document.write(tab[a][b] + " ");
        }
        document.write("<br>");
    }
    //=================================================================================================
}

function Dessiner_une_croix()
{
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
    //=================================================================================================
}

function Joel_2D()
{
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
            if((j===0) && ( k!=1 && k!=2 && k!=3  && k!=5 && k!=11 && k!= 17 && k!=19 && k!=20 && k!= 21 && k!=22 && k!=23))  // la 1ere ligne horizontale
            {
                tab[j][k] = "x";
            }

            if((j===1) && (k===0 || k===4 || k===6 || k===10 || k===12 || k===18))  // toutes les barres verticales
            {
                tab[j][k] = "x";
            }
            if((j===2) && (k===0 || k===4 || k===6 || k===10 || k===12 || k===18 || k===13 || k===14 || k===15))  // toutes les barres verticales
            {
                tab[j][k] = "x";
            }
            if((j===3) && (k===0 || k===4 || k===6 || k===10 || k===12 || k===18))    // le petit dernier morceaux du J  : C'est mon prénom que j'Écris   :) hi hi hi
            {
                tab[j][k] = "x";
            }
            if((j===4) && (k!=5 && k!=11 && k!= 17 && k!=1 && k!=2 && k!=3 )){  // la dernière ligne horizontale du bas
                tab[j][k] = "x";
            }
            if (j === k )
            {
                tab[j][k] = "x";
            }
        }
    }
    //========  Affichage  =============================================================================
document.write("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    document.write("<br>");
    for(let a=0; a<5; a++)
    {   document.write(a)
        for(let b=0; b<24; b++)
        {
            document.write(tab[a][b] + " ");
        }
        document.write("<br>");
    }
    //========================================================================================
}
