/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let añoActual = new Date()
  do {
    let nombre = prompt("Escribe tu nombre:")
    nombre.length >= 2 ? datosPersona.nombre = nombre : alert("El nombre debe contener como minimo dos caracteres")
  }
  while (datosPersona.nombre.length === 0)

  do {
    let anioNacimiento = prompt("Escribe tu año de nacimiento:")
    isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > 2021 ?
      alert("El año de nacimiento debe ser un valor numerico superior a 1900 y menos a 2021")
      :
      datosPersona.edad = añoActual.getFullYear() - anioNacimiento
  }
  while (datosPersona.edad === 0)

  do {
    let ciudad = prompt("Escribe tu ciudad de residencia:")
    ciudad.length >= 2 ? datosPersona.ciudad = ciudad : alert("El nombre  de la ciudad debe contener como mínimo dos caracteres")
  }
  while (datosPersona.ciudad.length === 0)

  datosPersona.interesPorJs = confirm("¿Le interesa aprender JS?")
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const { nombre, edad, ciudad, interesPorJs } = datosPersona
  const renderizarNombre = document.getElementById("nombre")
  renderizarNombre.innerText = nombre
  const renderizarEdad = document.getElementById("edad")
  renderizarEdad.innerText = edad
  const renderizarCiudad = document.getElementById("ciudad")
  renderizarCiudad.innerText = ciudad
  const renderizarInteresPorJs = document.getElementById("javascript")
  interesPorJs ? renderizarInteresPorJs.innerText = "Si" : renderizarInteresPorJs.innerText = "No"
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedorListado = document.getElementById("fila")

  if (contenedorListado.childElementCount === 0) {
    listado.forEach(({ imgUrl, lenguajes, bimestre }) => {
      const template = `
  <div class = "caja" >
    <img src = "${imgUrl}" alt ="Imagen lenguaje">
    <p class = "lenguajes" >"${lenguajes}"</p>
    <p class = "bimestre" >"${bimestre}"</p>
  </div>
  `
      contenedorListado.innerHTML += template
    })
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const body = document.getElementById("sitio")
  body.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", (event) => {
  const parrafoOculto = document.getElementById("sobre-mi")

  if (event.key === "F") {
    parrafoOculto.classList.remove("oculto")
  }
})


