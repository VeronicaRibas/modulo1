setTimeout(() => {
    var resposta = prompt("DIGITE SUA RESPOSTA")
if (resposta == 'sim') {
    location.href = "../personagem_tres_html/fase3.html";
    console.log('esta aqui')
} else {
    location.href = "../personagem_tres_html/gameover1.html";
}
}, 200);