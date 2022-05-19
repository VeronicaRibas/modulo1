setTimeout(() => {
    var resposta = prompt("DIGITE SUA RESPOSTA")
    if (resposta == 'não') {
        location.href = "../personagem_um_html/fase4.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_um_html/gameover3.html";
    }
}, 200);
