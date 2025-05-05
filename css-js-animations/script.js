// Handle the button animation
const animateButton = document.getElementById('animateButton');
const animateImage = document.getElementById('animateImage');

animateButton.addEventListener('click', () => {
  animateImage.classList.toggle('animate');
});

// Store and retrieve user preferences using localStorage
const saveButton = document.getElementById('savePreferences');
const colorInput = document.getElementById('bgColor');
const savedColorDisplay = document.getElementById('savedColor');

// Check if there's a saved background color in localStorage and apply it
if (localStorage.getItem('bgColor')) {
  document.body.style.backgroundColor = localStorage.getItem('bgColor');
  savedColorDisplay.textContent = `Saved color: ${localStorage.getItem('bgColor')}`;
} else {
  savedColorDisplay.textContent = 'No saved color.';
}

// Save the color preference to localStorage
saveButton.addEventListener('click', () => {
  const color = colorInput.value;
  localStorage.setItem('bgColor', color);
  document.body.style.backgroundColor = color;
  savedColorDisplay.textContent = `Saved color: ${color}`;
});
