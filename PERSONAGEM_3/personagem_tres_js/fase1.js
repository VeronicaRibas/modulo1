setTimeout(() => {
        var resposta = prompt("DIGITE SUA RESPOSTA")
    if (resposta == 'não') {
        location.href = "../personagem_tres_html/fase2.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_tres_html/gameover1.html";
    }
}, 200);