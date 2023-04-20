// Información sobre las obras artisticas
const PICS = [
    {
        image: 'images/05030.jpg',
        alt: 'Muerte de Marat',
        title: 'Muerte de  Marat',
        artist: 'David, Jacques-Louis',
        year: '1793',
        genre: 'Romanticismo',
    },
    {
        image: 'images/120010.jpg',
        alt: 'Retrato de Eleanor de Toledo',
        title: 'Retrato de Eleanor de Toledo',
        artist: 'Bronzino, Agnolo',
        year: '1545',
        genre: 'Manierismo',
    },
    {
        image: 'images/07020.jpg',
        alt: 'La libertad guiando al pueblo',
        title: 'La libertad guiando al pueblo',
        artist: 'Delacroix, Eugene',
        year: '1830',
        genre: 'Romanticismo',
    },
    {
        image: 'images/13030.jpg',
        alt: 'Arreglo en gris y negro',
        title: 'Arreglo en gris y negro',
        artist: 'Whistler, James Abbott',
        year: '1871',
        genre: 'Realismo',
    },
    {
        image: 'images/06010.jpg',
        alt: 'Mademoiselle Caroline Riviere',
        title: 'Mademoiselle Caroline Riviere',
        artist: 'Ingres, Jean-Auguste',
        year: '1806',
        genre: 'Neo-Clasicismo',
    }
    
];


// Funcion para crear la nueva imagen más grande
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

// Funcion para generar la miniatura flotante de mayor tamaño
// Esta funcion se llama mas adelante al mostrar los resultados
function bigImage(){
    // Recuperar los contenedores de elementos img
    const imagesThb = document.querySelectorAll(".images");

    // Por cada elemento recuperado
    imagesThb.forEach((image) =>{
        // Se agrega un Event Listener cuando el mouse pasa sobre del elemento
        image.addEventListener("mouseover", (e) =>{
            //Se recupera la imagen original
            const orgImage = image.querySelector('img');
            //Se recupera la url de la imagen original
            const srcImage = orgImage.src;
            //Se crea la nueva imagen pasando la url
            const newImage = createImage(srcImage);
            //Se recupera el contenedor de imagenes en el HTML
            const container = image.querySelector('.new-image');
            //Se agrega la imagen al contenedor
            container.appendChild(newImage);
            //Se agrega la clase para mostrar la imagen como flotante
            container.classList.add('img-thb');
            
            //Para ocultar la imagen cuando el mouse se mueve fuera del elemento
            image.addEventListener("mouseout", () =>{
                // Se remueve la imagen
                container.removeChild(newImage);
                // Se remueve el estilo del contenedor para ocultarlo
                container.classList.remove('img-thb');
            });
        });
    });
}



// Agregar funcionalidad al filtro
// Recuperar el boton de filtro
const filterBtn = document.querySelector('.filter-btn');
// Recuperar el body de la tabla
const tableBody = document.querySelector('.t-body');
// Recuperar el select del filtro
const filter = document.querySelector('.filter');

//Agregar un Event Listener al boton de filtro
filterBtn.addEventListener('click', genreFilter);

// Funcion para mostrar todos los resultados sin filtrar
function showAll(){
    PICS.forEach((pics) =>{
            // Por cada imagen en la base de datos se crea una fila de la tabla
            let row = document.createElement('tr');
            row.classList.add('pics');

            // Se crea una columna con un check
            let td1 = document.createElement('td');
            let check = document.createElement('input');
            check.type = "checkbox";
            check.name = "index[]";
            check.value = "10";
            td1.appendChild(check);
            row.appendChild(td1);

            // Se crea la culumna con la imagen y sus caracteristicas
            let td2 = document.createElement('td');
            let section1 = document.createElement('section');
            section1.classList.add('images');
            let image = document.createElement('img');
            image.src = pics.image;
            image.alt = pics.alt;
            image.classList.add('original-img');
            let section2 = document.createElement('section');
            section2.classList.add('new-image');
            section1.appendChild(image);
            section1.appendChild(section2);
            td2.appendChild(section1);
            row.appendChild(td2);

            // Se crea la culumna con el titulo de la obra
            let td3 = document.createElement('td');
            td3.classList.add('pic-title');
            let emTitle = document.createElement('em');
            emTitle.textContent = pics.title;
            td3.appendChild(emTitle);
            row.appendChild(td3);

            // Se crea la culumna con el artista de la obra
            let td4 = document.createElement('td');
            td4.classList.add('pic-artist');
            td4.textContent = pics.artist;
            row.appendChild(td4);

            // Se crea la culumna con el año de la obra
            let td5 = document.createElement('td');
            td5.classList.add('pic-year');
            td5.textContent = pics.year;
            row.appendChild(td5);

            // Se crea la culumna con el género de la obra
            let td6 = document.createElement('td');
            td6.classList.add('pic-genre');
            td6.textContent = pics.genre;
            row.appendChild(td6);

            // Se crea la culumna con el boton para editar
            let td7 = document.createElement('td');
            let btnEdit = document.createElement('button');
            btnEdit.classList.add('edit-btn');
            let ref = document.createElement('a');
            ref.href = "#";
            let imageEdit = document.createElement('img');
            imageEdit.src = 'images/edit16.png';
            imageEdit.alt = "";
            ref.appendChild(imageEdit);
            ref.innerHTML += "Editar";
            btnEdit.appendChild(ref);
            td7.appendChild(btnEdit);
            row.appendChild(td7);

            // Agregar la fila al body de la tabla
            tableBody.appendChild(row);
        });
        bigImage();
        edit();
}


// Funcion para limpiar el filtro
function cleanFilter() {
    // Elimina todos los hijos del body
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

//Funcion para filtrar por genero
function genreFilter(){
    // Se limpia el dody
    cleanFilter();

    // Se recupera el valor seleccionado del filtro
    let value = filter.options[filter.selectedIndex].value;

    // Si el valor seleccionado es diferente del valor default
    if(value != 'Género'){
        // Por cada obra en la base de  se buscan las coincidencias
        PICS.forEach((pics) =>{
            // Si el valor del genero coincide con el valor seleccionado
            if(pics.genre === value){
                // Se vulven a crear las filas y columnas con las caracteristicas de las obras
                let row = document.createElement('tr');
                row.classList.add('pics');

                let td1 = document.createElement('td');
                let check = document.createElement('input');
                check.type = "checkbox";
                check.name = "index[]";
                check.value = "10";
                td1.appendChild(check);
                row.appendChild(td1);

                let td2 = document.createElement('td');
                let section1 = document.createElement('section');
                section1.classList.add('images');
                let image = document.createElement('img');
                image.src = pics.image;
                image.alt = pics.alt;
                image.classList.add('original-img');
                let section2 = document.createElement('section');
                section2.classList.add('new-image');
                section1.appendChild(image);
                section1.appendChild(section2);
                td2.appendChild(section1);
                row.appendChild(td2);

                let td3 = document.createElement('td');
                td3.classList.add('pic-title');
                let emTitle = document.createElement('em');
                emTitle.textContent = pics.title;
                td3.appendChild(emTitle);
                row.appendChild(td3);

                let td4 = document.createElement('td');
                td4.classList.add('pic-artist');
                td4.textContent = pics.artist;
                row.appendChild(td4);
                
                let td5 = document.createElement('td');
                td5.classList.add('pic-year');
                td5.textContent = pics.year;
                row.appendChild(td5);

                let td6 = document.createElement('td');
                td6.classList.add('pic-genre');
                td6.textContent = pics.genre;
                row.appendChild(td6);

                let td7 = document.createElement('td');
                let btnEdit = document.createElement('button');
                btnEdit.classList.add('edit-btn');
                let ref = document.createElement('a');
                ref.href = "#";
                let imageEdit = document.createElement('img');
                imageEdit.src = 'images/edit16.png';
                imageEdit.alt = "";
                ref.appendChild(imageEdit);
                ref.innerHTML += "Editar";
                btnEdit.appendChild(ref);
                td7.appendChild(btnEdit);
                row.appendChild(td7);


                tableBody.appendChild(row);
            }
        });

        // Si no se encuentra ninguna coincidencia, es decir, el body esta vacío
        if (tableBody.innerHTML === ""){
            // Se escribe en una fila que no hay resultados
            let row = document.createElement('tr');
            row.textContent = "No hay resultados disponibles";
            tableBody.appendChild(row);
        }
        else{
            // Se agregan las funcionalidades para agrandar la imagen y para editar la info
            bigImage();
            edit();
        }
    }
    else{
        // Si se selecciona el valor pr default muestra todas las obras
        showAll();
    }
}

// Se llama a la funcion para mostrar todas al refrecar la pagina
showAll();

//Abrir dialogo modal para editar la info
function edit(){
    // Recuperar el contenedor de la obra en HTML
    const picsOption = document.querySelectorAll('.pics');
    // Recuperar el boton para cerrar de la ventana modal
    const closeBtn = document.getElementById('close');
    // Recuperar el contenedor de la ventana modal
    const popupWindow = document.querySelector('.popup-window');
    // Recuperar los detalles que son cambiantes dentro de la ventana modal
    const details = document.querySelector('.details-popup');

    // Por cada opcion de las obras en el HTML
    picsOption.forEach((option) =>{
        // Tecuperar el boton para editar
        const editBtn = option.querySelector('.edit-btn');

        // Recuperar la imagen original
        const orgImage = option.querySelector('.original-img');
        // Recuperar el titulo original
        const orgTitle = option.querySelector('.pic-title');
        // Recuperar el artista original
        const orgArtist = option.querySelector('.pic-artist');
        // Recuperar el año original
        const orgYear = option.querySelector('.pic-year');
        // Recuperar el genero original
        const orgGenre = option.querySelector('.pic-genre');

        // Agregar un listener al boton de edicion
        editBtn.addEventListener('click', () =>{
            details.innerHTML = "";
            
            // Se agregan los input para poder modificar el valor
            const newImage = createImage(orgImage.src);
            details.appendChild(newImage);
            
            const newTitle = document.createElement('input');
            newTitle.value = orgTitle.textContent;
            newTitle.classList.add('title-input');
            newTitle.classList.add('input');
            details.appendChild(newTitle);
            
            const newArtist = document.createElement('input');
            newArtist.value = orgArtist.textContent;
            newArtist.classList.add('artist-input');
            newArtist.classList.add('input');
            details.appendChild(newArtist);
            
            const newYear = document.createElement('input');
            newYear.value = orgYear.textContent;
            newYear.classList.add('year-input');
            newYear.classList.add('input');
            details.appendChild(newYear);
            
            const newGenre = document.createElement('input');
            newGenre.value = orgGenre.textContent;
            newGenre.classList.add('genre-input');
            newGenre.classList.add('input');
            details.appendChild(newGenre);
    
            // Se remueve la clase oculto para que se muestre en todo la pantalla
            popupWindow.classList.remove('hidden');
        });
        
        // Para cerrar la ventana modal se agrega un Listener al boton de cerrar
        closeBtn.addEventListener('click', () =>{
            // Cuando se da clic, se agrega la clase oculto a la venta modal
            popupWindow.classList.add('hidden');
        }); 
    });
}