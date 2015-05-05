$(document).ready(function() {

  function jumpToAnchor(anchor) {
    var scrollPos = $("#main-content").scrollTop();
    var offset = $(anchor).offset().top;
    var topNavHeight = document.getElementById("sg-top-bar").offsetHeight;
    var scrollAmount = scrollPos + offset - topNavHeight - 20;
    $('#main-content').animate({
      scrollTop: scrollAmount
    }, 500, "easeOutQuint");
  };
  
  // controls scrolling when clicking nav items or back-to-top icon
  $(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var documentName = $.attr(this, 'href');
    jumpToAnchor(documentName);
  });

  // controls scrolling when clicking back-to-top icon
  $(document).on("click", ".back-to-top a", function(e) {
    e.preventDefault();
    var documentName = $.attr(this, 'href');
    $('#main-content').animate({
      scrollTop: 0
    }, 500, "easeOutQuint");
  });

  // controls toggling of nav sub-menus
  $(document).on("click", ".contents-list > li > a", function() {
  	$(this).next().slideToggle();
    $(this).parent().siblings().find("ul").slideUp();
  });

  // Controls drop shadow display of #sg-top-bar
  $("#main-content").scroll(function() {
    if ($(this).scrollTop() > 0) {
      $("#sg-top-bar").addClass("scrolled");
    } else {
      $("#sg-top-bar").removeClass("scrolled");
    }
  });

  // switch control
  $(document).on("click", ".switch-plate", function() {
  	$(this).closest(".switch").toggleClass("on off");
  });

  // Slider Output control
  function updateOutput(input, value) {
    var output = input.parent().siblings("output");
    output.val(value);
  };

  $(document).on("input", ".slider-input", function() {
    var input = $(this);
    var inputVal = input.val();
    updateOutput(input, inputVal);
  });

  // Button Slider control
  function decreaseValue(input) {
    var inputVal = parseInt(input.val());
    input.val(inputVal -= 1);
    updateOutput(input, inputVal);
  };

  function increaseValue(input) {
    var inputVal = parseInt(input.val());
    input.val(inputVal += 1);
    updateOutput(input, inputVal);
  };

  $(document).on("click", ".less-button, .more-button", function() {
    var button = $(this);
    var input = button.siblings(".slider-input"); 
    if ( button.hasClass("less-button") ) {
      decreaseValue(input);
    } else {
      increaseValue(input);
    };
  });
  
  // tabs control
  $(document).on("click", ".tab-item", function() {
    var contentId = $(this).data("content-id");
    var tabComponent = $(this).closest(".tabs-component");
    var tabContent = tabComponent.find(".tabs-content");
    var contentSelector = "[data-content-id='" + contentId + "']";
    var targetContent = tabContent.find(contentSelector);
    targetContent.siblings().addClass("hidden");
    targetContent.removeClass("hidden");
    $(this).siblings().removeClass("active");
    if (!$(this).hasClass("active")) $(this).toggleClass("active");
  });

  // settings expand
  $("#settings-button").on("click", function() {
    $("#settings").toggleClass("collapsed");
  });

  // close settings
  $("#settings .close-button").on("click", function() {
    $("#settings").toggleClass("collapsed");
  });

  // Modal show
  $("#agl-logo").on("click", function() {
    $("#modal").toggleClass("hidden");
  });

  // close modal
  $("#modal .close-button").on("click", function() {
    $("#modal").toggleClass("hidden");
  });
});