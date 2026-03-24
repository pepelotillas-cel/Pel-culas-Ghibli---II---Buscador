const url = "https://ghibliapi.vercel.app/films";

let peliculas = [];

fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        peliculas = data;

        const contenedor = document.getElementById("contenedor");
        data.forEach(pelicula => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${pelicula.image}" alt="${pelicula.title}">
                    <div class="card-body">
                        <div class="card-title">${pelicula.title}</div>
                        <p><strong>Director:</strong> ${pelicula.director}</p>
                        <p><strong>Año:</strong> ${pelicula.release_date}</p>
                        <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.log(error));


// BUSCADOR NUEVO
document.getElementById("buscador").addEventListener("input", function() {
    const texto = this.value.toLowerCase();
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    const filtradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(texto)
    );

    filtradas.forEach(pelicula => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${pelicula.image}" alt="${pelicula.title}">
                <div class="card-body">
                    <div class="card-title">${pelicula.title}</div>
                    <p><strong>Director:</strong> ${pelicula.director}</p>
                    <p><strong>Año:</strong> ${pelicula.release_date}</p>
                    <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                </div>
            </div>
        `;
    });
});