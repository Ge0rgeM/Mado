class Slide {
    constructor(id, imgUrl, description) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.description = description;
    }
    createSlideElement() {
        return `<div class="slide" style="background-image: url(${this.imgUrl});">
                    <div data-translate = "descriptionId${this.id}" class="slideDescription"><p>${this.description}</p></div>
                </div>`
    }
}
let allImages = [
    {
        id: 1,
        imgUrl: './pics/BackgroundPic-600x600.jpg',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
    {
        id: 2,
        imgUrl: './pics/fursheti.png',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
    {
        id: 3,
        imgUrl: './pics/kafe1.png',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
    {
        id: 4,
        imgUrl: './pics/lanchi.png',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
    {
        id: 5,
        imgUrl: './pics/kafe1.png',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
    {
        id: 6,
        imgUrl: './pics/lanchi.png',
        description: 'ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა,ეს არის აღწერა.'
    },
]

function addSlides(){
    let slides = document.getElementsByClassName('slideContainer')[0];
    for(let i = 0; i < allImages.length; i++){
        console.log(allImages[i].imgUrl)
        let temp = new Slide(allImages[i].id, allImages[i].imgUrl, allImages[i].description)
        slides.innerHTML += temp.createSlideElement();
    }
}

addSlides()

let IND = 0
let ExtraMargins = 20
function moveSlide(e){
    let slides = document.getElementsByClassName('slideContainer')[0].children;
    console.log(e.dataset.slider)
    
    let button = e.dataset.slider
    let sliderWidth = slides[0].offsetWidth + 0.5;
    console.log(IND)
    let nOfSlides = slides.length - 2;
    if(button === "Right"){
        resetAutoSlide();
        IND = (IND + 1) % (nOfSlides);
        for(let slide of slides){
            slide.style.transform = `translateX(${-1* ((sliderWidth + ExtraMargins)*IND)}px)`;
        }
    }else if(button === "Left"){
        resetAutoSlide();
        IND = (IND - 1 + nOfSlides) % (nOfSlides);
        for(let slide of slides){
            slide.style.transform = `translateX(${-1* ((sliderWidth + ExtraMargins)*IND)}px)`;
        }
    }
    console.log(IND)
}

let slideInterval;
function autoSlide() {
    let RightMoving = true;
    slideInterval = setInterval(() => {
        let slides = document.getElementsByClassName('slideContainer')[0].children;
        let sliderWidth = slides[0].offsetWidth + 0.5;
        let nOfSlides = slides.length - 3;
        console.log(IND);

        if (RightMoving) {
            IND++;
            if (IND === nOfSlides) {
                RightMoving = false;
            }
        } else {
            IND--;
            if (IND === 0) {
                RightMoving = true;
            }
        }
        if(IND < 0){
            IND = 1;
            RightMoving = true;
        }
        if (IND > nOfSlides) {
            IND = nOfSlides - 1;
            RightMoving = false;
        }
        for (let slide of slides) {
            slide.style.transform = `translateX(${-1 * ((sliderWidth + ExtraMargins) * IND)}px)`;
        }
    }, 2000); // Change slide every 5 seconds
}

autoSlide();

function resetAutoSlide() {
    clearInterval(slideInterval);
    autoSlide();
}
