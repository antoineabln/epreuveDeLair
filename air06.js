let tab = ["Michel", "Albert", "Thérèse", "Benoit"];

let char = "t";

function pass(tab, char){
  
  let newTab = [];
  
  for(let i = 0; i<tab.length; i++){
    
    let c=0;
    let compare = tab[i].split('');
    
  for(let j =0; j<compare.length;j++){
    
    if(compare[j]===char || compare[j] === char.toUpperCase()){
      c++;
    }
  }
    if(c===0){
      newTab.push(tab[i]);
    }
  }
  
  console.log(newTab);
  
}

pass(tab,char);
