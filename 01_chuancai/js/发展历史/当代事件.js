$(function() {
  var showcase = $("#showcase")

  showcase.Cloud9Carousel( {
    yOrigin: 42,
    yRadius: 40,
    itemClass: "card",
    buttonLeft: $(".nav.left"),
    buttonRight: $(".nav.right"),
    bringToFront: true,
    onLoaded: function() {
      showcase.css( 'visibility', 'visible' )
      showcase.css( 'display', 'none' )
      showcase.fadeIn( 1500 )
    }
  } )

  //
  // Simulate physical button click effect
  //
  $('.nav').click( function( e ) {
    var b = $(e.target).addClass( 'down' )
    setTimeout( function() { b.removeClass( 'down' ) }, 80 )
  } )

  $(document).keydown( function( e ) {
    //
    // More codes: http://www.javascripter.net/faq/keycodes.htm
    //
    switch( e.keyCode ) {
      /* left arrow */
      case 37:
        $('.nav.left').click()
        break

      /* right arrow */
      case 39:
        $('.nav.right').click()
    }
  } )
})






//模糊效果
// 假设您有一个函数可以计算哪个卡片应该被激活（基于拖拽位置）  
// function getActiveCardIndex(/* 拖拽信息 */) {  
//   // 返回应该被激活的卡片索引  
//   return index;  
// }  
  
// // 拖拽逻辑（这里仅作为伪代码示例）  
// document.addEventListener('dragend', function(e) {  
//   // 清除所有卡片的active类  
//   var cards = document.querySelectorAll('.card');  
//   cards.forEach(function(card) {  
//     card.classList.remove('active');  
//   });  
  
//   // 根据拖拽位置激活对应的卡片  
//   var activeIndex = getActiveCardIndex(/* 拖拽信息 */);  
//   if (activeIndex >= 0 && activeIndex < cards.length) {  
//     cards[activeIndex].classList.add('active');  
//   }  
// });  
  
// 初始化时，确保第一个卡片是激活的  
// document.querySelector('.card.image1').classList.add('active');  
