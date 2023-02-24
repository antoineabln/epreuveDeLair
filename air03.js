let tab = [1,2,3,4,5,4,3,2,1];

function sansPaire(tab){

  let tabResult = [];

  for(let i = 0; i<tab.length;i++){
    let c = 0;
    for(let j = 0; j<tab.length;j++){
      if(tab[i]===tab[j]){
        c++;
      }
    }

    if(c===1){
      tabResult.push(tab[i]);
    }
  }

  console.log(tabResult);
}

sansPaire(tab);
