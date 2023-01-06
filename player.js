(function ($) {
    $(document).ready(function () {

        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

        // Pause/Play functionality

        let button = $('.print');
        let showVinyl = $('.vinyl');
        let song = new Audio('media/audio/DJ Chase - Make A Wish.mp3');

        button.on('click', function () {
            showVinyl.toggleClass("vinyl-out");
            button.toggleClass('is-playing');
            song.play();
            if (!button.hasClass('is-playing')) {
                song.pause();
            }
       
            
        });

// Music Buttons
let buyButton = $('.music-btn');
buyButton.on('click', function(){
    window.open('https://djchase.net/single/66718/make-a-wish');
})

// let shareButton = $('.music-btn-2');
// shareButton.on('click', function(){
//     window.open('https://twitter.com/share?url=https://djchase.net/single/66718/make-a-wish&text=Check Out this new Single from DJ Chase!');
// })

    })
})(jQuery);