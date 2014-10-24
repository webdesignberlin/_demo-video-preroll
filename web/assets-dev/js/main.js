;(function( $, window, document, undefined ) {
    // well, it's pretty strict...
    'use strict';
    
    var videoContainer = $('[data-video="video"]'),
        prerollContainer = $('[data-video="preroll"]'),
        preroll = $('#video')[0],
        videoSrc = '//www.youtube.com/embed/zWGGc14lZzY?rel=0';
        
    // Initial hide Video Container
    videoContainer.hide();
    
    // Autoplay and End Listening
    function playPreroll(){
        preroll.play();
        preroll.addEventListener('ended',function(){
            toggleContainer();
        });
    }
    playPreroll();
    
    // Skip Link
    $('.skip-preroll').on('click', function(){
        preroll.pause();
        toggleContainer();
    });
    
    // Funktion Toggle Container
    function toggleContainer(){
        prerollContainer.hide();
        videoContainer.show();    
        var video = videoContainer.find('iframe');
        video.attr('src', videoSrc);
    }
    

})(jQuery,window,document);
