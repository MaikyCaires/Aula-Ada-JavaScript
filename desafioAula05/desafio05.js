
try {
    
    const peso = Number(prompt("Digite seu peso")) 
    if(isNaN(peso)){
        throw new Error("Peso não é um numero")
    }
    if(peso <= 0){
        throw new Error("peso zero")
    }
    const altura = Number(prompt("Digite sua altura em metros ex: 1.80"))
    if(isNaN(altura)){
        throw new Error("Altura não é um numero")
    }
    if(altura <= 0){
        throw new Error("altura zero")
    }
    const imc = peso / (altura * altura);
    if (imc >= 30) {
        console.log(`Com imc de: ${imc.toFixed(1)},  você está com obesidade`);
  } else if (imc >= 25) {
    console.log(`Com imc de: ${imc.toFixed(1)}, você está com sobrepeso`);
  } else if (imc >= 18.5) {
    console.log(`Com imc de: ${imc.toFixed(1)}, você está com peso normal`);
  } else if (imc < 18.5) {
    console.log(`Com imc de: ${imc.toFixed(1)}, você está abaixo do peso`);
  }
} catch (error) {
    alert("erro:" + error.message)
}
