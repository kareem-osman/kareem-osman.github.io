$(function(){
    // ----open-----
    let xr=1
$(".bt-v").click(function(){
    if(xr==1)
    {
        $("#contact").css("left","0")
        $(".bt-v").removeClass("hvr-bubble-float-right")
        xr=2
    }else
    {
        $("#contact").css("left","-300px")
        $(".bt-v").addClass("hvr-bubble-float-right")
        xr=1
    }
})
$('[href="#contacts"]').click(function(){
    if(xr==1)
    {
        $("#contact").css("left","0")
        $(".bt-v").removeClass("hvr-bubble-float-right")
        xr=2
    }else
    {
        $("#contact").css("left","-300px")
        $(".bt-v").addClass("hvr-bubble-float-right")
        xr=1
    }
})
// -------close----
$("#contact span ").click(function(){
    $("#contact").css("left","-300px")
    $(".bt-v").addClass("hvr-bubble-float-right")
    xr=1
})
// -------finsh-----------------------------------------------------

$("#education .btn-group-vertical button:first-child").hover(function(){

    $("#cont h2").text("Faculty of Engineering-Assiut Uinversity")
})
$("#education .btn-group-vertical button:nth-child(2)").hover(function(){

    $("#cont h2").text("Good")
})
$("#education .btn-group-vertical button:nth-child(3)").hover(function(){

    $("#cont h2").text("Design of private constructions")
})
$("#education .btn-group-vertical").mouseleave(function(){

    $("#cont h2").text("Bachelor of Civil Engineering-june 2004")
})

$("#education .btn-group-vertical button:last-child").hover(function(){
    // $("#cont h2").animate({"text":"Very Good"})
    $("#cont h2").text("Very Good")

})
// ----------------------------------------

$(".navbar .nav-link").on("click",function(){
    let target=$(this).attr("href")
    $("body , html").animate({
        scrollTop:$(target).offset().top
    },800)
})
// -------------------------to up------------
$(window).scroll(function(){
        
    if($(this).scrollTop() == 0){
        $("#to_up").hide()

    }else{$("#to_up").show()
}})
$("#to_up").click(function(){
  $("html,body").animate(
      {scrollTop:0},800
  )
})
// ---------------------social media--------------
$("#social_m").mouseenter(function(){

    $(this).animate(
        {opacity:1},800
    )
})
$("#social_m").mouseleave(function(){
    $(this).animate(
        {opacity:.2},800
    )
})

$("#courses #nav a").click(function(nl){
    console.log($(nl.target).attr("cat"))
    console.log(nl.target)
    $("#courses .card").css("display","block")

let cat_v ='.card[cat!="'+$(nl.target).attr("cat")+'"]'
if($(nl.target).attr("cat")!=="all")
{
$("#courses "+ cat_v).css("display","none")
}

})





})

new Chart(document.getElementById("horizontalBar"), {
    "type": "horizontalBar",
    "data": {
    "labels": [ "HTML 5.0", "CSS3", "JAVASCRIPT", "JQUERY", "BOOTSTRAP", "SASS","PHP","SQL","PHOTOSOP"],
    "datasets": [{
    "label": "DEVLOPER SKILLS",
    "data": [90, 85, 80, 75, 70, 80, 75,70,75],
    "fill": false,
    "backgroundColor": ["rgba(255, 99, 132, 0.8)", "rgba(255, 159, 64, 0.7)",
    "rgba(255, 205, 86, 0.7)", "rgba(75, 192, 192, 0.7)", "rgba(54, 162, 235, 0.8)",
    "rgba(153, 102, 255, 0.8)", "rgba(201, 203, 207, 0.8)", "rgba(255, 159, 64, 0.6)","rgba(75, 192, 192, 0.7)"
    ],
    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
    "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255, 159, 64)", "rgb(54, 162, 235)"
    ],
    "borderWidth": 1
    }]
    },
    "options": {
    "scales": {
    "xAxes": [{
    "ticks": {
    "beginAtZero": true
    }
    }]
    }
    }
    });

    // ------------------------
    //bar
var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
type: 'bar',
data: {
labels: ["AUTOCAD", "CONSTRUCTION ", "FIXING ","REPARING"],
datasets: [{
label: 'CIVIL ENGINEERING',
data: [90, 80, 90,95],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(153, 102, 255, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(54, 162, 235, 1)',
'rgba(153, 102, 255, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});


