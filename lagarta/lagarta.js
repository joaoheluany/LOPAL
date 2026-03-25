   async function lagarta(){
        let lagarta = "()()()()()()(--)";
        let espaco = " ";
        let rabo = "( )( )( )( )( )( )(--) "

     function sleep(ms){
        return new Promise( resolve => setTimeout(resolve,ms));
    }

     for( let i = 0; i < 500; i++){
     lagarta = espaco + lagarta
     console.log(lagarta);
     await sleep (500);
     console.clear();   
     rabo = espaco + rabo
     console.log(rabo);
     await sleep (500);
     console.clear();   
     }

    }