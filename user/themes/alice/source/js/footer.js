var M = require('materialize-css');

$(document).ready(function(){
  M.AutoInit();

  $("#menubutton").click(function(){
    var sideNav = M.Sidenav.getInstance($(".sidenav"));
    if(sideNav.isOpen) {
      sideNav.close();
      $(this).removeClass("is-active");
    }
    else {
      sideNav.open();
      $(this).addClass("is-active");
    }

  });
});