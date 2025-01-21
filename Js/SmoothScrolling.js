const ANIMATIONTIME = `${1}s`; // 1Seconds

function explicitContent(content) {
    if ((content.closest('.carousel') != null && content.className != "carousel")) {
        return true;
    }
    return false;
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.27
};

const observerCallback = (entries) => {
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

function observeElements() {
    let divs = document.querySelectorAll("body *");
    for (let i = 0; i < divs.length; i++) {
        if (explicitContent(divs[i])) {
            continue;
        }
        divs[i].style.opacity = 0;
        observer.observe(divs[i]);
    }
}

observeElements();

const mutationObserver = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && !explicitContent(node)) { // Check if it's an element node
                    node.style.opacity = 0;
                    observer.observe(node);
                }
            });
        }
    }
});

mutationObserver.observe(document.body, { subtree: true, childList: true });