setTimeout(() => {
    var nome = prompt('Qual é o seu nome?');
alert(`Olá ${nome}, ajude em minha vingança`);
   
    var resposta = prompt("DIGITE A LOCALIZAÇÃO DE 42.97479613947117, -93.18332566637537")
    if (resposta == 'Rockwell, IA 50469, EUA') {
        location.href = "../personagem_um_html/fase2.html";
        console.log('esta aqui')
    } else {
        location.href = "../personagem_um_html/gameover1.html";
    }
}, 200);
