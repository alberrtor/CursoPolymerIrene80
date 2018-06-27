(function() {

  'use strict';
  console.log("Inicio");
  console.log("Creacion promesa");
  var promise = new Promise(function(resolve, reject) {
    let resp = prompt("Tarea tardada o asincrona");

    if (resp == 1) {
      resolve("Funciono!");
    }
    else {
      reject(Error("Fallo!"));
    }
  });

  console.log("Lanzamiento ejecucion promesa");
  promise.then( function(result) {
    console.log("ejecucion promesa:" + result);
  }, function(err) {
    console.log("ejecucion promesa con error:" + err);
  });
  console.log("Fin");


}
)();
