import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.getElementsByClassName("gallery")[0]
let instance

createImages(galleryItems)

gallery.addEventListener("click", createModalImg)


function createImages(e) {
   const images = e.reduce ((arr,{ preview, original, description }) => {
       return arr + `<a class="gallery__link" href="${original}"><img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a> ` 
   },"")
    gallery.insertAdjacentHTML('beforeend', images)    
}


function delateModalImg({ key }) {   
    
    if (key === "Escape") {        
        instance.close()
        gallery.removeEventListener("keydown", delateModalImg)   
    }
    
}

function createModalImg(e) {    
    e.preventDefault()
     instance = basicLightbox.create(`<img src="${e.target.dataset.source}" >`)
    instance.show() 
    gallery.addEventListener("keydown", delateModalImg)    
}