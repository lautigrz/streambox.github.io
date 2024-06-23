
$(window).on('load', function(){
    $('.carteles').slick({
        slidesToShow: 8,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        fade: false,
    });

    const peliculas = document.querySelectorAll('.cartelera');
    const filas = document.querySelectorAll(".carteles");

    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            peliculas.forEach(p => p.classList.remove('hover'));
            elemento.classList.add('hover');
        });
    });

    filas.forEach(fila => {
        fila.addEventListener('mouseleave', () => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    const contenido = document.querySelector(".contenido");
    const header = document.querySelector("header");
    const main = document.querySelector(".primeros");
    const carteles = document.querySelectorAll(".carteles");
    const title = document.querySelectorAll(".title");
    const footer = document.querySelector("footer");
    const resultado = document.getElementById("resultado"); // Elemento donde se mostrarán los resultados filtrados

    // Guardar la altura original de main
    const mainOriginalHeight = main.clientHeight + "px";

    // Añade un event listener al buscador
    buscador.addEventListener("keyup", () => {
        const valorFiltro = buscador.value.trim().toLowerCase(); // Valor del buscador en minúsculas y sin espacios al inicio y final

        // Limpiar el contenido previo en el resultado
        resultado.innerHTML = "";

        if (valorFiltro === "") {
            // Mostrar todos los elementos si el buscador está vacío
            contenido.style.display = "flex";
            header.style.backgroundImage = "url(assets/photos/Peliculas/civilwar1.jpg)";
            main.style.marginTop = "0";
            header.classList.remove("header-hide");
            main.style.minHeight = mainOriginalHeight; // Restaurar la altura original

            carteles.forEach(carteles => {
                carteles.style.display = "flex";
            });

            title.forEach(titulo => {
                titulo.style.display = "flex";
            });

            resultado.style.display = "none"; // Ocultar el contenedor de resultados vacíos
        } else {
            // Ocultar los elementos si hay texto en el buscador
            contenido.style.display = "none";
            header.style.backgroundImage = "none";
            main.style.marginTop = "-75vh";
            header.classList.add("header-hide");
            main.style.minHeight = "auto";

            // Filtrar y mostrar los resultados dentro de resultado
            const cartelesFiltrados = Array.from(carteles).filter(carteles => {
                const imagenes = carteles.querySelectorAll(".cartel img");
                let encontrado = false;

                imagenes.forEach(img => {
                    const alt = img.getAttribute("alt").toLowerCase();
                    if (alt.includes(valorFiltro)) {
                        const cloneCartelera = carteles.cloneNode(true);
                        cloneCartelera.style.display = "flex";
                        resultado.appendChild(cloneCartelera);
                        encontrado = true;
                    }
                });

                return encontrado;
            });

            // Mostrar resultado si se encontraron elementos filtrados
            if (cartelesFiltrados.length > 0) {
                resultado.style.display = "flex";
            } else {
                resultado.style.display = "none"; // Ocultar el contenedor si no se encontraron resultados
            }

            // Ocultar carteles y títulos originales
            carteles.forEach(carteles => {
                carteles.style.display = "none";
            });

            title.forEach(titulo => {
                titulo.style.display = "none";
            });
        }
    });
});




