const blog_dot = document.querySelectorAll('.blog_dot');
const blogs_texts = document.querySelector('.blogs_texts');

let currentIndex = 0;

// blog_dot.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateNavbar(); // Call function to update navbar
//     });
// });


blog_dot.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        // moveText();
        updateBlogblog_dots();
        updateNavbar(); // Call function to update navbar
    });
});


function updateBlogblog_dots() {
    blog_dot.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active_blog_slider');
        } else {
            dot.classList.remove('active_blog_slider');
        }
    });
}

function updateNavbar() {
    const navbar = document.querySelector('.navbar_container');
    switch (currentIndex) {
        case 0:
            navbar.style.backgroundImage = "url('../assets/img/width_img1.png')";
            navbar.style.backgroundPosition = "center";
            navbar.style.backgroundSize = "cover";
            blogs_texts.innerText = "Embark on unforgettable journeys with Sail Away Adventures! Our boat travel agency specializes in curated cruises, island hopping, and coastal escapades. Whether you’re seeking serene sunsets, thrilling water sports, or tranquil fishing trips, we’ve got you covered. Set sail with us and let the waves carry you to blissful destinations.";
            break;
        case 1:
            navbar.style.backgroundImage = "url('../assets/img/width_img2.png')";
            blogs_texts.innerText = "Embark on unforgettable journeys with Sail Away Adventures! Our boat travel agency specializes in curated cruises, island hopping, and coastal escapades. Whether you’re seeking serene sunsets, thrilling water sports, or tranquil fishing trips, we’ve got you covered. Set sail with us and let the waves carry you to blissful destinations.";
            break;
        case 2:
            navbar.style.backgroundImage = "url('../assets/img/width_img3.png')";
            blogs_texts.innerText = "Embark on unforgettable journeys with Sail Away Adventures! Our boat travel agency specializes in curated cruises, island hopping, and coastal escapades. Whether you’re seeking serene sunsets, thrilling water sports, or tranquil fishing trips, we’ve got you covered. Set sail with us and let the waves carry you to blissful destinations.";
            break;
        // Add more cases for additional dots as needed
        default:
            navbar.style.backgroundImage = "url('default_image')";
            blogs_texts.innerText = "Default Text";
            break;
    }
}
