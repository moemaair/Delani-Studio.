$(document).ready(function (){
  $('h4').css('fontWeight','700');
  $('.portfolio-img').hover(function (){
   $(this).css('opacity','0.6');
  },function (){
    $(this).css('opacity','1');
  })


  // form
  $('form').keypress(()=>{
    console.log('hey')
  })
  $('input,textarea').css('backgroundColor','transparent');
  $('input,textarea').css('border','2'+'px'+'white');

// what-we-do
// left
$('#design-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-design').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-design').css('display','none')

})


// // middle
$('#development-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-dev').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-dev').css('display','none')

})
// $('#development-icon').hover(function(){
//   $(this).css('display','block');

// },function(){
//     $(this).css('display','block');

// })
// // right
$('#PM-icon').hover(function(){
  $(this).css('display','none')
  $('#text-content-product').css('display','block')
}, function(){
  $(this).css('display','block')
  $('#text-content-product').css('display','none')

})
// $('#PM-icon').hover(function(){
//   $(this).css('display','none');

// },function(){
//     $(this).css('display','block');

// })
// $('.what-we-do img').hover(function(){
//   $(this).css('display','none')
// }, function(){
//   $(this).css('display','block')

// })


});