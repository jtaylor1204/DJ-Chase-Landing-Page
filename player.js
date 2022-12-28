(function ($) {
    $(document).ready(function () {

        // Pause/Play functionality
       
        let button = $('#print');
        let showVinyl = $('#vinyl');
        let wrap = $('#wrap');
        let song = new Audio ('media/audio/DJ Chase - Make A Wish.mp3');

        button.on('click', function () {
            showVinyl.toggleClass("vinyl-out");
            button.toggleClass('is-playing');
            song.play();
        if(!button.hasClass('is-playing')){
            song.pause();
        }
        });


    })
})(jQuery);