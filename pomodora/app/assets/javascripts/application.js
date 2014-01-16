// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_self
//= require_tree .
//= require twitter/bootstrap


$(function() {
  var button = $('#start')
  button.on("click", function() {
    button.prop("disabled",true)
    var useritem = $('#textbox').val()
    $('#header').hide()
    $('.completed').text(useritem)
    countdown("countdown", 0, 5);
  })
  function buttonToggle( ) {
    $('#yes').fadeToggle( "slow", "linear" )
    $('#no').fadeToggle( "slow", "linear" )
    button.prop("disabled",false)
  }
  function countdown(element, minutes, seconds) {
    var time = minutes*60 + seconds;
    var countdown = $('#countdown');
    var interval = setInterval(function() {
    var el = document.getElementById(element);
      if(time == -1) {
        countdown.fadeOut('slow', function() {
          countdown.text("Finished?")
          countdown.fadeIn('slow')
          $('#start').fadeToggle( "slow", "linear" )
          $('#start').css("display", "none")
          buttonToggle()
        })
        clearInterval(interval);
        return;
      }
      var minutes = Math.floor( time / 60 );
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
  }, 1000);
}
  $('#yes').on("click", function () {
    buttonToggle()
    $('#no').css("display", "none")
    $('#yes').css("display", "none")
    $('#start').fadeToggle( "slow", "linear" )
    $('#start').css("display", "inline")
    $('#countdown').fadeOut('slow', function() {
      $('#countdown').text("25:00")
      $('#countdown').fadeIn('slow');
    })
  })

  $('#no').on("click", function() {
    buttonToggle()
    $('#no').css("display", "none")
    $('#yes').css("display", "none")
    $('#start').fadeToggle( "slow", "linear" )
    $('#start').css("display", "inline")
    $('#countdown').text("25:00?")
  })
})


$(function() {
  var id = 10
  $('#yes').on("click", function() {
    id +=10
    $('.progressBar').attr("id", "max" + id)
    function progress(percent, element) {
      var progressBarWidth = percent * element.width() / 100;
      element.find('div').animate({ width: progressBarWidth }, 500);
    }
    $('.progressBar').each(function() {
      var bar = $(this);
      var max = $(this).attr('id');
      max = max.substring(3);
      progress(max, bar);
    });

});

})
