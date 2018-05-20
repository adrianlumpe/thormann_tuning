var M = require('materialize-css');
var owl = require('owl.carousel');

$(document).ready(function(){
  M.AutoInit();
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,

  });

  $("#menubutton").click(function(){
    var sideNav = M.Sidenav.getInstance($(".sidenav"));
    if(sideNav.isOpen) {
      sideNav.close();
    }
    else {
      sideNav.open();
    }
    $(this).toggleClass("is-active");
  });
});