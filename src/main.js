import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
  overlayOpacity: 0.8,
});

form.addEventListener('submit', onSearch);
function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, you have to type something in the search field. Please try again!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  gallery.innerHTML = '';

  fetchImages(query).then(images => {
    hideLoader();
    if (images.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    gallery.innerHTML = '';
    renderGallery(images.hits);
    lightBox.refresh();
  });

  form.reset();
}

function renderGallery(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}">
        </a>
          <div class="image-stats">
            <ul class="image-stats-list">
              <li class="image-stats-item">
                <p class="image-stats-title">Likes</p>
                <p class="image-stats-text">${likes}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Views</p>
                <p class="image-stats-text">${views}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Comments</p>
                <p class="image-stats-text">${comments}</p>
              </li>
              <li class="image-stats-item">
                <p class="image-stats-title">Downloads</p>
                <p class="image-stats-text">${downloads}</p>
              </li>
            </ul>
          </div>
        
      </li>`
    )
    .join('');

  if (!lightBox) {
    lightBox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
function showLoader() {
  loader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
}
