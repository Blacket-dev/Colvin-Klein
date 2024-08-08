// scripts.js

// Selecting all option buttons
const optionButtons = document.querySelectorAll('.option-btn');

// Images and videos associated with each option
const mediaContent = {
    'Option 1': {
        imageSrc: './image/ComfyUI1.jpg',
        videoSrc: './video/video1.mp4'
    },
    'Option 2': {
        imageSrc: './image/ComfyUI2.jpg',
        videoSrc: './video/video2.mp4'
    },
    'Option 3': {
        imageSrc: './image/ComfyUI3.jpg',
        videoSrc: './video/video3.mp4'
    },
    'Option 4': {
        imageSrc: './image/ComfyUI4.jpg',
        videoSrc: './video/video4.mp4'
    },
    'Option 5': {
        imageSrc: './image/ComfyUI5.jpg',
        videoSrc: './video/video5.mp4'
    },
    'Option 6': {
        imageSrc: './image/ComfyUI6.jpg',
        videoSrc: './video/video6.mp4'
    }
};

// Selecting the image and video elements
const displayedImage = document.querySelector('.image-grid img');
const videoElement = document.querySelector('.video-display video');

// Adding event listeners to each option button
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active' class from all buttons
        optionButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add the 'active' class to the clicked button
        this.classList.add('active');

        // Update the image and video based on the selected option
        handleOptionClick(this.textContent);
    });
});

// Function to handle image and video changes based on clicked option
function handleOptionClick(optionText) {
    if (mediaContent[optionText]) {
        const { imageSrc, videoSrc } = mediaContent[optionText];
        
        // Update the displayed image source
        displayedImage.src = imageSrc;
        
        // Update the video source and reload the video
        videoElement.querySelector('source').src = videoSrc;
        videoElement.load(); // Reload the video with the new source
    } else {
        console.error('No media content found for:', optionText);
    }
}
