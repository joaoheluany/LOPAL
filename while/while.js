function loop(){
    let texto = "";
    let i = 10;

    while (i < 10){
        texto += "O numero é " + i + "<br>";
        i++;
    }
  
    document.getElementById("demo").innerHTML = texto;
}