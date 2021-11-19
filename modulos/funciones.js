(function registro() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              event.preventDefault()
              addUsuario();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })

function addUsuario(){
    let nombre= document.querySelector('#nombreUsuario').value;
    let apellido=document.querySelector('#apellidoUsuario').value;
    let correo=document.querySelector('#correUsuario').value;
    let celular=document.querySelector('#celularUsuario').value;
    let clave=document.querySelector('#claveUsuario').value;
    let url='http/localhost:3000/registro';



    let datos = {
     nombres: nombre,
     apellidos: apellido,
     correo: correo,
     celular: celular,
     clave: clave

   };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
      'Content-Type': 'application/json'
    }
}).then(res => res.json())
  .then(mensaje => {
    console.log(mensaje)
  })
  return body;
}
