$(document).ready(function() {

  function jumpToAnchor(href) {
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500, "easeOutQuint");
  };
  
  // controls scrolling when clicking nav items or back-to-top icon
  $(document).on("click", "nav a, .back-to-top a", function(e){
    var documentName = $.attr(this, 'href');
    jumpToAnchor(documentName);
    // var htmlFile = documentName +".html";
    // e.preventDefault();
    // $.ajax({url: htmlFile}).done(function() {
    //   $("#main .content").load(htmlFile, function(){
    //     loadSnippets( imports[documentName], snippets[documentName] );
    //   });
    // });
  });

  // controls toggling of nav sub-menus
  $(document).on("click", ".contents-list > li > a", function() {
  	$(this).next().slideToggle();
  });

  // switch control
  $(document).on("click", ".switch-plate", function() {
  	$(this).closest(".switch").toggleClass("on off");
  });

  // Button Slider control
  

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
    $(this).toggleClass("active");
  });

  // settings expand
  $("#settings-button").on("click", function() {
    $("#settings").toggleClass("collapsed");
  });

  // $(document).on("mousedown", ".slider-channel", function() {
  //   $(this).on("mousemove", function(){
  //     var sliderVal = $(this).val();
  //     console.log(sliderVal);
  //     var fillBar;
  //     $(".slider-channel::-webkit-slider-runnable-track::before").css("width", sliderVal);
  //   });
  // });

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

  // Toggle section
  $(document).on("click", ".toggle", function(e) {
    e.stopPropagation();
    $(this).siblings("article").slideToggle();
    console.log($(this).text());
    $(this).text() == "hide" ? $(this).text("show") : $(this).text("hide");
  });
});