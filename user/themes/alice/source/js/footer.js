var M = require('materialize-css');
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
var ImagesLoaded = require('imagesloaded');
jQueryBridget( 'isotope', Isotope, $ );
jQueryBridget( 'imagesLoaded', ImagesLoaded, $ );

M.AutoInit();

var $grid = $('.gallery-grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: '.grid-item',
    horizontalOrder: true,
    gutter: 20
  }
});

$(document).ready(function(){

  $grid.imagesLoaded( function() {
    $('.grid-item').removeClass('hide-for-loading');
    $grid.isotope('layout');
  });

  $("#menubutton").click(function(){
    var sideNav = M.Sidenav.getInstance($(".sidenav"));
    console.log(sideNav.isOpen);
    if(sideNav.isOpen == false){
      sideNav.open();
      $(this).addClass("is-active");

    }
    else {
      sideNav.close();
      $(this).removeClass("is-active");
    }
  });
});

$('#maps-btn').click(function () {
  $('.head-banner').toggleClass('expanded')
  $('#maps-btn').toggleClass('rotate')
})

