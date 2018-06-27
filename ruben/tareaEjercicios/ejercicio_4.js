function registerHandlers() {
  let lista = document.getElementsByTagName('a');

  for (let i = 0; i<lista.length; i++) {
      lista[i].onclick = (function(index){
          return function() {
              alert(index);
              return false;
          }}(i));
  }
}

registerHandlers();
