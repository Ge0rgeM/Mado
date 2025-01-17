ANIMATIONTIME = `${1}s`; // 2Seconds

function explicitContent(content){
    if(content.closest('.carousel') != null && content.className != "carousel"){
        console.log(content.className)
        return true
    } 
    return false
}
document.addEventListener('DOMContentLoaded', () => {
    let divs = document.querySelectorAll("body *");
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.27
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity ' + ANIMATIONTIME;
                entry.target.style.opacity = 1;
            } else {
                entry.target.style.transition = 'opacity ' + ANIMATIONTIME;
                entry.target.style.opacity = 0;
            }   
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    for(let i = 0; i < divs.length; i++){
        if (explicitContent(divs[i])) {
            continue;
        }
        divs[i].style.opacity = 0;
        observer.observe(divs[i]);
    }
});