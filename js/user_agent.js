// https://modernizr.com

//Add Modernizr test
Modernizr.addTest('isios', function() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
});

//usage
if (Modernizr.isios) {
  //this adds ios class to body
  Modernizr.prefixed('ios');
} else {
  //this adds notios class to body
  Modernizr.prefixed('notios');
}