function seRonpe(){
  return 3 + r
}

try{
  seRonpe()
  console.log("Vaya tio, todo está bien.");
}catch(e){
  console.error("Vaya, algo se ha roto")
  console.error('No os preocupeis, el error es el siguiente: '+ e.message)
}

// seRonpe()