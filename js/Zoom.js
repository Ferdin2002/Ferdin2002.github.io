var element, circle, d, x, y;
var i = 1;
var queue = [];

$(".inner").click(function(e){
  element = $(this);
  
  if (queue.length > 5) {
    $("._" + queue.shift()).remove();
  }
  
  if (i > 1000) {
    i = 0;
  }
  
   i++;
  queue.push(i);
  
  // Build element
  element.append("<span class='circle _" + i + "'></span>");
  circle = element.find("._" + i);
	
  // Make it big enough to cover whole parent
  if(!circle.height() && !circle.width()) {
    d = Math.max(element.outerWidth(), element.outerHeight());
    circle.css({height: d, width: d});
  }
  
  x = e.pageX - element.offset().left - circle.width() / 2;
  y = e.pageY - element.offset().top - circle.height() / 2 ;
  
  circle.css({top: y+'px', left: x+'px'}).addClass("animate");
})