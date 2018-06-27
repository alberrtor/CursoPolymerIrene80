//forEach

const arr = ['cat', 'dog', 'fish'];

for (var i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}

arr.forEach(element => {
 console.log(element);
});

//for in
const avengers = {
 name: 'Thor',
 activity: 'Conquistar chicas'
}

for (property in avengers) {
 console.log(property);
}

//FOR OF Y FOR IN
const list_avengers = [{
 name: 'Thor',
 activity: 'Conquistar chicas'
},{name: 'Hulk', activity: 'Destruir'}]
for (let t of list_avengers) {
  console.log('FOR OF------------');
  console.log(t);
  for (let p in t) {
    console.log('FOR IN------------');
    console.log('Nombre de la propiedad: '+p);
    console.log('Valor: '+t[p]);
  }
}

//for in
const string = 'hello';

for (character in string) {
 console.log(string[character]);
}

//for of MAP
let iterable = new Map ([['a', 1], ['b',2],['c',3]]);

for (let [key,value] of iterable) {
 console.log(key +': ' + value);
}

//for of STRING
let palabra = 'hola mundo';

for (variable of palabra) {
 console.log(variable);
}

//for of
const avengers1 = ['iron man', 'hulk', 'wasp'];

for (let aux of avengers1){
 console.log(aux);
}

//for of SET
const mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add('hola Mundo');

const o = {a:1, b:2};
mySet.add(o);

mySet.add({a:1, b:2});

mySet.add(5);

for (variable of mySet) {
 console.log(variable);
}
