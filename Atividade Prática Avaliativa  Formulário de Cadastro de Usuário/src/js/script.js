function mostrarSecao(){
    let secao = document.querySelector('section');
    //let efeitoSecao = document.querySelector('section');

    // Insere a mensagem de alerta a partir do índice no array
    //efeitoSecao.querySelector('p').innerHTML = ``;

    // Mostra a mensagem
    secao.style.display = 'block';
    secao.style.backgroundColor = 'yellow';
    secao.innerHTML = '<h1>Hello World!</h1>';
    //secao.style.top = '20px'; 

    // Apaga a mensagem apos 10 segundos
    setTimeout(() => {
        secao.style.top = '-100%'; 
        setTimeout(() => {
            secao.style.display = 'none'; 
        }, 1000); 
    }, 12000);
    
} 
