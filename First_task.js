function firstLetterToUpper(str){
  if(!str || !str.length){return "no string"}
  return str.toLowerCase().replace(/^./,s => s.toUpperCase())
}
