import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.getElementsByClassName("gallery")[0]


createImages(galleryItems)

// gallery.addEventListener("click", createModalImg)
// gallery.addEventListener("keydown", delateModalImg)

function createImages(e) {
   const images = e.reduce ((arr,{ preview, original, description }) => {
       return arr + `<li><a class="gallery__item" href="${original}"><img class="gallery__image"
      src="${preview}" alt="${description}"/></a></li> ` 
   },"")
    gallery.insertAdjacentHTML('beforeend', images)    
}
const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: "alt",
    captionDelay:250,
});