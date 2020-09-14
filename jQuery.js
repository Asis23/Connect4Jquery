
//example 1
// $('h1').click(function(){
//   console.log('There was a click!')
// })
//

//example 2
// $('li').click(function(){
//   console.log('any li was clicked!')
// })

//example 3
//".click or .dblclick" (click and double click)
//
// $('h1').dblclick(function(){
//   $(this).text("I was changed!")
// })


//key press
// $('input').eq(0).keypress(function(){
//   $('h3').toggleClass('turnBlue')
// })


// //keypress event
// $('input').eq(0).keypress(function(event){
//   if (event.which === 13){
//     $('h3').toggleClass('turnBlue');
//   }
// })


//on()
// $('h1').on('dblclick',function(){
//   $(this).toggleClass('turnBlue');
// })


//on()
// $('h1').on('mouseenter',function(){
//   $(this).toggleClass('turnBlue');
// })


//on()
$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000);
})
//can also be ".slideUp" instead od fadeOut
