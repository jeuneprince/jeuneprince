
$( "#im" ).mouseenter(function() {
    $('#im').css("transform","scale(1.2)");
    $('#im').css("transition","all 0.5s ease");


});
$('#im').mouseleave(function(){
    $('#im').css("transform","scale(1)");
});



$( "#im1" ).mouseenter(function() {
    $('#im1').css("transform","scale(1.2)");
    $('#im1').css("transition","all 0.5s ease");
});
$('#im1').mouseleave(function(){
    $('#im1').css("transform","scale(1)");
});



$( "#im2" ).mouseenter(function() {
    $('#im2').css("transform","scale(1.2)");
    $('#im2').css("transition","all 0.5s ease");
});
$('#im2').mouseleave(function(){
    $('#im2').css("transform","scale(1)");
});



$( "#but" ).click(function() {
    if (i===0){
        $('#nat').html("La natation, c'est-à-dire l'action de nager, désigne les méthodes qui permettent aux êtres humains de se mouvoir dans l'eau sans aucune force propulsive que leur propre énergie corporelle.");
        i=1;
    }
    else{
        $('#nat').html("");
        i=0;
    }
});



var i=0;
$( "#butt" ).click(function() {
    if (i===0){
        $('#aqua').html("L'aquagym est une forme de gymnastique qui se pratique dans l'eau, le plus souvent en piscine. La pression de l'eau évite les chocs et minimise le risque de courbatures, de claquages ou d'élongations musculaires. Elle procure une sensation de légèreté.");
        i=1;
    }
    else{
        $('#aqua').html("");
        i=0;
    }
});

var i=0;
$( "#butto" ).click(function() {
    if (i===0){
        $('#seco').html("Le secourisme ou prompt secours ou secours à victimes (SAV) désigne, en France, les premiers gestes d'urgence pratiqués par des personnes ayant des connaissances nécessaires, des secouristes bénévoles ou des sapeurs-pompiers; il peut s'agir de secours à personne avec ou sans matériel, en équipe organisée ou seul.");
        i=1;
    }
    else{
        $('#seco').html("");
        i=0;
    }
});



