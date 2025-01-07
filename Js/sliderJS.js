class Slide {
    constructor(id, imgUrl, description) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.description = description;
    }
    createSlideElement() {
        return `<div class="slide" style="background-image: url(${this.imgUrl});"></div>`
    }
}
// madooo
let allImages = [
    {
        id: 1,
        imgUrl: './pics/BackgroundPic-600x600.jpg',
        description: 'This is a description'
    },
    {
        id: 2,
        imgUrl: './pics/fursheti.png',
        description: 'This is a description'
    },
    {
        id: 3,
        imgUrl: './pics/kafe1.png',
        description: 'This is a description'
    },
    {
        id: 4,
        imgUrl: './pics/lanchi.png',
        description: 'This is a description'
    },
    {
        id: 3,
        imgUrl: './pics/kafe1.png',
        description: 'This is a description'
    },
    {
        id: 4,
        imgUrl: './pics/lanchi.png',
        description: 'This is a description'
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

        for (let slide of slides) {
            slide.style.transform = `translateX(${-1 * ((sliderWidth + ExtraMargins) * IND)}px)`;
        }
    }, 2000); // Change slide every 2 seconds
}

autoSlide();

function resetAutoSlide() {
    clearInterval(slideInterval);
    autoSlide();
}
