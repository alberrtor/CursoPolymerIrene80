(function() {

  'use strict';

  const API_URL = 'datos.json';

  const control = document.querySelector('#article0');

   fetch('datos.json')
     .then(response => response.json())
     .then(jsondata => printResponse(jsondata))
     .catch(err => console.log('Fallo la peticion ' + err));

	const printResponse = (jsondata) => {
		 	let theHtml = '';
		 	let theRow = '';
      theHtml = theHtml + "<p>Canciones de " + jsondata.usuario + "</p>";
      theHtml = theHtml + "<table style='width:100%' padd><tr> <th>GENERO</th> <th>CANTANTE</th> <th>TITULO</th> </tr>";

      for(let key in jsondata.genero) {
          //console.log(response.datos[key]['name']);

        for(let key2 in jsondata.genero[key].canciones) {

          theRow = '<tr><td>' + jsondata.genero[key]['nombre'] + '</td><td>' + jsondata.genero[key].canciones[key2]["cantante"] + '</td><td>' + jsondata.genero[key].canciones[key2]["titulo"] + '</td></tr>';
          theHtml = theHtml + theRow;
        }
      }

      theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
