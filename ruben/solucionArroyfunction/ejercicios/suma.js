function sumar(a,b) {
 return a+b;
}

var res = sumar(5,4);

console.log(res);

//----------------------------
//1. Funcion anonima

var suma = function(num1,num2){
  return num1+num2; } ;
  console.log(suma(3,2));

//----------------------------
//2. IIFE

(function (num1,num2) {
   return console.log(num1+num2);
})(3,4);

//-----------------------------
//3. Arrow Function
var sumar = (num1,num2) => num1+num2;
console.log(sumar(4,8));

//-----------------------------
//4. IIFE + Arrow function
let suma2 = ((num1 , num2)  =>  {
   return {
       getSuma:function(){
         return num1 + num2;
       }

   }
})(9, 4);

 console.log(suma2.getSuma());
