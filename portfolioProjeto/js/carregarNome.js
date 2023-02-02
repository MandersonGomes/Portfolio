const nomeOriginal = document.querySelector('.nome');
const nomeConteudo = nomeOriginal.innerHTML;
nomeOriginal.innerHTML = '';

window.onload = function () {
    setTimeout(() => {
        const nomeSplit = nomeConteudo.split(''); 
        nomeOriginal.innerHTML = '';
        nomeSplit.forEach((element, index) => {
            setTimeout(() => {
                nomeOriginal.innerHTML += element;
            }, 200 * index)
        })
    }, 2000)
}