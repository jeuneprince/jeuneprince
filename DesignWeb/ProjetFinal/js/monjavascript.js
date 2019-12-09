
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
});
$( "#image1" ).mouseenter(function() {
    $('#image1').css("transform","scale(1.2)");
    $('#image1').css("transition","all 0.5s ease");


});
$('#image1').mouseleave(function(){
    $('#image1').css("transform","scale(1)");
});


$( "#image2" ).mouseenter(function() {
    $('#image2').css("transform","scale(1.2)");
    $('#imag2').css("transition","all 0.5s ease");


});
$('#image2').mouseleave(function(){
    $('#image2').css("transform","scale(1)");
});


$( "#image3" ).mouseenter(function() {
    $('#image3').css("transform","scale(1.2)");
    $('#image3').css("transition","all 0.5s ease");


});
$('#image3').mouseleave(function(){
    $('#image3').css("transform","scale(1)");
});

$("#Email1").keyup(function(){
    var courriel=$("#Email1").val();
    if (courriel.includes("@" && ".")){
        $("#small").html("Bonne adresse");
        $("#small").css("color","green");
    }
    else {
        $("#small").html("mauvaise entrée");
        $("#small").css("color","red");
    }
});

$("#envoyer" ).click(function() {
    var texte_prenom=$("#prenom").val();
    var texte_nom=$("#nom").val();
    alert("Bonjour "+texte_prenom+" "+texte_nom+ " , nous avons bien reçu votre message");

});
