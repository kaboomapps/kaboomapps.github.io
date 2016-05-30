/*
 * @author Henry
 * Calls Magnific Popup on image click with the class 'image-popup'
 * Calls Magnific Popup on YouTube link click with the class 'youtube-popup'
 * Calls Magnific Popup on #div link with the class 'div-popup'
 * Calls Magnific Popup on any item in gallery click with the class 'gallery-popup'
 */

$(document).ready(function() {
    $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
    });

    $('.youtube-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.div-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    $('.gallery-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Carregant imatge #%curr%...',
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">La imatge #%curr%</a> no ha pogut ser carregada.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
                enabled: true,
                duration: 300
        }
    });
});