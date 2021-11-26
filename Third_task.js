function filterStrings(array,num){
  if(!array || !array.length){return "no array"}
  return array.filter((str) => str.length <= num)
}

// in case if you dont native js methods in this solution can do something like this
/* 
function filterStrings(array,num){
  if(!array || !array.length){return "no array"}
  const answer = [];
  for(let i = 0; i < array.length; i++){
    if(array[i].length <= num){
        answer.push(array[i])
    }
  }
  return answer
} */