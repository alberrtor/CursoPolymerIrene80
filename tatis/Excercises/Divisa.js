//
// const dolar = 19.85 ;
// const rupia = 0.295 ;
// const euro = 19.64 ;

class Divisa {

 constructor(monto, divisa) {
   this.monto = monto;
   this.divisa = divisa;
 }

 get conversion ( ) {
      return this.monto * this.divisa;
 }

 get conversionDesdePesos ( ) {
      return this.monto / this.divisa;
 }


 // calculoDolares(){
 //   return this.monto * dolar;
 // }
 //
 // calculoRupias(){
 //   return this.monto * rupia;
 // }
 //
 // calculoEuros(){
 //   return this.monto * euro;
 // }

}

const compra1 = new Divisa(1, 19.85); //USD
console.log('conversion Pesos a Dólares: ' + compra1.conversion);


const compra2 = new Divisa(1, 0.295); //INR
console.log('conversion Pesos a Rupias: ' + compra2.conversion);


const compra3 = new Divisa(1, 19.64);  //EUR
console.log('conversion Pesos a Euros: ' + compra3.conversion);


const compra4 = new Divisa(500, 19.85); //USD
console.log('conversion Pesos a Dólares: ' + compra1.conversionDesdePesos);
