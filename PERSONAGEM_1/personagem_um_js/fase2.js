setTimeout(() => {
    var resposta = prompt("DIGITE SUA RESPOSTA")
    if (resposta == 'não') {
        location.href = "../personagem_um_html/fase3.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_um_html/gameover2.html";
    }
}, 200);
