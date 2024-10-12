let name = document.getElementById("nombreForm").value;
let email = document.getElementById("emailForm").value;
let about = document.getElementById("asuntoForm").value;
let message = document.getElementById("mensajeForm").value;
const nameForm = document.getElementById("btnForm");

nameForm.addEventListener("submit", () => {
  let name = document.getElementById("nombreForm");
  let email = document.getElementById("emailForm");
  let about = document.getElementById("asuntoForm");
  let message = document.getElementById("mensajeForm");

  if (name == true && email == true && about == true && message == true) {
    alert("Formulario enviado correctamente");
  }
});

// let email = document.getElementById("emailForm").value;
// let about = document.getElementById("asuntoForm").value;
// let message = document.getElementById("mensajeForm").value;

// let personForm = name.value;

// console.log(personForm);
