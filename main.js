$(document).ready(function (){

// what-we-do

// left
$('#design-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-design').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-design').css('display','none')

})


// middle
$('#development-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-dev').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-dev').css('display','none')

})

// right
$('#PM-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-product').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-product').css('display','none')

})
 $('.text-content').css('text-align','center');
 $('.what-we-do h6').css('fontWeight','bold');

 
// form
$('input,textarea').css('backgroundColor','transparent');
$('input,textarea').css('border','2'+'px'+'white');

 $('#submit').click(()=>{
   var name = $('.name').val()
   alert(`${name } we have received your message. Thank you for reaching out to us.`)
 })
 

});