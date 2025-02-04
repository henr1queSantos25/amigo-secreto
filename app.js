let listaAmigos = [];

function clearTextField(){
    document.querySelector('input').value = '';
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ''; 

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        ul.appendChild(li); 
    });
}

function adicionarAmigo(){
    if(document.querySelector('input').value == ''){
        alert('Por favor, insira um nome.');
        return 0;
    }
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    clearTextField();
    atualizarLista();
}

function reiniciarJogo(){
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("listaAmigos").innerHTML = '';
    listaAmigos = [];
}


function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('Por favor, insira algum nome.');
        return;
    }
    let indexSorteado = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: ${listaAmigos[indexSorteado]}`;
}