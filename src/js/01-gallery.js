// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href='${original}'> <img src='${preview}' alt='${description}' class="gallery__image" /></a> `
  )
  .join('');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
