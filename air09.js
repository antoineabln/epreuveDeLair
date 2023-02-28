let tab = ["Michel", "Albert","Thérèse","Benoit"];

function gauche(tab){
  
  let c = tab.length-1;
  
  let newTab = [];

  for(let i = 1; i<tab.length; i++){
    
    newTab.push(tab[i]);
    
  }
  newTab.push(tab[0]);
  console.log(newTab);
}

gauche(tab);