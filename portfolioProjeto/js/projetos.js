const botao = document.querySelector('button');
const projects = document.querySelectorAll('.esconder');

function maisProjetos() {
    projects.forEach(e => e.classList.toggle('esconder'))

    switch(botao.innerHTML) {
        case 'Ver Mais':
            botao.innerHTML = 'Ver Menos'
            break;
        case 'Ver Menos':
            botao.innerHTML = 'Ver Mais'
            break;
    }
}

botao.addEventListener('click', maisProjetos)