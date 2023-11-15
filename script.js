const btn = document.getElementById("btnAlerta");
btn.addEventListener("click", () => {
    mAlerta("Prueba ","Hola mundo", "error");
})
let alertaActual = null;
function mAlerta(titulo, mensaje, tipo) {
    //Condicion si esta una alerta en pantalla para no sobre poner otra
    if (alertaActual) {
        alertaActual.remove();
    }
    //Crea contenedor de la alerta
    const alerta = document.createElement("div");
    alerta.classList.add("alerta", tipo);
   

    //Icono de la alerta
    const icono = document.createElement("i");
    if (tipo === "error") {
        icono.classList.add("fas","fa-circle-xmark","mb-4");
        icono.style.color = "#973b3b";
    } else if (tipo === "exito") {
        icono.classList.add("far", "fa-circle-check", "fa-bounce", "mt-5","mb-4");
    } else {
        icono.classList.add("fas", "fa-info-circle", "fa-shake", "mb-3");
    }
    alerta.appendChild(icono);

    //Titulo

    const tituloAlerta = document.createElement("h1");
    tituloAlerta.innerText = titulo;
    alerta.appendChild(tituloAlerta);
    
    //mensaje
    const mensajeAlerta = document.createElement("p");
    mensajeAlerta.classList.add("mt-2","mb-4");
    mensajeAlerta.innerText = mensaje;
    alerta.appendChild(mensajeAlerta);

    const cont = document.createElement("div");
    cont.classList.add("text-end");
    alerta.appendChild(cont);

    const btnOk = document.createElement("button");
    btnOk.classList.add("btnOk");
    btnOk.textContent = "Ok";

    btnOk.addEventListener("click", () => {
        alerta.remove();
    });
    cont.appendChild(btnOk);
    //Se agrega la alerta al body
    document.body.appendChild(alerta);
    alertaActual = alerta;
}
