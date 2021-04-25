$(function() {
  var n = 0;
  setInterval(function() {
      n = Math.floor((Math.random() * 5));
      $("#B div").hide();
      $("#B").find('div:eq('+n+')').show();
  },400);
});