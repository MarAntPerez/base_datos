const formulario = document.querySelector(".form");
var encontrado;

var objectLogin = {
  username: "root",
  psw: "root",
};

formulario.addEventListener("submit", (event) => {
  var usuario = document.getElementById("usuario").value;
  var psw = document.getElementById("psw").value;

  objectLogin.username = usuario;
  objectLogin.psw = psw;

  console.log(objectLogin);
  event.preventDefault();
  var jsonLogin = JSON.stringify(objectLogin);
  console.log(jsonLogin);
  callBackend(jsonLogin);
});

function callBackend(jsonLogin) {
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://192.168.1.12:8080/auth",
    data: jsonLogin,
    dataType: "json",
    success: function (object, text) {
      console.log(object.auth);
      if (object.auth) {
        window.location.href = "tabla.html";
      } else {
        alert("Usuario o contraseña invalidos");
      }
    },
    error: function (request, status, error) {
      console.log(request);
      console.log(status);
      console.log(error);
      alert("Error de conexion.");
    },
  });
}
