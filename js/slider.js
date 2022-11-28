const slide = document.querySelectorAll ('.slide');

const clearActiveClasses = () => {
    slide.forEach((slide) => {
        slide.classList.remove('active');
    })
}


    slide.forEach(slide => {
    
        slide.addEventListener('click', () => {
        clearActiveClasses(slide);
        slide.classList.add('active');
    });
})