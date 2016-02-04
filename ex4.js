//Javascript
//call to jQuery ready func
//make sure html and css are loaded

$(function() {
  console.log("ready");

    
//backpack hover 
 $('img:nth-child(1)').hover(function() {
  $(this).attr('src', 'images/backpackHover.png')
  ;
       
  }, function() { //second function
    $(this).attr('src','images/backpack.png');

  });
        
    
    //tablet hover 
     $('img:nth-child(2)').hover(function() {
  $(this).attr('src', 'images/tabletHover.png')
  ;
       
  }, function() { //second function
    $(this).attr('src','images/tablet.png');

  });
    
    //sketchbook hover 
     $('img:nth-child(3)').hover(function() {
  $(this).attr('src', 'images/sketchbookHover.png')
  ;
       
  }, function() { //second function
    $(this).attr('src','images/sketchbook.png');

  });
   //watercolor hover 
        //tablet hover 
     $('img:nth-child(4)').hover(function() {
  $('img:nth-child(4)').attr('src', 'images/watercolorHover.png')
  ;
       
  }, function() { //second function
    $(this).attr('src','images/watercolor.png');

  });
        
   // phone hover  
     $('img:nth-child(5)').hover(function() {
  $(this).attr('src', 'images/phoneHover.png')
  ;
       
  }, function() { //second function
    $(this).attr('src','images/phone.png');

  });
//hide descriptions 
$('p').hide();
                        
// toggle click 
 $('img:nth-child(1)').click(function(){
$('p#backpack').slideToggle();
})
 
  $('img:nth-child(2)').click(function(){
$('p#tablet').slideToggle();
})
 
   $('img:nth-child(3)').click(function(){
$('p#sketchbook').slideToggle();
})
 
   $('img:nth-child(4)').click(function(){
$('p#watercolors').slideToggle();
})
   $('img:nth-child(5)').click(function(){
$('p#phone').slideToggle();
})
 
});

        

  
    
