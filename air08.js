let tab1 = [10,20,30];
let tab2= [15,25,35];

function tri(tab1, tab2){
  
  let tab = tab1.concat(tab2);
  let newTab = [];
  
  for(let i = 0; i < tab.length; i++){
    
   let max = Math.max(...tab);
   let index = tab.indexOf(max);
   newTab.push(max);
   tab[tab.indexOf(max)]= 0;
    
  }

  
  console.log(newTab.reverse());
  
}

tri(tab1,tab2);
