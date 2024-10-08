// Array of image sources
const images = [
    './assets/images/helmet1.png',
    './assets/images/helmet2.png', // Add your other image paths here
    './assets/images/helmet3.png'  // Add more images as needed
];

let currentIndex = 0; // Start with the first image

// Get references to the image element and buttons
const helmetImage = document.getElementById('helmetImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image
function updateImage() {
    helmetImage.src = images[currentIndex];
}

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop to last image if at the start
    updateImage();
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop to first image if at the end
    updateImage();
});

// Initialize the first image
updateImage();


// Currcency

// Function to change the currency when an option is selected
function changeCurrency(currency) {
    document.getElementById("selectedCurrency").textContent = currency;
}

        const blogEvents = [
            {
                date: '07/09/2017',
                title: 'Dennis wins Van Doren Invitational WSBC Champ.',
                image: './assets/images/mini1.jpg'
            },
            {
                date: '07/09/2017',
                title: 'Dennis wins Van Doren Invitational WSBC Champ.',
                image: './assets/images/mini12.jpg'

            },
            {
                date: '07/09/2017',
                title: 'Dennis wins Van Doren Invitational WSBC Champ.',
                image: './assets/images/mini123.jpeg'

            }
        ];

        const blogEventsContainer = document.getElementById('blogEvents');

        blogEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'flex items-start space-x-2 md:space-x-4 mb-4 md:mb-6';
            eventElement.innerHTML = `
                <img src="${event.image}" alt="${event.title}" class="w-16 h-16 md:w-24 md:h-24 object-cover">
                <div>
                    <p class="text-gray-500 text-xs mb-1">${event.date}</p>
                    <h3 class="font-bold text-xs md:text-sm mb-1">${event.title}</h3>
                    <a href="#" class="text-red-500 text-xs font-bold">READ MORE</a>
                </div>
            `;
            blogEventsContainer.appendChild(eventElement);
        });
  
