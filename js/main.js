$(document).ready(function (){
    $("#txt-f").hide();
    $("#txt-t").hide();
    $("#txt-g").hide();
    $("#txt-gt").hide();
    $(".ff").hover(function() {
        $("#txt-f").show('fast');
    }, function() {
      $("#txt-f").hide('fast');
    });
    $(".ft").hover(function() {
        $("#txt-t").show('fast');
    }, function() {
      $("#txt-t").hide('fast');
    });
    $(".fg").hover(function() {
        $("#txt-g").show('fast');
    }, function() {
      $("#txt-g").hide('fast');
    });
    $(".fgt").hover(function() {
        $("#txt-gt").show('fast');
    }, function() {
      $("#txt-gt").hide('fast');
    });
    //Menu
    $(".MainMenu-link").on("click", function (e){
      e.preventDefault();
      $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);
    });
  });
  $(function(){
    $(".rslides").responsiveSlides();
    if (window.matchMedia("(max-width:768px)").matches){
      var $buttonShowMenu = document.getElementById('showMenu');
      var $buttonHideMenu = document.getElementById('hideMenu');
      var $menu = document.getElementById('menu');

      var $body = document.querySelector('body');

      var body = new Hammer($body);

      var showMenu = function(){
                    $buttonShowMenu.classList.remove('is-active');
                    $buttonHideMenu.classList.add('is-active');
                    $menu.classList.add('is-active');
                };
      var hideMenu = function(){
                    $buttonShowMenu.classList.add('is-active');
                    $buttonHideMenu.classList.remove('is-active');
                    $menu.classList.remove('is-active');
                };

                $buttonShowMenu.addEventListener("click", showMenu);

                $buttonHideMenu.addEventListener("click", hideMenu);

               body.on('panright', showMenu);
               body.on('panleft', hideMenu);
    }
  });