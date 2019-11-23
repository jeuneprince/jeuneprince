$('#row1').show();
$('#row2').hide();
$('#row3').hide();
$('#row4').hide();
$('#row5').hide();

$("#mot").keyup(function(){
    $("#mot").css("background-color", "aliceblue");
});

$("#mot").keyup(function(){
    var controle=$("#mot").val().length;
    if (controle<3){
        $("#small1").html("trop court");
        $("#small1").css("color","red");
    }
    else if (controle>12){
        $("#small1").html("trop long");
        $("#small1").css("color","red");
    }
    else if (controle>=3 && controle<=12){
        $("#small1").html("mot parfait");
        $("#small1").css("color","green");
    }

});
$("#blanc" ).click(function() {
    $('.bg').css("background-image", "url(\"background/blanc.jpg\")");
});
$("#bleu" ).click(function() {
    $('.bg').css("background-image", "url(\"background/bleu.jpg\")");
});
$("#bleuFonce" ).click(function() {
    $('.bg').css("background-image", "url(\"background/bleuFonce.jpg\")");
});
$("#gris" ).click(function() {
    $('.bg').css("background-image", "url(\"background/gris.jpg\")");
});
$("#noir" ).click(function() {
    $('.bg').css("background-image", "url(\"background/noir.jpg\")");
});
$("#rose" ).click(function() {
    $('.bg').css("background-image", "url(\"background/rose.jpg\")");
});
$("#rouge" ).click(function() {
    $('.bg').css("background-image", "url(\"background/rouge.jpg\")");
});

$("#boutton" ).click(function() {
    var mot=$("#mot").val().toUpperCase();
    var grosseur=mot.length;
    var i;
    var j;

    if (grosseur===3){

        $('#row1').hide();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').show();
        $('#row5').hide();
        for (i=0;i<3;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col4n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                    $("#col4n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===4){
        $('#row1').hide();
        $('#row2').hide();
        $('#row3').show();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<4;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col3n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col3n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }

    }
    else if (grosseur===5){
        $('#row1').hide();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').show();
        for (i=0;i<5;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col5n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col5n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===6){
        $('#row1').hide();
        $('#row2').show();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<6;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col2n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col2n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===7){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<7;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n8").attr("src","");
        $("#col1n9").attr("src","");
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===8){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<8;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n9").attr("src","");
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===9){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<9;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===10){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<10;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===11){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<11;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n12").attr("src","");
    }
    else if (grosseur===12){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<12;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
});

$(document).on('keyup',function(e) {
    var mot=$("#mot").val().toUpperCase();
    var grosseur=mot.length;
    var i;
    var j;

    if (grosseur===3){

        $('#row1').hide();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').show();
        $('#row5').hide();
        for (i=0;i<3;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col4n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col4n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===4){
        $('#row1').hide();
        $('#row2').hide();
        $('#row3').show();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<4;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col3n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col3n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }

    }
    else if (grosseur===5){
        $('#row1').hide();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').show();
        for (i=0;i<5;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col5n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col5n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===6){
        $('#row1').hide();
        $('#row2').show();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<6;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col2n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col2n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
    else if (grosseur===7){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<7;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n8").attr("src","");
        $("#col1n9").attr("src","");
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===8){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<8;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n9").attr("src","");
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===9){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<9;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n10").attr("src","");
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===10){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<10;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n11").attr("src","");
        $("#col1n12").attr("src","");
    }
    else if (grosseur===11){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<11;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
        $("#col1n12").attr("src","");
    }
    else if (grosseur===12){
        $('#row1').show();
        $('#row2').hide();
        $('#row3').hide();
        $('#row4').hide();
        $('#row5').hide();
        for (i=0;i<12;i++){
            j=i+1;
            if (mot[i]==='*'){
                $("#col1n"+j).attr("src","Letters/CS/CS1.jpg");
            }
            else {
                $("#col1n"+j).attr("src","Letters/"+mot[i]+"/"+mot[i]+"1.jpg");
            }
        }
    }
});


