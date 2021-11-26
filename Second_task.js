function sayHello(name){
  if(!name || !name.length){return "no name"}
  return name === "Mark" ? "Hi, Mark!" : `Hello, ${name}!`
}