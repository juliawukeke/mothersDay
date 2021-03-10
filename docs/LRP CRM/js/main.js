$(function () {
    function shakeAnimation() {
        $('.js-shakeAniFadeOut').animate({
            opacity: 0,
        }, 600, function () {
            // Loading Animation
            $('.l-main__shine').css({
                'animation-name': 'rotateBg'
            })
            $('#js-changePic')
                .attr('src', 'image/index/flowers_after.svg')
                .addClass('is-larger')
        });
    }

    $('#btn_shake').on('click', function (e) {
        e.preventDefault();
        shakeAnimation();
        setTimeout(function () {
            window.location.href = 'gift_large.html'
        }, 3000)
    })
});