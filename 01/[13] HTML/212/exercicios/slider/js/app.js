function pageScroll(){
    var slider = document.querySelector('[wm-slider]')
    var widthScroll = slider.scrollLeft 

    slider.scrollBy(5,0);
    scrollDelay = setTimeout(pageScroll,20);

    console.log(widthScroll)
    
    if(widthScroll == 3000){ // ???? 
        slider.scrollLeft = 0
    }

}

pageScroll()