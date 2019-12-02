//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('#lightning').hide();

var i=0;
$('#flashID').css("position","relative");
$( "#boutonDroite").click(function() {
    $('#flashID').css("left", "+=50px");
});

$( "#boutonGauche" ).click(function() {
    $('#flashID').css("left", "-=50px");
});

$( "#boutonChangerImage" ).click(function() {
    if (i===0){
        $('#flashID').attr("src","img/Flash2.png");
        i=1;
    }
    else{
        $('#flashID').attr("src","img/Flash1.png");
        i=0;
    }
});
$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').attr("class", "d-none");
});
$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').attr("class", "d-block");
});
$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("alt", "photo de Flash");
});

$( "#boutonAjouterTitre" ).click(function() {
    if (i===0){
        $('#text').html("Justice League");
        i=1;
    }
    else{
        $('#text').html("");
        i=0;
    }
});

$( "#boutonDupliquer" ).click(function() {
    $('#theDiv').append('<img id="flashID" src="img/Flash1.png" width="200px" />');

});
$( "#boutonRalentir" ).click(function() {
    $('#flashID').remove();

});
$( "#boutonTeleport" ).click(function() {
    if (i===0){
        $('#flashID').toggle();
        $('#flashID1').attr("class","d.block");
        i=1;
    }
    else{
        $('#flashID1').toggle();
        i=0;
    }
});

function vitessesupreme() {
    $('#flashID').toggle();
}

var vitesse;
$( "#boutonVitesseSupreme" ).click(function() {
    vitesse = setInterval(vitessesupreme,500);
});

$( "#boutonFinVitesseSupreme" ).click(function() {
    clearInterval(vitesse);
});
$( "#boutonNuke" ).click(function() {
    if (i===0){
        $('.centralCity').css("background-image", "url(\"img/atomic_bomb.jpg\")");
        i=1;
    }
    else {
        $('.centralCity').css("background-image", "url(\"img/centralCity.jpg\")");
        i=0;
    }
});
var nbGauche = 0;
var nbBas=0;
function bouger() {

    if (nbGauche<8){
        $('#flashID').css("left", "+=50px");
        nbGauche++
    }
    else {
        clearInterval(bloc);
    }
}
function descendre() {

    if (nbBas<8){
        $('#flashID').css("top", "+=50px");
        nbBas++;
    }
    else {
        clearInterval(bloc1);
    }
}
let px = 0;
let px2 = 0;
let py = 0;
let px3;
let finished=0;
function run1() {
    if (px <= 1250) {
        px += 50;
        $('#flashID').css({left: px});
    }
    else if (py <= 400){
        py += 50;
        $('#flashID').css({top: py});
        px3 = px;
    }
    else if (py >= 400 && px >= 1250) {
        if (px3 >= 25) {
            px2 = px3 - 100;
            $('#flashID').css({left: px2});
            px3 -= 100;
            finished = 1;
        }
        else if (finished === 1){
            $('.bubble').addClass('animate');
            setTimeout(
                function()
                {
                    $('#lightning').show();
                }, 1500);
            finished = 0;
        }
    }
}
$('#boutonPerso1').click(function () {
    setInterval(run1, 20);
});



