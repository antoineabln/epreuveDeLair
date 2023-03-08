let char = "0";

let nbEtages = 5;


function test(char, nbEtages){

  let tab = [];
  
  for(let p = 0; p<nbEtages*2-1; p++){
    
    tab.push(' ');
    
  }
  
  let x = (tab.length-1)/2;
  let y = (tab.length-1)/2;
  
  for(let i = 1; i<=tab.length; i++){

    
    if(i%2===0){
      
      tab.splice(x,1,"0");
      y++;
    }
    else{
      tab.splice(y,1,"0");
      console.log(tab.join(''));
      x--;
    }
    
  }
  
}


test(char, nbEtages);
