let texto = document.getElementById("texto");
let nuevoTexto = document.getElementById("textoNuevo");
let btnCopiar = document.getElementById("copiar");

//Para botón de encriptar
function encriptar() {
    let info = texto.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("textoNuevo").innerHTML = info;
    texto.value = "";
    document.getElementById("imagenParrafos").style.display = "none";
    nuevoTexto.style.height = "60%";
    btnCopiar.removeAttribute("hidden");
    btnCopiar.textContent = "Copiar";
    return;
}

//Para botón de desencriptar
function desencriptar() {
    let info = texto.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("textoNuevo").innerHTML = info;
    texto.value = "";
    document.getElementById("imagenParrafos").style.display = "none";
    nuevoTexto.style.height = "60%";
    btnCopiar.removeAttribute("hidden");
    btnCopiar.textContent = "Copiar";
    return;
}

//Para botón de copiar
btnCopiar.addEventListener("click", (e) => {
    navigator.clipboard.writeText(nuevoTexto.textContent);
    btnCopiar.textContent = "Copiado";
});