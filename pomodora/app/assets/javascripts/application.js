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


//for functions that are used alot, customize them
//so they can accept different parameters
//dont instantiate every


function hideYesandNo() {
    var start = $('#start');
    $('#yes').fadeToggle( "slow", "linear" );
    $('#no').fadeToggle( "slow", "linear" );
    start.prop("disabled",false);
};

var startClicked = (function (button) {
  counter = 0;
  var triggerCountdown = function (event, button){
    if ($('#textbox').val().length >= 1) {
      counter++
      createTodoItem(counter)
    }
    button.starts.prop("disabled",true)
    countdown("countdown", 0, 4);
  };
  var createTodoItem = function (counter) {
    var itemNum = "item" + counter
    var itemNumber = document.createElement("div")
    itemNumber.setAttribute("id", itemNum)
    itemNumber.setAttribute("class", "completed")
    $('.list-container').append(itemNumber)
    $('.completed').css("display", "inline")
    var useritem = $('#textbox').val()
    $("#" + itemNum).text(useritem)
  };
  var countdown = function (element, minutes, seconds) {
    var time = minutes*60 + seconds;
    var countdown = $('#countdown');
    var interval = setInterval(function() {
    var el = document.getElementById(element);
      if(time == -1) {
        countdown.fadeOut('slow', function() {
          countdown.css("display", "none")
          $(".finished").css("display", 'inline')
          $('#start').fadeToggle( "slow", "linear" )
          $('#start').css("display", "none")
          hideYesandNo()
        })
        console.log("interval " + interval)
        clearInterval(interval);
        return;
      }
      var minutes = Math.floor( time / 60 );
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      var text = minutes + ':' + seconds;
      console.log(text)
      el.innerHTML = text;
      console.log(el)
      time--;
    }, 1000);
  };

  var bindFunctions = function (button) {
    button.starts.on("click", function (event){
      triggerCountdown(event, button);
    });
  };

  var init = function (button) {
    bindFunctions(button);
  };

  return {
    init: init,
    startClicked: startClicked
  };
}) ();

function showStartHideYesNo(button) {
  $('.finished').fadeOut('slow', function() {
      $('.finished').css("display", "none")
      $('#countdown').css("display", "inline-block")
    })
  button.no.css("display", "none")
  button.yes.css("display", "none")
  button.starts.fadeToggle( "slow", "linear" )
  button.starts.css("display", "inline")
  button.starts.prop("disabled", false)
};
var buttonClicked = (function (button) {
  var id = 0;
  var queFeature = function queFeature(yes, opacityLevel) {
    if (yes) {
      var opacityAmount = 1.0
      opacitySetting(1)
    }
    else {
      var opacityAmount = 0.0
      opacitySetting(0)
    };
  };

  var opacitySetting = function (opacityAmount) {
    console.log(opacityAmount)
    var moveItem = (counter * -20) +25
    var topAmount = "+=" + (180 + moveItem)
    $('#item' + counter).animate({
    top: topAmount,
    opacity: opacityAmount,
    }, 3000, function() {});
};
  var noButton = function(event, button) {
    queFeature();
    hideYesandNo();
    showStartHideYesNo(button);
  };
  var yesButton = function(event, button) {
    queFeature(yes)
    hideYesandNo();
    showStartHideYesNo(button)
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
  }

  var bindFunctions = function (button) {
    button.no.on("click",  function (event) {
      noButton(event, button);
    })
    button.yes.on("click",  function (event) {
      yesButton(event, button);
    })
  };

  var init = function (button) {
    bindFunctions(button);
  };

  return {
    noButton: noButton,
    init: init
  }
}) ();

var NewsFeed = {
  init: function () {
    NewsFeed.displays()
  },
  texts: [["Jenna ~ Read two chapters"], ["Mary ~ Write a Cover Letter"], ["Dave ~ Practice Designing"], ["Alex ~ Outline Blog Post"],["Jamie ~ finish reading the news"]],
  textdisplay: document.getElementById('newsfeed'),
  displays: function () {
    var counterDisplay = 0
    var feed = document.getElementById('newsfeed')
      setInterval(function(){
        $('#newsfeed').css("display", "none")
        feed.innerHTML = NewsFeed.texts[counterDisplay][0]
        $('#newsfeed').show( 1500, function() {});
        counterDisplay++
        if (counterDisplay == NewsFeed.texts.length) {
            counterDisplay = 0;
          }
        },11000)
      }
    }

$(function (){
  var button = {};
  button.no = $('#no');
  button.yes = $('#yes');
  button.starts = $('#start');
  startClicked.init(button)
  NewsFeed.init(button)
  buttonClicked.init(button)
})

