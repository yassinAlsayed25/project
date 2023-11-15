
let divWidth = $('.colorBox').innerWidth();
$('.option').css('left' , `-${divWidth}`)
let aboutOffset= $('#about').offset().top;
$(window).scroll(function(){
    let wScroll= $(window).scrollTop();

    if(wScroll > aboutOffset-50)
    {
        $("#main-nav").css('backgroundColor' , 'rgba(0,0,0,0.6)');
        $("#main-nav").css('padding' , '10px  90px');
        $('#btnUp').fadeIn(500);

    }
    else
    {
        $("#main-nav").css('backgroundColor' , 'transparent');
        $("#main-nav").css('padding' , '10px   0px');
        $('#btnUp').fadeOut(500);



    }
});



$('#btnUp').click(function(){
    //$(window).scrollTop(0);
    $("html,body").animate({scrollTop:0} , 300);
    
    
})

/*$("a[href^='#']").click(function(e){
    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset} , );
});

$("a[href^='#']").click(function(e){
    $(e.target).css('border-bottom' , 'solid 5px #fff');
    $(e.target).css('border-bottom' , 'nones');
    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset} , );
});*/


$("ul li").click(function(e){
    $(e.target).parent().css('border-bottom' , 'solid 5px #fff');
    $(e.target).parent().siblings().css('border-bottom' , 'none');

});


$(document).ready(function(){
    $("#loading  .sk-cube-grid").fadeOut(0 ,function(){
        $("#loading").fadeOut(0 , function(){
            $("#loading").remove();
            $('body').css('overflow' , 'auto');
        })
    })
})

let items = $('.color-item');


items.eq(0).css('backgroundColor' , 'green');
items.eq(1).css('backgroundColor' , 'orange');
items.eq(2).css('backgroundColor' , 'tomato');
items.eq(3).css('backgroundColor' , '#888');
items.eq(4).css('backgroundColor' , 'blue');

items.click(function(e){
let  bgColor=  $(e.target).css('backgroundColor' );
$('h2').css('color' , bgColor);
})


$('.option i').click(function(){
    if($(".option").css('left') == '0px')
    {
        $('.option').animate({left: `-${divWidth}`} , 1000);


    }
    else
    {
        $('.option').animate({left: '0px'} , 1000);

    }
});



$(document).ready(function(){
    new WOW().init();
})


var typed = new Typed('#element', {
    strings: ['I M Professional', 'Front End Developer'],
    typeSpeed:100,
    loop:true,
    showCursor:false,
});



