// Crear los elementos en JavaScript
var gallerySection = document.createElement('section');
gallerySection.className = 'gallery';
gallerySection.id = 'portafolio';

var galleryContainer = document.createElement('div');
galleryContainer.className = 'contenedor';

var subtitulo = document.createElement('h2');
subtitulo.className = 'subtitulo';
subtitulo.textContent = 'Cenas';

var galeriaContainer = document.createElement('div');
galeriaContainer.className = 'contenedor-galeria';

// Array con las URLs de las imágenes
var imageUrls = [
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  'https://i.pinimg.com/564x/dd/4a/f4/dd4af4fde554819fd5f472a06273ff69.jpg',
  // Agrega aquí las URLs restantes de las imágenes
];

// Crear y agregar las imágenes al contenedor de la galería
imageUrls.forEach(function (imageUrl) {
  var img = document.createElement('img');
  img.src = imageUrl;
  img.alt = '';
  img.className = 'img-galeria';
  galeriaContainer.appendChild(img);
});

// Agregar los elementos al DOM
galleryContainer.appendChild(subtitulo);
galleryContainer.appendChild(galeriaContainer);
gallerySection.appendChild(galleryContainer);
document.body.appendChild(gallerySection);

// Evento para mostrar/ocultar la imagen ampliada
var imagenLightSection = document.querySelector('.imagen-light');
var closeButton = imagenLightSection.querySelector('.close');

galeriaContainer.addEventListener('click', function (event) {
  var targetImg = event.target;
  
  if (targetImg.classList.contains('img-galeria')) {
    var enlargedImage = document.querySelector('.agregar-imagen');
    enlargedImage.src = targetImg.src;
    imagenLightSection.style.display = 'flex';
  }
});

closeButton.addEventListener('click', function () {
  imagenLightSection.style.display = 'none';
});


  