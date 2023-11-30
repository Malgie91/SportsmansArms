
// I have used the Intersection Obsever to add the fade-in-left & fade-in-right CSS animations I created. the intersection observer acts as a window and we ask that window to look for elements with a certain class. when the element comes into the window view it adds the animation class to that element. this is one of the many things of what javascript is capable of 

const boxOnes = document.querySelectorAll('.boxOne');
const boxTwosFlipped = document.querySelectorAll('.boxTwoFlipped');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fadeInLeft');
        }
    });
});

boxOnes.forEach(box => {
    observer.observe(box);
});

const observerTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fadeInRight');
        }
    });
});

boxTwosFlipped.forEach(box => {
    observerTwo.observe(box);
});