const formAlta = document.querySelector(".form-alta");
var objectUser = {
  name: "",
  lastname: "",
  secondLastname: "",
};

formAlta.addEventListener("submit", (event) => {
  const name = document.getElementById("nombre").value;
  const lastname = document.getElementById("apellido-paterno").value;
  const secondLastname = document.getElementById("apellido-materno").value;
  event.preventDefault();
  console.log(name, lastname, secondLastname);

  objectUser.name = name;
  objectUser.lastname = lastname;
  objectUser.secondLastname = secondLastname;

  var jsonUser = JSON.stringify(objectUser);

  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://192.168.1.12:8080/users",
    data: jsonUser,
    success: function (datos, text) {
      alert("Datos enviados con exito");
      console.log(datos);
    },
    error: function (request, status, error) {
      alert("Hubo un problema con el servidor.");
    },
  });
});
