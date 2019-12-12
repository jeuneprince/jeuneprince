Dessiner_un_91();

function Dessiner_un_91()
{
    //===========  Déclaration du Tableau 2D  ============================================================
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
            if( k===6 || k===9)                                 // La barre verticale du 3
            {
                tab[j][k] = "x";
            }
            if((j===0 || j===4 || j===9) && (k<=6))   // Les barres horizontales du 3
            {
                tab[j][k] = "x";
            }
            if((j===0 || j===4 || j===9) && (k<=6))   // Les barres horizontales du 3
            {
                tab[j][k] = "x";
            }
            if( j<=4 && k===0)                                 // La barre verticale du 3
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