const reportes = [
    { titulo: "Acumulación en Parque Norte", estado: "Pendiente", icono: "🚧✅⚠️" },
    { titulo: "Desmonte en Av. Principal", estado: "En Proceso", icono: "X" },
    { titulo: "Limpieza finalizada en Calle 8", estado: "Resuelto", icono: "X" },
    { titulo: "Maleza en Jardines del Sur", estado: "Pendiente", icono: "X" }
];

const lista = document.getElementById('lista-reportes');

function cargarReportes() {
    lista.innerHTML = "";

    reportes.forEach((reporte, indice) => {
        const item = document.createElement('li');
        item.className = 'report-item';
        item.innerHTML = `
            <span class="report-icon">${reporte.icono}</span>
            <div class="report-info">
                <h3>${reporte.titulo}</h3>
                <span class="status ${reporte.estado.toLowerCase().replace(' ', '-')}">${reporte.estado}</span>
            </div>
        `;
        lista.appendChild(item);
        setTimeout(() => {
            item.classList.add('visible');
        }, indice * 300);
    });
}

document.addEventListener('DOMContentLoaded', cargarReportes);