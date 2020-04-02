let inputCPF = document.getElementById('cpfUsuario');
let inputCpfCartao = document.getElementById('cpfTitularCartao');
let inputCEP = document.getElementById('cepUsuario');
let inputCVV = document.getElementById('cvv');
let inputSenha = document.getElementById('senhaUsuario');
let inputConfSenha = document.getElementById('confSenhaUsuario');
let inputCartao = document.getElementById('numCartao');
let logradouro = document.getElementById('enderecoUsuario');
let bairro = document.getElementById('bairroUsuario');
let cidade = document.getElementById('cidadeUsuario');
let estado = document.getElementById('estado');


let config = {
    method: "GET"
}


//valida cpf cliente
inputCPF.addEventListener('keyup', ()=>{
    //apaga o ultimo caractere NaN digitado
    if (isNaN(inputCPF.value)){
        inputCPF.value=inputCPF.value.substring(0, (inputCPF.value.length-1));
    }
    if(inputCPF.value.length>11){
        inputCPF.value=inputCPF.value.substring(0, 11);
    }
});

function buscaCep(cep){
    alert("Buscando CEP");
    //fetch e' o responsavel por realizar a solicitacao e devolver uma resposta
    //then define o que sera' feito apos finalizar a requisicao
    fetch(`https://viacep.com.br/ws/${cep}/json/`, config)
        .then((response) => response.json()//aqui extraimos um json da resposta, o json retorna uma nova promessa
        .then((dados) => {
            if(dados.erro){
                return inputCEP.setAttribute('class', 'form-control is-invalid');
            } else{
                
            }
        })
}

//valida cep
inputCEP.addEventListener('keyup', ()=>{
    //apaga o ultimo caractere NaN digitado
    if (isNaN(inputCEP.value)){
        inputCEP.value=inputCEP.value.substring(0, (inputCEP.value.length-1));
    }
    if(inputCEP.value.length>=8){
        inputCEP.value=inputCEP.value.substring(0, 8);
        buscaCep(inputCEP.value);
    }
})

//valida cvv
inputCVV.addEventListener('keyup', ()=>{
    //apaga o ultimo caractere NaN digitado
    if (isNaN(inputCVV.value)){
        inputCVV.value=inputCVV.value.substring(0, (inputCVV.value.length-1));
    }
    if(inputCVV.value.length>=3){
        inputCVV.value=inputCVV.value.substring(0, 3);
    }
});

//valida cpf titular cartao
inputCpfCartao.addEventListener('keyup', ()=>{
    if (isNaN(inputCpfCartao.value)){
        inputCpfCartao.value=inputCpfCartao.value.substring(0, (inputCpfCartao.value.length-1));
    }
    if(inputCpfCartao.value.length>11){
        inputCpfCartao.value=inputCpfCartao.value.substring(0, 11);
    }
});

//valida senha
inputConfSenha.addEventListener('keyup', (e)=>{
    if(inputConfSenha.value!=inputSenha.value){
        inputConfSenha.setAttribute('class', 'form-control is-invalid');
    }else{
        inputConfSenha.setAttribute('class', 'form-control is-valid');
    }
})

//valida cartao
inputCartao.addEventListener('keyup', ()=>{
    if (isNaN(inputCartao.value)){
        inputCartao.value=inputCartao.value.substring(0, (inputCartao.value.length-1));
    }
    if(inputCartao.value.length>=16){
        inputCartao.value=inputCartao.value.substring(0, 16);
    }
})