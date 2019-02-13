var carouselSlideNumber = 1;

addCarouselIndicators();
showSlides(carouselSlideNumber);

function addCarouselIndicators() {
    var carouselSlideCount = document.getElementsByClassName("carousel-slide").length;
    var indicatorList = document.getElementById("carousel-indicators");

    for(var i = 1 ; i <= carouselSlideCount; i++){
        var indicator = document.createElement("li");
        indicator.setAttribute("class","carousel-indicators_indicator");
        indicator.setAttribute("onclick","currentCarouselSlide(" + i + ")");
        indicatorList.appendChild(indicator);
    }
}

function currentCarouselSlide(n) {
    showSlides(carouselSlideNumber = n);
}

function nextSlide(n) {
    showSlides(carouselSlideNumber += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-slide");
    var indicators = document.getElementsByClassName("carousel-indicators_indicator");
    if(n > slides.length) { 
        carouselSlideNumber = 1;
    }
    if(n < 1){
        carouselSlideNumber = slides.length;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(var i = 0; i < indicators.length; i++){
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[carouselSlideNumber - 1].style.display = "block";
    indicators[carouselSlideNumber - 1].className += " active";
}