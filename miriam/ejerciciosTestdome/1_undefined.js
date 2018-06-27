function ensure(value) {
  if(value === undefined ){
    throw new Error("Error");
  }
  return value;
}
