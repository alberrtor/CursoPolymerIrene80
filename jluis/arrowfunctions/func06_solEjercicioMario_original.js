'use strict';

(function(multiplo) {

  console.log('Inicio del programa');
  let arr = [];

  for (let i = 0; i < 10; i++) {
   arr.push( (x) => {console.log(i);} );
  }
  console.log(arr);
  arr.forEach(function(item) {
   item();
  });
  console.log('Fin del programa');

})(2);
