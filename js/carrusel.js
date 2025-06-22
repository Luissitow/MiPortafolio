/**
 * carousel.js - inicialización de Swiper para los carruseles de proyectos y servicios
 *
 * Apunta a #projects-carousel y .swiper-servicios con selectores únicos y estilos modernos.
 */

document.addEventListener('DOMContentLoaded', function() {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper.js no se ha cargado.');
    return;
  }

  // Carrusel de Proyectos
  var elemProyectos = document.getElementById('projects-carousel');
  if (elemProyectos) {
    new Swiper(elemProyectos, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      },
      pagination: {
        el: '#projects-carousel .swiper-pagination.pagination-number',
        clickable: true,
      },
      navigation: {
        nextEl: '#projects-carousel ~ .swiper-button-next.next-3d',
        prevEl: '#projects-carousel ~ .swiper-button-prev.prev-3d',
      },
      autoplay: {
        delay: 2200,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      },
    });
  }

  // Carrusel de Servicios
  var elemServicios = document.querySelector('.swiper-servicios');
  if (elemServicios) {
    new Swiper(elemServicios, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 1.5,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-servicios .swiper-pagination.pagination-servicios',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-servicios ~ .swiper-button-next.next-servicios',
        prevEl: '.swiper-servicios ~ .swiper-button-prev.prev-servicios',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      },
    });
  }
});

// Lógica para mostrar el botón "Cotiza" al hacer clic en móvil
document.querySelectorAll('.card-media').forEach(media => {
  media.addEventListener('click', function () {
    // Si ya estaba activo, quítalo
    if (media.classList.contains('show-button')) {
      media.classList.remove('show-button');
    } else {
      // Quita clase a todos y activa solo el que se tocó
      document.querySelectorAll('.card-media').forEach(el => el.classList.remove('show-button'));
      media.classList.add('show-button');
    }
  });
});
