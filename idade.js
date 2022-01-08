function verificador() { // função criada para integrar cm o botton do html
    var data = new Date() // data atual sendo atribuida a variavel data 
    var ano = data.getFullYear() // variavel data com o comando getfullyear, que mostra o ano atual com quatro digitos, sendo atribuida a variavel ano
    var fano = document.getElementById('txtano') // criando objeto com comando getelementbyid, atraves do id txtano(campo onde vai ser inserido o ano de nascimento), e o atribuindo a variavel fano.
    var res = document.querySelector('div#res') // criando objeto com comando queryselector, atraves da div res(campo de onde vai sair a mensagem), e o atribuindo a variavel de nome " res "
    if(fano.value.length == 0 || fano.value > ano) { // atraves da condição if, fazendo a verificação se o campo onde sera inserido o ano de nascimento se encontra vazio, ou com o ano maior que o ano atual, se sim, sera exibido um alerta de erro. 
        window.alert('Verifique os dados e tente novamente ! ') // alerta de erro após a verificação da condição a cima. 
    } else {
        var fsex = document.getElementsByName('radsex') // criando objeto com comando getelementbyname, atraves do nome radsex(utilizado para marcar uma das duas opções Fem ou Masc) e o atribuindo a variavel fsex
        var idade = ano - (fano.value) // fazendo a subtração do ano atual pelo ano de nascimento digitado no campo fano, e atribuindo o resultado a variavel idade.
        var genero = '' //  criando a variavel genero, sendo atribuida a ela uma string vazia. 
        var img = document.createElement('img') // criando um objeto de imagem, atraves do comando createelement, e atribuindo a variavel img. 
        img.setAttribute('id', 'foto') // 
        if (fsex[0].checked) { // verificando o sexo, atraves da posição, que é [0] então significa masculino
            genero = ' Homem ' // atribuindo homem a variavel genero, se o q tiver marcado for a posição [0]
            if(idade >=0 && idade < 10) { // testando condição, se idade for maior ou igual a 0 e idade for menor que 10 anos, é uma criança/bebe masculino
                // criança
                img.setAttribute('src', 'bebemascu.jpg') // inserindo uma imagem de um bebe masculino atraves do comando img.setattribute, ja que foi validado na linha a cima.
                document.body.style.background = ' blue ' // mudando a cor de fundo conforme o genero das pessoas, se for masculino sera sempre azul

            } else if (idade >= 10 && idade < 21){ // testando condição atraves do comando else if( senão se), idade for for maior ou igual a 10 e idade for menor que 21 anos é um jovem/adolescente masculino
                // jovem
                img.setAttribute('src', 'homemadolesc.jpg') // inserindo uma imagem de um adolescente/jovem atraves do comando setattribute
                document.body.style.background = ' blue ' // mudando a cor de fundo conforme o genero das pessoas, se for masculino sera sempre azul
            } else if (idade < 50){ // testando condição atraves do comando else if( senão se), idade  for menor que cinquenta anos e maior que 21, sera um adulto.
                // adulto 
                img.setAttribute('src', 'homemadulto.jpg') // inserindo imagem de um homem adulto atraves do comando setattribute
                document.body.style.background = ' blue ' // mudando a cor de fundo conforme o genero das pessoas, se for masculino sera sempre azul
            } else { // testando condição(senao) onde idade sera maior que 50 anos
                // idoso 
                img.setAttribute('src', 'idosohomem.jpg') // inserindo a imagem de um homem idoso atraves do comando setattribute
                document.body.style.background = ' blue ' // mudando a cor de fundo conforme o genero das pessoas, se for masculino sera sempre azul
            }
        } else if (fsex[1].checked){ // verificando o sexo, atraves da posição, que é [1] então significa feminino
            genero = ' mulher ' // atribuindo mulher a variavel genero, se o q tiver marcado for a posição [1]
            if(idade >=0 && idade < 10) { // testando condição, se idade for maior ou igual a 0 e idade for menor que 10 anos, é uma criança/bebe feminino
                // criança
                img.setAttribute('src', 'bebefemi.jpg') // inserindo uma imagem de um bebe feminino atraves do comando img.setattribute, ja que foi validado na linha a cima.
                document.body.style.background = ' pink ' // mudando a cor de fundo conforme o genero das pessoas, se for feminino sera sempre rosa

            } else if (idade >= 10 && idade < 21){ // testando condição atraves do comando else if( senão se), idade  for maior ou igual a 10 e idade for menor que 21 anos é uma jovem/adolescente feminina
                // jovem
                img.setAttribute('src', 'mulheradolesc.jpg') // inserindo a imagem de uma mulher/jovem adolescente atraves do comando img.setattribut
                document.body.style.background = ' pink '// mudando a cor de fundo conforme o genero das pessoas, se for feminino sera sempre rosa
            } else if (idade < 50){ // testando condição atraves do comando else if( senão se), idade  for menor que cinquenta anos e maior que 21, sera um adulto feminina
                // adulto
                img.setAttribute('src', 'mulheradulta.jpg') // inserindo a imagem de uma mulher adulta atraves do comando img.setattribut
                document.body.style.background = ' pink '// mudando a cor de fundo conforme o genero das pessoas, se for feminino sera sempre rosa
            } else { // testando condição onde idade sera maior que 50 anos
                // idoso 
                img.setAttribute('src', 'idosamulher.jpg') // inserindo imagem de uma mulher idosa atraves do comando img.setattribute
                document.body.style.background = ' pink '// mudando a cor de fundo conforme o genero das pessoas, se for feminino sera sempre rosa
            }
        }
        res.innerHTML = ` Dectamos ${genero} com ${idade} anos. ` // mostrando mensagem na tela que detectou o genero atraves do placeholder e variavel genero e a idade, atraves do placeholder e variavel idade.
        res.appendChild(img) // adicionando a imagem atraves do comando appendchild e variavel img
    }    

}