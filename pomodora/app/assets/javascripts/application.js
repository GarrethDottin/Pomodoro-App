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

console.log("this is working1")
$(function() {
  // $.fn.addSliderSegments = function (amount) {
  //   return this.each(function () {
  //     var segmentGap = 100 / (amount - 1) + "%"
  //       , segment = "<div class='ui-slider-segment' style='margin-left: " + segmentGap + ";'></div>";
  //     $(this).prepend(segment.repeat(amount - 2));
  //   });
  // };
  // var $slider = $("#slider");
  //   if ($slider.length) {
  //     $slider.slider({
  //       min: 1,
  //       max: 5,
  //       value: 2,
  //       orientation: "horizontal",
  //       range: "min"
  //     }).addSliderSegments($slider.slider("option").max);
  //   }

  console.log("this is working")
  var button = $('button')
  button.on("click", function() {
    var useritem = $('#textbox').val()
    console.log(useritem)
    console.log("this is hit")
    $('#header').hide()
    $('.completed').text(useritem)
    countdown("countdown", 24, 59);
  })

    function countdown(element, minutes, seconds) {
      var time = minutes*60 + seconds;
      var interval = setInterval(function() {
          var el = document.getElementById(element);
          if(time == 0) {
              el.innerHTML = "countdown's over!";
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



})