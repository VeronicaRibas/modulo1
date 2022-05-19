setTimeout(() => {
    var resposta = prompt("DIGITE SUA RESPOSTA")
    if (resposta == 'não') {
        location.href = "../personagem_um_html/fase7.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_um_html/fase8.html";
    }
}, 200);
