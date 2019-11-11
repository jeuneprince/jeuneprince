/*
$('.img-fluid').on({
    'click': function() {
        var src = ($(this).attr('src') === 'images/4.jpg')
            ? 'images/9.jpg'
            : 'images/4.jpg';
        $(this).attr('src', src);
    }
});

 */
var clic=1;
var id1;
var id2;
var src1;
var src2;
$( ".img-fluid" ).click(function() {
    if (clic===1){
        id1=$(this).attr("id");
        src1=$(this).attr("src");
        clic=2;
    }
    else if (clic===2){
        id2=$(this).attr("id");
        src2=$(this).attr("src");

        $("#"+id1).attr('src', src2);
        $("#"+id2).attr('src', src1);
        clic=1;
    }
    if ($('#image1').attr("src") === "images/1.jpg"){
        $('#image1').attr("src","images/victoire.jpg");
    }
    else{

    }

    if ($('#image2').attr("src") === "images/2.jpg"){
        $('#image2').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image3').attr("src") === "images/3.jpg"){
        $('#image3').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image4').attr("src") === "images/4.jpg"){
        $('#image4').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image5').attr("src") === "images/5.jpg"){
        $('#image5').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image6').attr("src") === "images/5.jpg"){
        $('#image6').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image7').attr("src") === "images/7.jpg"){
        $('#image7').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image8').attr("src") === "images/8.jpg"){
        $('#image8').attr("src","images/victoire.jpg");
    }
    else{

    }
    if ($('#image9').attr("src") === "images/9.jpg"){
        $('#image9').attr("src","images/victoire.jpg");
    }
    else{

    }
});
$( "#boutonTricher" ).click(function() {
    $('#image1').attr("src","images/victoire.jpg");
    $('#image2').attr("src","images/victoire.jpg");
    $('#image3').attr("src","images/victoire.jpg");
    $('#image4').attr("src","images/victoire.jpg");
    $('#image5').attr("src","images/victoire.jpg");
    $('#image6').attr("src","images/victoire.jpg");
    $('#image7').attr("src","images/victoire.jpg");
    $('#image8').attr("src","images/victoire.jpg");
    $('#image9').attr("src","images/victoire.jpg");


});

var tabImages= [false,false,false,false,false,false,false,false,false];

$( "#boutonRecommencer" ).click(function() {
    var random;
    var trouver = false;

for (var i=1;i<=9;i++){
    while (!trouver){
        random=Math.floor((Math.random() * 9));
        if (tabImages[random] === false)
        {
            tabImages[random] = true;
            $('#image'+i).attr("src","images/"+Number(random+1) + ".jpg");
            trouver=true;
        }
    }
     trouver = false;
}
tabImages= [false,false,false,false,false,false,false,false,false];

});

