require('core-js/fn/set');
require('core-js/fn/array/from');
require('core-js/fn/array/find');
require('core-js/fn/array/includes');
require('core-js/fn/object/assign');
var lib = require('./lib');
var textAnimation = require('./textAnimation');
var skillAnimation = require('./skillAnimation');
var particlesJs = require('exports-loader?window.particlesJS!particles.js');
var particlesJson = require('./particles.json');
var portfolio = require('./portfolio');
require('lity');

(function($) {
    "use strict";

    $(document).ready(function () { 

        textAnimation.init($('.intro .headline'));

        $(this).on("scroll",function() {        
            if ( lib.mobileNavClose === false )  {
                lib.mobileMenu(true);    
            }
            if ( $('.skill').length > 0 ) {
                if ( $(this).scrollTop() >= ($('#skills').position().top - 500) ) {
                    skillAnimation.run();
                }
            }
        });
    
        $('.btn-mobile').click(function () {            
            lib.mobileMenu();
        });
    
        $('.btn-close').click(function () {
            lib.mobileMenu(true);
        });
    
        $('a[href^="#"]').on('click', function (e) {       
            if (this.hash !== "") {
                e.preventDefault();
                if ( lib.mobileNavClose === false )  {
                    lib.mobileMenu(true);    
                }                   
                var target = $(this.hash);
                $('html, body').stop().animate({
                    'scrollTop': (target.offset().top - 80)
                }, 1000);
            }
        });

        particlesJs("particles", particlesJson);

        window.portfolio = new portfolio.init();            
              
    });
})( 
    jQuery,
    particlesJson
);