
$("#generer" ).click(function() {
    var nom=$("#nomcarte").val();
    var specialite=$("#specitecarte").val()
    var hp=$("#hpcarte").val();
    var long=$("#longueur").val();
    var large=$("#largeur").val();
    var flavor=$("#flavor").val();
    var illus=$("#illustrator").val();
    var bot=$("#bottom").val();
    var set=$("#setNo").val();
    var rar=$("#rarete").val();

    $("#div2").html(nom);
    $("#div1").html(hp+" HP");
    $("#div3").html(specialite+" Pokemon. ");
    $("#div4").html(" Longueur: "+long);
    $("#div5").html(" Largeur: "+large);
    $("#div9").html(flavor);
    $("#div10").html(" ill: "+illus);
    $("#div12").html(bot);
    $("#div13").html(set);
    $("#div14").html("/ "+rar);


});

$( "#basiccarte" ).change(function() {
    var basic= $( "#basiccarte option:selected" ).text();
    $("#div0").html(basic+" Pokemon");
});
$( "#faiblesse" ).change(function() {
    var faible= $( "#faiblesse option:selected" ).text();
    $("#div6").html(" FBL: "+faible);
});
$( "#resistance" ).change(function() {
    var resiste= $( "#resistance option:selected" ).text();
    $("#div7").html(" RST: "+resiste);
});
$( "#retraite" ).change(function() {
    var cout= $( "#retraite option:selected" ).text();
    $("#div8").html(" CRT: "+cout);
});
$( "#commun" ).change(function() {
    var com= $( "#commun option:selected" ).text();
    $("#div15").html(com);
});