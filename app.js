let listaAmigos = [];

function clearTextField(){
    document.querySelector('input').value = '';
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ''; // Limpa a lista antes de recriá-la

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li"); // Cria um <li>
        li.textContent = amigo; // Adiciona o nome do amigo como texto
        ul.appendChild(li); // Adiciona o <li> dentro do <ul>
    });
}

function adicionarAmigo(){
    if(document.querySelector('input').value == ''){
        return 0;
    }
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    clearTextField();
    atualizarLista();
}