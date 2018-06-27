function ensure(value) {
  if(value === undefined) {
    throw new Error('argumento no valido o indefinido');
  }
  return value;
}
