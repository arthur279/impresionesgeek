document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      aspectRatio : 3,
      initialView: 'dayGridMonth',
      eventImageEditable: true,
      events : [
        {
          title  : 'Bazar Underground',
      
          start  : '2024-06-29',
          end    : '2024-06-30'
        },
     
      ]
    });

    calendar.render();
});

document.getElementById('form-inscripcion').addEventListener('submit', function(event) {
    event.preventDefault(); 

    Swal.fire({
        title: '¡Formulario completado!',
        text: 'Tu inscripción ha sido recibida con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'swal-title',
            content: 'swal-content'
        },
        backdrop: true,
        timer: 3000 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuContent = document.querySelector('.menu-content');

  menuToggle.addEventListener('click', function() {
      menuContent.classList.toggle('active');
  });
});


