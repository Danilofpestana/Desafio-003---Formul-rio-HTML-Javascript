function MostrarDados(){
    var nome = document.getElementById('nome');
    var nomeImpresso = document.getElementById('nomeImpresso');
    nomeImpresso.innerHTML = nome.value;

    var endereco = document.getElementById('endereco');
    var enderecoImpresso = document.getElementById('enderecoImpresso');
    enderecoImpresso.innerHTML = endereco.value;

    var bairro = document.getElementById('bairro');
    var bairroImpresso = document.getElementById('bairroImpresso');
    bairroImpresso.innerHTML = bairro.value;

    var cidade = document.getElementById('cidade');
    var cidadeImpresso = document.getElementById('cidadeImpresso');
    cidadeImpresso.innerHTML = cidade.value;

    var estado = document.getElementById('estado');
    var estadoImpresso = document.getElementById('estadoImpresso');
    estadoImpresso.innerHTML = estado.value;

    var cep = document.getElementById('cep');
    var cepImpresso = document.getElementById('cepImpresso');
    cepImpresso.innerHTML = cep.value;

    var telefone = document.getElementById('telefone');
    var telefoneImpresso = document.getElementById('telefoneImpresso');
    telefoneImpresso.innerHTML = telefone.value;

    alert(nome.value);
}