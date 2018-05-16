var M = require('materialize-css');
var owl = require('owl.carousel');
M.AutoInit();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
  });
});