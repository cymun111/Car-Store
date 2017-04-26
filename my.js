$(document).ready(function(){
//Highlites on Contact form
$("#fullname").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#fullname").blur(function() {
  $(this).css("background","white");
});
$("#email").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#email").blur(function() {
  $(this).css("background","white");
});
$("#location").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#location").blur(function() {
  $(this).css("background","white");
});
$("#question").focus(function () {
  $(this).css('background','#ff4d4d');
});
$("#question").blur(function() {
  $(this).css("background","white");
});
//Hightlights on Hardware




  /*Search String*/
  $("#searchbar").keyup(function () {
      var searchTerm = $("#searchbar").val();
      var listItem = $('.results tbody').children('tr');
      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

    $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
          return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });

    $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
      $(this).attr('visible','false');
    });

    $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
      $(this).attr('visible','true');
    });

    var jobCount = $('.results tbody tr[visible="true"]').length;
      $('.counter').text(jobCount + ' item');

    if(jobCount == '0') {$('.no-result').show();}
      else {$('.no-result').hide();}
  		  });
  });
 //Thumbnail Hover script
$(".thumbnail").hover(
        function(){
            $(this).find('.caption td').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption td').slideUp(250); //.fadeOut(205)
        });
$('#searchBar').keyup(function() {
  window.location.href='inventory.html';
        });

});
