const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const shouldRun = !isReducedMotion && !isTouch;

if (shouldRun) {

    let mouseX = 0;
    let mouseY = 0;

    const pointer = document.querySelector('.pointer');

    const coordinates = document.querySelector('#coordinates strong');

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

    if (coordinates) {
        coordinates.innerText = `x: ${mouseX}, y: ${mouseY}`;
    }
});

    function animate() {
        pointer.style.setProperty('--mouse-x', `${mouseX}px`);
        pointer.style.setProperty('--mouse-y', `${mouseY}px`);

        requestAnimationFrame(animate);
    }

    animate();
}