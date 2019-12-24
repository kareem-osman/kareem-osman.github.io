$(function(){
    // ----open-----
$(".bt-v").click(function(){
    $("#contact").css("left","0")
    $(".bt-v").removeClass("hvr-bubble-float-right")
})
$('[href="#contacts"]').click(function(){
    $("#contact").css("left","0")
    $(".bt-v").removeClass("hvr-bubble-float-right")
})
// -------close----
$('[href="#contacts"]').dblclick(function(){
    
    $("#contact").css("left","-300px")
    $(".bt-v").addClass("hvr-bubble-float-right")
})
$(".bt-v").dblclick(function(){
    $("#contact").css("left","-300px")
    $(".bt-v").addClass("hvr-bubble-float-right")
})
$("#contact span ").click(function(){
    $("#contact").css("left","-300px")
    $(".bt-v").addClass("hvr-bubble-float-right")
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