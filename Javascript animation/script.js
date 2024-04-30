// script.js
let movingRight = true; // Track the direction of movement

document.getElementById('animateButton').addEventListener('click', function() {
    const div = document.getElementById('animatableDiv');
    const maxDistance = window.innerWidth - div.offsetWidth; // Maximum distance to move
    let currentPosition = parseInt(getComputedStyle(div).left, 10) || 0; // Current position of the <div>
    
    function animate() {
        if (movingRight && currentPosition < maxDistance) {
            currentPosition += 10; // Move right by 10px
        } else if (!movingRight && currentPosition > 0) {
            currentPosition -= 10; // Move left by 10px
        } else {
            movingRight = !movingRight; // Change direction
            return; // Stop current animation iteration
        }

        div.style.left = `${currentPosition}px`;

        requestAnimationFrame(animate); // Schedule the next frame
    }

    animate(); // Start the animation
});
