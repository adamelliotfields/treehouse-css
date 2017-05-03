$(document).ready(function() {

  $('#toggle').click(function() {
      $(this).next('.nav').toggleClass("is-collapsed-mobile");
  });

});
