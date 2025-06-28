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
        renderBullet: function (index, className) {
          return `<span class="${className}" data-index="${index + 1}"></span>`;
        }
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

//modeal
document.addEventListener('DOMContentLoaded', function() {
  // Datos de los proyectos
  const projectsData = {
    ecommerce: {
      title: "Plataforma E-commerce",
      description: "Desarrollo completo de una plataforma de comercio electrónico con carrito de compras, pasarela de pago integrada y panel de administración avanzado.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
      images: [
        "/img/proyectos/ecommerce-1.jpg",
        "/img/proyectos/ecommerce-2.jpg",
        "/img/proyectos/ecommerce-3.jpg"
      ],
      features: [
        "Catálogo de productos con filtros avanzados",
        "Sistema de valoraciones y reseñas",
        "Integración con Stripe y PayPal",
        "Dashboard analítico para administrador",
        "Optimizado para SEO y rendimiento"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    finance: {
      title: "App de Gestión Financiera",
      description: "Aplicación web y móvil para gestión de finanzas personales con análisis de gastos, presupuestos personalizados y gráficos interactivos.",
      technologies: ["Vue.js", "Firebase", "Chart.js", "Vuex", "PWA"],
      images: [
        "/img/proyectos/finance-1.jpg",
        "/img/proyectos/finance-2.jpg",
        "/img/proyectos/finance-3.jpg"
      ],
      features: [
        "Sincronización en tiempo real",
        "Informes personalizados",
        "Notificaciones inteligentes",
        "Modo offline disponible",
        "Autenticación segura"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    education: {
      title: "Portal Educativo Interactivo",
      description: "Plataforma LMS para aprendizaje online con cursos interactivos, sistema de evaluación y seguimiento de progreso.",
      technologies: ["MERN Stack", "Socket.io", "JWT", "AWS S3"],
      images: [
        "/img/proyectos/education-1.jpg",
        "/img/proyectos/education-2.jpg",
        "/img/proyectos/education-3.jpg"
      ],
      features: [
        "Cursos con lecciones multimedia",
        "Sistema de certificación",
        "Foros de discusión",
        "Evaluaciones automatizadas",
        "Panel de progreso"
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
    // ... puedes agregar más proyectos aquí
  };

  // Modal functionality
  const modal = document.getElementById('projectModal');
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModal = document.querySelector('.mil-close');

  openModalButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      loadProjectData(projectId);
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  function loadProjectData(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Actualizar contenido
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    // Tecnologías
    const techContainer = document.querySelector('.mil-project-meta');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
      const techSpan = document.createElement('span');
      techSpan.className = 'mil-tech-tag';
      techSpan.textContent = tech;
      techContainer.appendChild(techSpan);
    });

    // Imágenes
    const mainImage = document.getElementById('modalMainImage');
    const thumbContainer = document.querySelector('.mil-thumbnail-container');
    thumbContainer.innerHTML = '';

    if (project.images.length > 0) {
      mainImage.src = project.images[0];
      mainImage.alt = project.title;

      project.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'mil-thumbnail' + (index === 0 ? ' active' : '');
        thumb.innerHTML = `<img src="${img}" alt="Miniatura ${index + 1}">`;
        thumb.addEventListener('click', function() {
          document.querySelectorAll('.mil-thumbnail').forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          mainImage.src = img;
        });
        thumbContainer.appendChild(thumb);
      });
    }

    // Características
    const featuresList = document.querySelector('.mil-features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.className = 'mil-feature-item';
      li.innerHTML = `<i class="fas fa-check-circle mil-accent"></i> ${feature}`;
      featuresList.appendChild(li);
    });

    // Enlaces
    document.querySelector('.live-demo').href = project.demoUrl;
    document.querySelector('.github-link').href = project.githubUrl;
  }
});