
$(window).on('load', function(){


    $('.carteles').slick({
        slidesToShow: 8,
        slidesToScroll: 7,
        infinite: false,
        autoplay: false,
        fade: false,
        arrows:false,
        
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

let contenidoAFiltrar = [{
    "Titulo":"Aciegas",
    "Genero":"Terror",
    "Porcentaje":74,
    "Cartelera":"../assets/photos/Peliculas/aciegas.jpg",
    "Formato":"Pelicula"
},{
    "Titulo":"Barbie",
    "Genero":"Romance",
    "Porcentaje":40,
    "Cartelera":"../assets/photos/Peliculas/barbie.jpg",
    "Formato":"Pelicula"
},{
    "Titulo":"Civil War",
    "Genero":"Accion",
    "Porcentaje":50,
    "Cartelera":"../assets/photos/Peliculas/capAmericaCivilWar.jpg",
    "Formato":"Pelicula"
},{
    "Titulo": "Duna",
    "Genero": "Ciencia Ficción",
    "Porcentaje":88,
    "Cartelera": "../assets/photos/Peliculas/duna.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Fallout",
    "Genero": "Accion",
    "Porcentaje":76,
    "Cartelera": "../assets/photos/Peliculas/fallout.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Joker",
    "Genero": "Drama",
    "Porcentaje":83,
    "Cartelera": "../assets/photos/Peliculas/joker.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Knuckles",
    "Genero": "Aventura",
    "Porcentaje":30,
    "Cartelera": "../assets/photos/Peliculas/knuckles.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Monkeyman",
    "Genero": "Fantasia",
    "Porcentaje":72,
    "Cartelera": "../assets/photos/Peliculas/monkeyman.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Oppenheimer",
    "Genero": "Biografia",
    "Porcentaje":90,
    "Cartelera": "../assets/photos/Peliculas/oppenheimer.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Rebelmoon",
    "Genero": "Ciencia Ficcion",
    "Porcentaje":71,
    "Cartelera": "../assets/photos/Peliculas/rebelmoon.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Zona de Interés",
    "Genero": "Suspenso",
    "Porcentaje":65,
    "Cartelera": "../assets/photos/Peliculas/zonadeinteres.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Batman",
    "Genero": "SuperHeroe",
    "Porcentaje":77,
    "Cartelera": "../assets/photos/Peliculas/batman.jpg",
    "Formato": "Pelicula"
}
,
{
    "Titulo": "Aquaman",
    "Genero": "SuperHeroe",
    "Porcentaje":63,
    "Cartelera": "../assets/photos/Peliculas/aquaman.jpg",
    "Formato": "Pelicula"
},
{
    "Titulo": "Deadpool",
    "Genero": "SuperHeroe",
    "Porcentaje":88,
    "Cartelera": "../assets/photos/Peliculas/deadpool.jpg",
    "Formato": "Pelicula"
}
,
{
    "Titulo": "Avengers endgame",
    "Genero": "SuperHeroe",
    "Porcentaje":97,
    "Cartelera": "../assets/photos/Peliculas/endgame.jpg",
    "Formato": "Pelicula"
}
,
{
    "Titulo": "Avengers infinity War",
    "Genero": "SuperHeroe",
    "Porcentaje":98,
    "Cartelera": "../assets/photos/Peliculas/infinityWar.jpg",
    "Formato": "Pelicula"
}
,
{
    "Titulo": "Breaking Bad",
    "Genero": "Ficcion",
    "Porcentaje":94,
    "Cartelera": "../assets/photos/Series/breakingBad.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "The Walking Dead",
    "Genero": "Ficcion",
    "Porcentaje":86,
    "Cartelera": "../assets/photos/Series/the.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "The Rain",
    "Genero": "Ficcion",
    "Porcentaje":75,
    "Cartelera": "../assets/photos/Series/theRain.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Vikings",
    "Genero": "Ficcion",
    "Porcentaje":94,
    "Cartelera": "../assets/photos/Series/vikings.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Euphoria",
    "Genero": "Ficcion",
    "Porcentaje":87,
    "Cartelera": "../assets/photos/Series/euphoria.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Dark",
    "Genero": "Ficcion",
    "Porcentaje":91,
    "Cartelera": "../assets/photos/Series/dark.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Ley Y Orden",
    "Genero": "Ficcion",
    "Porcentaje":79,
    "Cartelera": "../assets/photos/Series/leyYorden.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Juego de tronos",
    "Genero": "Ficcion",
    "Porcentaje":86,
    "Cartelera": "../assets/photos/Series/dark.jpg",
    "Formato": "Serie"
}
,
{
    "Titulo": "Lost",
    "Genero": "Ficcion",
    "Porcentaje":69,
    "Cartelera": "../assets/photos/Series/lost.jpg",
    "Formato": "Serie"
}

];

    const buscador = document.getElementById("buscador");
    const contenido = document.querySelector(".contenido");
    const header = document.querySelector("header");
    const main = document.querySelector(".primeros");
    const carteles = document.querySelectorAll(".cartelera"); // Corregido: selección de .cartelera en lugar de .carteles
    const title = document.querySelectorAll(".title");
    const resultado = document.getElementById("resultado")
    const lupa = document.querySelector(".lupa")

document.addEventListener("DOMContentLoaded", () => {
    
    
   // Corregido: selección de #resultado en lugar de .carteles

    // Guardar la altura original de main
    const mainOriginalHeight = main.clientHeight + "px";

    // Añadir un event listener al buscador
    buscador.addEventListener("keyup", () => {
        const valorFiltro = buscador.value.trim().toLowerCase(); // Obtener valor del buscador en minúsculas y sin espacios al inicio y final

        

        if (valorFiltro === "") {
            // Mostrar todos los elementos si el buscador está vacío
            contenido.style.display = "flex";
            header.style.backgroundImage = "url(assets/photos/Peliculas/civilwar1.jpg)";
            main.style.marginTop = "0";
            header.classList.remove("header-hide");
            main.style.minHeight = mainOriginalHeight; // Restaurar la altura original
            lupa.style.display = "none";
            // Mostrar todos los carteles y títulos
            carteles.forEach(cartel => {
                cartel.style.display = "flex"; // Mostrar cada cartelera
            });

            title.forEach(titulo => {
                titulo.style.display = "flex"; // Mostrar cada título
            });

            resultado.style.display = "none"; 
          
        } else {
            // Ocultar los elementos principales si hay texto en el buscador
            contenido.style.display = "none"
            header.style.backgroundImage = "none";
            main.style.marginTop = "-70vh";
            header.classList.add("header-hide");
           
            carteles.forEach(cartel => {
                cartel.style.display = "none"; // Mostrar cada cartelera
            });

            title.forEach(titulo => {
                titulo.style.display = "none"; // Mostrar cada título
            });

           

            buscarPelicula(valorFiltro);
          
        }
        
    });
});

const valorUno = document.querySelector(".peliculas")
const valorDos = document.querySelector(".series");


let contenidoVisiblePelicula = false;
valorUno.addEventListener("click", () =>{
    resultado.innerHTML = "";
    let peliculas = contenidoAFiltrar.filter(peli => peli.Formato === "Pelicula");
    
    if(contenidoVisiblePelicula){
        contenido.style.display = "flex";
        header.style.backgroundImage = "url(assets/photos/Peliculas/civilwar1.jpg)";
        main.style.marginTop = "0";
        header.classList.remove("header-hide");
        lupa.style.display = "none";
        contenidoVisiblePelicula = false;
    }else{

        contenido.style.display = "none"
        header.style.backgroundImage = "none";
        main.style.marginTop = "-70vh";
        header.classList.add("header-hide");
        lupa.style.display = "flex";

        peliculas.forEach((peli) => {
            resultado.innerHTML += `
            <div class="cartelera">
                <div class="porcentaje"><span class="number">${peli.Porcentaje}<span class="simb">%</span></span>
                
                </div>
                <a href="civil_war_movie.html"><img class="cartel" src="${peli.Cartelera}" alt="${peli.Titulo}"></a>
                
            </div>
            `
            
            
        });
    
        contenidoVisiblePelicula = true;
  
}

    // Mostrar el contenedor de resultados
    resultado.style.display = "flex";
    


    })
    let contenidoVisibleSerie = false;
    valorDos.addEventListener("click", () =>{
       
        resultado.innerHTML = "";
        let peliculas = contenidoAFiltrar.filter(peli => peli.Formato === "Serie");
        
        if(contenidoVisibleSerie){
            contenido.style.display = "flex";
            header.style.backgroundImage = "url(assets/photos/Peliculas/civilwar1.jpg)";
            main.style.marginTop = "0";
            header.classList.remove("header-hide");
            lupa.style.display = "none";
            contenidoVisibleSerie = false;
        }else{

            contenido.style.display = "none"
            header.style.backgroundImage = "none";
            main.style.marginTop = "-70vh";
            header.classList.add("header-hide");
            lupa.style.display = "flex";

            peliculas.forEach((peli) => {
                resultado.innerHTML += `
                <div class="cartelera">
                    <div class="porcentaje"><span class="number">${peli.Porcentaje}<span class="simb">%</span></span>
                    
                    </div>
                    <a href="../pages/breakingbad-serie.html"><img class="cartel" src="${peli.Cartelera}" alt="${peli.Titulo}"></a>
                    
                </div>
                `
                
                
            });
        
            contenidoVisibleSerie = true;
      
    }
    // Mostrar el contenedor de resultados
    resultado.style.display = "flex";
    


    })





function buscarPelicula(valor) {
    
    let resultado = document.getElementById("resultado")
    let peliculas = contenidoAFiltrar.filter(peli => peli.Titulo.toLowerCase().indexOf(valor) > -1);
    lupa.style.display = "flex";
    resultado.innerHTML= "";

    peliculas.forEach((peli) => {
        resultado.innerHTML += `
        <div class="cartelera">
            <div class="porcentaje"><span class="number">${peli.Porcentaje}<span class="simb">%</span></span>
            
            </div>
            <a href="breakingbad-serie.html"><img class="cartel" src="${peli.Cartelera}" alt="${peli.Titulo}"></a>
            
        </div>
        `
       
    });

    // Mostrar el contenedor de resultados
    resultado.style.display = "flex";
  
}

document.addEventListener("DOMContentLoaded", function() {
    const ajustes = document.querySelector('.ajustes');
    const cerrarSession = document.querySelector('.cerrarSession');

    ajustes.addEventListener('mouseover', function() {
        cerrarSession.classList.add('mostrar');
    });

    ajustes.addEventListener('mouseout', function() {
        cerrarSession.classList.remove('mostrar');
    });

    cerrarSession.addEventListener('mouseover', function() {
        cerrarSession.classList.add('mostrar');
    });
    
    cerrarSession.addEventListener('mouseout', function() {
        cerrarSession.classList.remove('mostrar');
    });
});






