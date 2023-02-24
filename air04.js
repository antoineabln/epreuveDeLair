let str = "Hello milady,   bien ou quoi ??";

function adjacent(str){
  
  let tabStr = str.split('');
  let newTabStr = [];
  
  for(let i=0; i<tabStr.length; i++){
    
    if(tabStr[i]!= tabStr[i+1]){
      
      newTabStr.push(tabStr[i]);
    }
  }
  console.log(newTabStr.join(''));
}

adjacent(str);