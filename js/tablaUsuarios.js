var flagGoToBackend = true;
const formTabla = document.querySelector(".form-buscar");
const listaUl = document.querySelector(".list");
const tabla = document.querySelector(".tabla");
const mostrar = document.querySelector(".mostrar");

formTabla.addEventListener("submit", (event) => {
  const entrada = document.getElementById("buscar").value;
  event.preventDefault();
  console.log(entrada);

  $("#tabla-usuarios tbody").empty();

  for (var i = 0; i < list.length; i++) {
    var id = list[i].id;
    var name = list[i].name;
    var lastname = list[i].lastname;
    var secondLastname = list[i].secondLastname;
    if (entrada == name) {
      $("#tabla-usuarios tbody").append(
        "<tr><td style='display: none'>" +
          id +
          "</td><td>" +
          name +
          "</td><td>" +
          lastname +
          "</td><td>" +
          secondLastname +
          "</td></tr>"
      );
    }
  }
});

mostrar.addEventListener("click", () => {
  $("#tabla-usuarios tbody").empty();
  populateUsersTable(list);
});

var list = [
  {
    id: "1",
    name: "name 1",
    lastname: "apellido_paterno 1",
    secondLastname: "apellido_materno 1",
  },
  {
    id: "2",
    name: "name 2",
    lastname: "apellido_paterno 2",
    secondLastname: "apellido_materno 2",
  },
  {
    id: "3",
    name: "name 3",
    lastname: "apellido_paterno 3",
    secondLastname: "apellido_materno 3",
  },
];

evaluateBackend();

function evaluateBackend() {
  if (flagGoToBackend) {
    callBackend();
  } else {
    populateUsersTable(list);
  }
}

function populateUsersTable(list) {
  for (var i = 0; i < list.length; i++) {
    var id = list[i].id;
    var name = list[i].name;
    var lastname = list[i].lastname;
    var secondLastname = list[i].secondLastname;

    $("#tabla-usuarios tbody").append(
      "<tr><td style='display: none'>" +
        id +
        "</td><td>" +
        name +
        "</td><td>" +
        lastname +
        "</td><td>" +
        secondLastname +
        "</td></tr>"
    );
  }
}

function callBackend() {
  $.ajax({
    method: "GET",
    url: "http://192.168.1.12:8080/users",
    dataType: "json",
    success: function (datos, text) {
      list = datos;
      populateUsersTable(datos);
      console.log(list);
    },
    error: function (request, status, error) {
      alert("Hubo un problema con el servidor, se le mostraran datos falsos.");
      populateUsersTable(list);
    },
  });
}
