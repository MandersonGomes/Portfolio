function revealFunction() {
    window.sr = ScrollReveal({ duration: 1350, distance: '150px', easing: 'ease-out', reset: true});
    sr.reveal('.descricao', {origin: 'left'});
    sr.reveal('.socialMedia', {origin: 'bottom'});

    sr.reveal('.image', {origin: 'top'});
    sr.reveal('.sobreConteudo', {rotate: {x: 1000, z: 1000}});

    sr.reveal('.tituloHabilidade', {origin: 'top'});
    sr.reveal('.card-wrapper', {origin: 'bottom'});

    sr.reveal('.titulo', {origin: 'left'});
    sr.reveal('.projetosArea', {origin: 'right', reset: false});
}

window.addEventListener('load', () => {
    revealFunction();
})