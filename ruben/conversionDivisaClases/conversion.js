class Conversion{

 constructor(moneda) {
 if (moneda == 'rublo') {
  this.factor = 0.32;

   }
  if (moneda == 'dolar') {
   this.factor = 0.05;
   }
  if (moneda == 'euro') {
   this.factor = 0.04;
   }
 }

 set monto(divisa){
   this.divisa = divisa;
 }

 convierteDesdePesos(){

    return (this.divisa*this.factor);
  }

};

const conversion = new Conversion('dolar');
conversion.monto=1;
console.log(conversion.convierteDesdePesos());
