var i=0;
$("#exampleRadios1" ).change(function() {
    $('#div2').hide();
    $('#div3').hide();
    $('#div1').show();
    $('#starwars').show();
    $('#marvel').hide();
    $('#dc').hide();
});
$("#exampleRadios2" ).change(function() {
    $('#div1').hide();
    $('#div3').hide();
    $('#div2').show();
    $('#marvel').show();
    $('#dc').hide();
    $('#starwars').hide();
});
$("#exampleRadios3" ).change(function() {
    $('#div1').hide();
    $('#div2').hide();
    $('#div3').show();
    $('#dc').show();
    $('#starwars').hide();
    $('#marvel').hide();
});

$("#pseudo").keyup(function(){
    $("#pseudo").css("background-color", "yellow");

    var texte=$("#pseudo").val();
    if (texte==="SLAY" || texte==="Test"){
        $("#pseudo1").html("indisponible");
        $("#pseudo1").css("color","red");

    }
    else {
        $("#pseudo1").html("valide");
        $("#pseudo1").css("color","green");
    }
});
$("#password1").keyup(function(){
    var controle=$("#password1").val().length;
    if (controle<6){
        $("#passwordsmall").html("faible");
        $("#passwordsmall").css("color","red");
    }
   else if (controle>=6 && controle<=9){
        $("#passwordsmall").html("moyen");
        $("#passwordsmall").css("color","yellow");
    }
    else if (controle>9){
        $("#passwordsmall").html("fort");
        $("#passwordsmall").css("color","green");
    }

});
$("#password2").keyup(function(){
    var controle1=$("#password2").val();
    var controle=$("#password1").val();
    if (controle===controle1){
        $("#passwordsmall1").html("IDENTIQUE");
        $("#passwordsmall1").css("color","green");
    }

    else {
        $("#passwordsmall1").html("pas identiques");
        $("#passwordsmall1").css("color","red");
    }

});

$("#Email1").keyup(function(){
    var courriel=$("#Email1").val();;
    if (courriel.includes("@" && ".")){
        $("#small").html("Dispo");
        $("#small").css("color","green");
    }
    else {
        $("#small").html("mauvais");
        $("#small").css("color","red");
    }
});


