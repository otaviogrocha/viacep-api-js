


const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
}

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

const pesquisarCep = () =>{
    limparFormulario()

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    
    const isNumber = (numero) => /^[0-9]+$/.test(numero);
    const cepValido = (cep) =>cep.length = 8 && isNumber(cep);
    if (cepValido(cep)){
        fetch(url).then(response => response.json())
        .then(data => {
            if(data.hasOwnProperty('erro')){
                document.getElementById('endereco').value = 'CEP não encontrado!'
            }else{
                preencherFormulario(data);
            }  
        })
    }else{
        document.getElementById('endereco').value = 'CEP Inválido!'
    }
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)

