(function() {

  'use strict';

  const API_URL = 'usuario_canciones.json';

  const control = document.querySelector('#tabla0');
  const controlNombre = document.querySelector('#nombre0');

   fetch(API_URL)
     .then(response => response.json())
     .then(jsondata => printResponse(jsondata))
     .catch(err => {console.log('Fallo la peticion ' + err);
                    controlNombre.innerHTML="";
                    control.innerHTML = "<b> ERROR NO SE ENCONTRO EL ARCHIVO</b>";});

	const printResponse = (jsondata) => {
      let name ="Nombre: "+jsondata.nombre;
		 	let theHtml = '';
		 	let theRow = '';

      for (let generos of jsondata.musica) {
        theHtml = theHtml +"<br/><br/><b> Genero: "+generos.genero+"</b>"
        theHtml = theHtml + "<table class='w3-table w3-striped' style='width:60%'><tr> <th>Cantante</th> <th>Titulo</th> </tr>";
        for (let lista of generos.data) {
          theRow = '<tr><td>' + lista.id + '</td><td>' + lista.name + '</td></tr>';
          theHtml = theHtml + theRow;
        }
        theHtml = theHtml + '</table>';
      }
      controlNombre.innerHTML = name;
		 	control.innerHTML = theHtml;
	}
  
})();
