let tab = [10,11,12,20];
let operande = "-5";

function operation(tab,operande){
  
  let newTab = [];
  
  for(let i = 0; i<tab.length;i++){
    
    newTab.push(tab[i]+parseInt(operande));
  }
  
  return newTab;
}

console.log(operation(tab,operande));