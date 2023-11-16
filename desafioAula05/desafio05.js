const peso = prompt('Digite seu peso')
const altura =prompt('Digite sua altura em metros ex: 1.80')
const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`Com imc de: ${imc.toFixed(1)},  você está com obesidade`)
}else if(imc >= 25 ){
    console.log(`Com imc de: ${imc.toFixed(1)}, você está com sobrepeso`)
}else if(imc >= 18.5){
    console.log(`Com imc de: ${imc.toFixed(1)}, você está com peso normal`)
}else if(imc < 18.5){
    console.log(`Com imc de: ${imc.toFixed(1)}, você está abaixo do peso`)
}
