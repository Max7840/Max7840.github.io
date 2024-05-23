let slideIndex = 0; // Variable que almacena el índice de la diapositiva actual

showSlides(); // Llama a la función showSlides() para comenzar a mostrar las diapositivas

function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img'); // Obtiene todas las imágenes dentro del contenedor del carrousel
  
  // Itera sobre todas las diapositivas y les quita la clase 'active' para ocultarlas
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++; // Incrementa el índice de la diapositiva
  
  if (slideIndex > slides.length) { slideIndex = 1; } // Si el índice de la diapositiva excede el número total de diapositivas, vuelve a la primera diapositiva
  
  slides[slideIndex - 1].classList.add('active'); // Agrega la clase 'active' a la diapositiva actual para mostrarla
  
  setTimeout(showSlides, 2000); // Llama a la función showSlides() nuevamente después de 2000 milisegundos (2 segundos) para cambiar a la siguiente diapositiva
}
