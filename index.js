let peso  = document.getElementById('pesoInput');
let altura = document.getElementById('alturaInput');
let button = document.getElementById('btn');
let escreve = document.getElementById('write');

function calcular(){

    let pesoValor = peso.value;
    var alturaValor = altura.value;

    alturaValor = alturaValor / 100;

    const imc = (pesoValor / (Math.pow(alturaValor,2)));

    if(pesoValor > 0 && alturaValor > 0){
        if(imc < 17){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-danger col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>MUITO ABAIXO DO PESO!!!</strong>
                                    </p>
                                 </div>`
        }else if(imc >= 17 && imc < 18.50){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-warning col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>ABAIXO DO PESO!</strong>
                                    </p>
                                 </div>`
        }else if(imc >= 18.50 && imc < 25){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-success col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>PESO NORMAL</strong>
                                    </p>
                                 </div>`
        }else if(imc >= 25 && imc < 30){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-warning col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>ACIMA DO PESO!</strong>
                                    </p>
                                 </div>`
        }else if(imc >= 30 && imc < 35 ){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-warning col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>OBESIDADE!!</strong>
                                    </p>
                                 </div>`
        }else if(imc >= 35 && imc < 40){
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-danger col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>OBESIDADE SEVERA!!!</strong>
                                    </p>
                                 </div>`
        }else{
            escreve.innerHTML = `<p class="fs-2 my-5">
                                    Seu IMC é: ${imc.toFixed(2)}
                                 </p>
                                 
                                 <div class="alert alert-danger col-lg-10">
                                    <p class="fs-2 text-center py-3">
                                       Seu estado é <strong>OBESIDADE MÓRBIDA!!!</strong>
                                    </p>
                                 </div>`
        }
    }else{
        escreve.innerHTML = `<div class="alert alert-danger">
        <p class="text-center">ERRO: Adicione números maiores que <strong>ZERO</strong>
        </p></div>`
    }
}

button.addEventListener('click',calcular);