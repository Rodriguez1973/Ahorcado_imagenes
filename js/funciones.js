document.getElementById('files').addEventListener('change', SeleccionImagenes, false);

function SeleccionImagenes(evt) {
var files = evt.target.files; // FileList object
alert(file.length);
var columnas = 0;
// Bucle que recorre las imagenes obtenidos de la carpeta seleccionada.
for (var i = 0, f; f = files[i]; i++) {
    // Solamente procesa archivos de imagen.
    if (!f.type.match('image.*')) {
        continue;
    }
    //Flujo de lectura.
    var reader = new FileReader();

    // Function(Clousure) que obtiene la información de cada archivo. la funcion 
    // se ejecuta al cargar (load) cada unop de los archivos seleccionadso
    
    reader.onload = (function (ElFichero) {
        return function (e) {
            let cadena = escape(ElFichero.name);
            let ppunto = cadena.indexOf(".");
            let nimagen = cadena.substring(0, ppunto)
            //alert(nimagen)
            
            let imm = document.createElement("img");
            alert(e.target.result);
            imm.src = e.target.result;  //Imagen en formato Base64.
            imm.alt = ElFichero.name;//escape(ElFichero.name);
            imm.title = nimagen;
            imm.onclick = copiaPalabra;
            columnas++;
            
            document.getElementById('list').insertBefore(span, null);
        };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}
}



function copiaPalabra(){
    guiones=this.title;
    guiones=guiones.replace(/[a-z]/-gi,"-");
    aciertos.value=guiones;
}

CharacterData.addEventListener("keyup")