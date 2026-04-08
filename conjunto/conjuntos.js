function conjunto (){
    const letras = new Set();
    letras.add ("a");
    letras.add ("b");
    letras.add ("c");

    console.log (letras.has ("a"));

    //delete() e um metodo para remover um elemento do conjunto
    letras.delete("c");
    console.log(letras);

    // como no conjunto a chave é igual ao valor, os metodos values() e keys() retornam exatamente
    for (const x of letras.values()){
        console.log(x);
    }

    for (const x of letras.keys()){
        console.log(x);
    }
}
conjunto();