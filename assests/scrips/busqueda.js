const inputBusqueda = document.querySelector(".search-input");
const botonBusqueda = document.querySelector(".search-button");

function realizarBusqueda() {
    const texto = inputBusqueda.value.trim();

    if (texto === "") {
        alert("⚠️ Por favor, escribe algo para buscar.");
        inputBusqueda.style.border = "2px solid red";
        setTimeout(() => {
            inputBusqueda.style.border = "none";
        }, 2000);
        
        return;
    }

    alert(`🔍 Buscando reportes sobre: "${texto}"...`);
    
    window.location.href = "search.html";
}

if (botonBusqueda) {
    botonBusqueda.addEventListener("click", realizarBusqueda);
}

if (inputBusqueda) {
    inputBusqueda.addEventListener("keypress", function (evento) {
        if (evento.key === "Enter") {
            realizarBusqueda();
        }
    });
}