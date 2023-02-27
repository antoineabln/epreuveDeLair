let tab = [10, 20, 30, 40, 50, 60, 70, 90];
let newElement = 33;

function tri(tab , newElement){
  
  tab.push(newElement);
  let newTab = [];
  let tab2 = tab;
  
  for(let i = 0; i < tab2.length; i++){
    
   let max = Math.max(...tab);
   let index = tab.indexOf(max);
   newTab.push(max);
   tab[tab.indexOf(max)]= 0;
    
  }
  
  console.log(newTab.reverse());
}

tri(tab , newElement);
