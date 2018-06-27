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

      theHtml = "<table style='width:100%' padd><tr> <th>Concepto</th> <th>Valor</th> </tr>";

      for(let key in jsondata.data) {
          //console.log(response.datos[key]['name']);

          theRow = '<tr><td>' + jsondata.data[key]['id'] + '</td><td>' + jsondata.data[key]['name'] + '</td></tr>';
          theHtml = theHtml + theRow;
      }

      theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
