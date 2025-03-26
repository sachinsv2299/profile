const photos = [
    
    { url: './image/22.jpeg', category: 'nature' },
    { url: './image/11.jpeg', category: 'nature' },
    { url: './image/13.jpeg', category: 'nature' },
    { url: './image/14.jpeg', category: 'nature' },
    { url: './image/31.jpeg', category: 'nature' },
    { url: './image/4.jpeg', category: 'portrait' },
    { url: './image/17.jpeg', category: 'nature' },
    { url: './image/21.jpeg', category: 'nature' },
    { url: './image/32.jpeg', category: 'nature' },
    { url: './image/18.jpeg', category: 'nature' },
    { url: './image/16.jpeg', category: 'nature' },
    { url: './image/8.jpeg', category: 'city' },
    { url: './image/55.jpeg', category: 'portrait' },
    { url: './image/47.jpeg', category: 'portrait' },
    { url: './image/64.jpeg', category: 'portrait' },
    { url: './image/59.jpeg', category: 'portrait' },
    { url: './image/50.jpeg', category: 'portrait' },
    { url: './image/58.jpeg', category: 'portrait' },
    { url: './image/5.jpeg', category: 'city' },
    { url: './image/48.jpeg', category: 'city' },
    { url: './image/39.jpeg', category: 'city' },
    { url: './image/2.jpeg', category: 'portrait' },
    { url: './image/3.jpeg', category: 'nature' },
    { url: './image/46.jpeg', category: 'portrait' },   
    { url: './image/24.jpeg', category: 'city' },
    { url: './image/30.jpeg', category: 'city' },
    { url: './image/29.jpeg', category: 'nature' },
    { url: './image/33.jpeg', category: 'nature' },
    { url: './image/27.jpeg', category: 'nature' },
    { url: './image/7.jpeg', category: 'city' },
    { url: './image/20.jpeg', category: 'nature' },
    { url: './image/53.jpeg', category: 'portrait' },
    { url: './image/23.jpeg', category: 'city' },
    { url: './image/26.jpeg', category: 'nature' },
    { url: './image/34.jpeg', category: 'nature' },  
];

function displayPhotos(category) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';

    const filteredPhotos = category === 'all' ? photos : photos.filter(photo => photo.category === category);

    filteredPhotos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.url;
        imgElement.alt = photo.category;
        gallery.appendChild(imgElement);
    });
}

function filterPhotos(category) {
    displayPhotos(category);
}

// Load all photos on first load
window.onload = () => {
    displayPhotos('all');
};