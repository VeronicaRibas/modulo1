setTimeout(() => {
        var resposta = prompt("DIGITE SUA ESCOLHA")
    if (resposta == 'sim') {
        location.href = "../personagem_dois_html/fase3.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_dois_html/gameover3.html";
    }
}, 200);


