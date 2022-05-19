setTimeout(() => {
    var nome = prompt('Qual é o seu nome?');
alert(`Olá ${nome}, tente escapar da minha vingança`);
   
    var resposta = prompt("DIGITE SUA ESCOLHA")
    if (resposta == 'sim') {
        location.href = "../personagem_dois_html/fase2.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_dois_html/gameover1.html";
    }
}, 200);


