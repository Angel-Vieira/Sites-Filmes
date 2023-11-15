const config = {
    type: 'carousel',
    perView: 5,
    gap: 5,
    slidesToShow: 3,
    perTouch: 0,
    center: true,
    // autoplay: 3000,
    breakpoints:{
        800:{perView:4},
        500:{perView:3},
        center: true
    }
}

new Glide('.glide', config).mount()


const carroussel2 = {
    type: 'carousel',
    perView: 5,
    gap: 8,
    center:true,
    perTouch: 3,
    touchRatio: 0.5,
    // autoplay: 1000,
    slidesToShow: 3,
    breakpoints:{
        800:{perView:4},
        500:{perView:3} 
    }
}

new Glide('.superior-category', carroussel2).mount()

const carroussel3 = {
    type: 'carousel',
    perView: 5,
    gap: 8,
    center:true,
    perTouch:4,
    slidesToShow: 3,
    // autoplay: 1000,
    breakpoints:{
        800:{perView:4},
        500:{perView:3} 
    }
}

new Glide('.inferior-category', carroussel3).mount()
