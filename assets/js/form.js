const form = document.querySelector("#form");
const name_input = document.querySelector("#nombreForm");
const email_input = document.querySelector("#emailForm");
const about_input = document.querySelector("#asuntoForm");
const message_input = document.querySelector("#mensajeForm");
const nameF = document.querySelector("#btnForm");

//========== Event after to pressing the button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const name = data.get("nombre"); // This data These data come from the name in the inputs
  const email = data.get("email"); // This data These data come from the name in the inputs
  const about = data.get("Asunto"); // This data These data come from the name in the inputs
  const message = data.get("mensaje"); // This data These data come from the name in the inputs

  const object_message = {
    Nombre: name,
    Email: email,
    Asunto: about,
    Mensaje: message,
  };

  //===== Send email
  const email_send = `mailto:nelsonlondonodev@gmail.com?subject=${encodeURIComponent(
    about
  )}&body=${encodeURIComponent(JSON.stringify(object_message))}`;

  window.location.href = email_send;

  //======Clean form
  form.reset();
});
