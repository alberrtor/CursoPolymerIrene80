(function() {

  'use strict';

  const API_URL = 'canciones_iveth.json';

  const control = document.querySelector('#article0');

  fetch('canciones_iveth.json')
    .then(response => response.json())
    .then(jsondata => printResponse(jsondata))
    .catch(err => console.log('Fallo la peticion ' + err));

	const printResponse = (jsondata) => {
		 	let theHtml = '';
		 	let theRow = '';
      let theHtml2 = '';
      // let llave = jsondata.user;


      theHtml = "<table style='width:100%' padd><tr> <th>Cantante</th> <th>Titulo</th> </tr>";


      for(let key in jsondata.data) {
          //console.log(response.datos[key]['name']);

          theRow = '<tr><td>' + jsondata.data[key]['author'] + '</td><td>' + jsondata.data[key]['name'] + '</td></tr>';
          theHtml = theHtml + theRow;

          for(let llave in jsondata.data){
            theHtml2 = '<h3>El usuario es:'+  jsondata.data[llave]['userName'] +' </h3>';
            theHtml2 = theHtml2 + theHtml;
          }


      }


      theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
