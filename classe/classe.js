function classe(){
    class Carro {
        constructor(nome, ano){
            this.nome = nome;
            this.ano = ano;
        }
        idade (){
            const data = new Date();
            return data.getFullYear() - this.ano;
        }
    }

    let meuCarro = new Carro("kwid",2009);

    let frase ="o meu " + meuCarro.nome + meuCarro.ano + " tem " + meuCarro.idade() + "anos."

    console.log(frase);
    meuCarro.nome = "renegade"
    meuCarro.ano = 2024
    console.log ( meuCarro.nome + " " + meuCarro.ano);
    let outraFrase = "eu fui p escola. "
}
classe();
