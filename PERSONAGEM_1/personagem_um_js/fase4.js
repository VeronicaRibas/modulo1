setTimeout(() => {
    var resposta = prompt("DIGITE SUA RESPOSTA")
    if (resposta == 'sim') {
        location.href = "../personagem_um_html/fase5.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_um_html/fase6.html";
    }
}, 200);
