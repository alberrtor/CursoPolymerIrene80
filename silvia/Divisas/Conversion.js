class Conversion{

  constructor(moneda, divisa){
    this.moneda = moneda;
    this.divisa = divisa;
}
 get CambioDivisa(){
     return this.Cambio();
   }
  Cambio(){
    return this.divisa *  this.moneda;
  }
  get Cambiopeso(){
      return this.peso();
    }
   peso(){
     return this.divisa /  this.moneda;
   }

}

const rublo = new Conversion(8, 32);
const dolar = new Conversion(9, 19.85);
const euro  = new Conversion(10, 23.45);
console.log('La conversion de $ a Rublo: ' + rublo.CambioDivisa);
console.log('La conversion de $ a Dolar: ' + dolar.CambioDivisa);
console.log('La conversion de $ a Euro:' + euro.CambioDivisa);

const rublo1 = new Conversion(32, 200);
const dolar1 = new Conversion(19.85, 200);
const euro1  = new Conversion(23.45, 200);
console.log('La conversion de Rublo a $: ' + rublo1.Cambiopeso);
console.log('La conversion de Dolar a $: ' + dolar1.Cambiopeso);
console.log('La conversion de Euro a $: ' + euro1.Cambiopeso);
