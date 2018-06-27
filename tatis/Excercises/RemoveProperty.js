function removeProperty(obj) {

  console.log(obj.prop);
  console.log(obj.tamaño);


  if('prop' in  obj) {

    delete obj.prop;
    console.log('Prop Eliminado');

    return true;

  } else {

    console.log('false');

    return false;

  }


}

 const figura = {
   prop : 'xxx',
   tamaño : '30'
 }

console.log(removeProperty(figura));
console.log(removeProperty(figura));
