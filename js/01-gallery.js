import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('afterbegin', markup(galleryItems));

galleryList.addEventListener('click', handlerClick);


function markup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `).join('')
};


function handlerClick(event) {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return
  };

  const imageUrl = event.target.dataset.source;
  const imageDescription = event.target.getAttribute('alt');
  
  const instance = basicLightbox.create(
    `<img src="${imageUrl}" alt="${imageDescription}" width="800" height="600">`,
    {
        onShow: () => { document.addEventListener("keydown", onEscKey) },
        onClose: () => { document.removeEventListener("keydown", onEscKey) }
    }
  );

  function onEscKey(event) {
     if (event.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}



