const back = document.querySelector('#back');
const next = document.querySelector('#next');
const items = document.querySelectorAll('.item');

const photos = ['1.jpg', 'slide6.jpg', 'slide2.avif', 'slide3.avif', 'slide4.jpg', 'slide5.jpg', 'slide8.jpg', 'slide9.jpg', '2.jpeg', '3.jpeg'];

let i = 0;

next.addEventListener('click', () => {
i++;
if (i > photos.length -1) {
    i = 0;
}
document.querySelector('#pictures').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
})

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
        item.classList.remove('selected');
        })
    }
})