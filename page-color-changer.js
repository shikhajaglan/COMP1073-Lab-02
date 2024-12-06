// Initialize constants for sliders and body element
const redSlider = document.getElementById('red'); // Slider for red value
const greenSlider = document.getElementById('green'); // Slider for green value
const blueSlider = document.getElementById('blue'); // Slider for blue value
const body = document.body; // The page body element

// Function to update the background color based on slider values
function updateBackgroundColor() {
    const red = redSlider.value; // Get red value
    const green = greenSlider.value; // Get green value
    const blue = blueSlider.value; // Get blue value

    // Apply the new background color to the body element
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Attach event listeners to sliders to detect changes
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);
