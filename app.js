let listaAmigos = [];

function clearTextField(){
    document.querySelector('input').value = '';
}

function adicionarAmigo(){
    if(document.querySelector('input').value == ''){
        return 0;
    }
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    clearTextField();
}