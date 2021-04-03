// variaveis referentes ao horario
var pegaData = new Date();

function estilo() {
    // cria a tag link
    var horaAtual = pegaData.getHours();
    var head = document.querySelector('head');
    var link = document.createElement('link');
    link.setAttribute('rel', 'styleSheet');

    // cria o link que muda o tema da pagina
    if (horaAtual > 6 && horaAtual < 12) {

        link.setAttribute('href', 'css/manha.css');
        head.appendChild(link);

    } else if (horaAtual > 12 && horaAtual < 18) {

        link.setAttribute('href', 'css/tarde.css');
        head.appendChild(link);

    } else {

        link.setAttribute('href', 'css/noite.css');
        head.appendChild(link);

    }
}
// relógio em tempo real
var horas = document.getElementById('horas');
var dataAtual = document.getElementById('data');
function mostraData() {
    horas.innerHTML = ((new Date).toLocaleString().substr(11, 8));
    dataAtual.innerHTML = `${pegaData.getDate()}/${pegaData.getMonth() + 1}/${pegaData.getFullYear()}`
}
setInterval(mostraData, 1000)

// função que calcula a faixa etaria e mostra uma imagem
function principal() {

    // cria a tag img
    var informacoes = document.querySelector('div#informacoes');
    var img = document.createElement('img');
    img.setAttribute('id', 'imagem');
    img.setAttribute('width', '100%');

    // captura as informacoes do usuario
    var nascimento = document.getElementById('nascimento');
    var idade = (Number(pegaData.getFullYear()) - nascimento.value);
    var sexo = document.getElementsByClassName('sexo');

    // campo masculino
    if (sexo[0].checked) {
        if (idade < 16) {

            img.setAttribute('src', 'img/criancaHomem.png');

        } else if (idade <= 21) {

            img.setAttribute('src', 'img/jovemHomem.png');

        } else if (idade < 65) {

            img.setAttribute('src', 'img/adultoHomem.png');

        } else if (idade >= 65) {

            img.setAttribute('src', 'img/idoso.png');

        }
        // campo feminino
    } else {

        if (idade < 16) {

            img.setAttribute('src', 'img/criancaMenina.png');

        } else if (idade <= 21) {

            img.setAttribute('src', 'img/jovemMenina.png');

        } else if (idade < 65) {

            img.setAttribute('src', 'img/adultoMenina.png');

        } else if (idade >= 65) {

            img.setAttribute('src', 'img/idosa.png');

        }
    }

    informacoes.innerHTML = ` ${idade} anos`;
    informacoes.appendChild(img);

}

function validacao() {

    var nasc = document.getElementById('nascimento');

    if (nasc.value > Number(pegaData.getFullYear()) || nasc.value < 1930) {
        nasc.style.border = '2px solid red';
    } else {
        nasc.style.border = 'none';
        principal();
    }

}

setInterval(validacao, 1000);
setInterval(estilo, 1000);