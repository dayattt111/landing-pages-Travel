document.addEventListener("DOMContentLoaded", function() {
    const leftImage = document.querySelector(".left-image");
    const rightImage = document.querySelector(".right-image");

    function handleScroll() {
        const rect = document.querySelector('.container4').getBoundingClientRect();
        console.log("Scroll event detected"); // Debugging line
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            console.log("Container is in the viewport"); // Debugging line
            leftImage.style.transform = "translateX(0)";
            rightImage.style.transform = "translateX(0)";
            console.log("Transform applied:", leftImage.style.transform, rightImage.style.transform); // Debugging line
            window.removeEventListener('scroll', handleScroll); // Remove scroll event after triggering
        }
    }

    window.addEventListener('scroll', handleScroll);
});
