var imagens = Array("url('img/becece1.jpg')","url('img/ecomp.png')","url('img/IFPR.png')","url('img/games.png')","url('img/lol.jpg')","url('img/musica.png')");
var titulos = Array("BCC UFPR 2015","Ecomp Empresa Júnior","IFPR 2012-2014","Meus Jogos","Lolzinho","Músicas");
var subtitulos = Array("Melhor edição ever.","Assessor de Presidência","Técnico em Programação de Jogos Digitais","Dos quais eu não tenho vergonha de falar sobre", "Nick: iikat",
"Coisas que ouço/ouvi algum dia");

var links = Array("http://www.ufpr.br/portalufpr/","http://www.ecomp.co/","http://curitiba.ifpr.edu.br/","insiraLinkJogos","http://br.op.gg/summoner/userName=iikat","musicas");

var iterador=0;
function next(){
	iterador+=1;
    if(iterador>=imagens.length){
        iterador=0;
    }
	
}


function changeImage(){
	var imagem = document.getElementById("jumbotron");
	var title = document.getElementById("title");
   var subtitle = document.getElementById("subtitle");
   var link = document.getElementById("link");
	next();

	imagem.style.backgroundImage = imagens[iterador];
    title.textContent=titulos[iterador];
	subtitle.textContent= subtitulos[iterador];
	link.href = links[iterador];
}
//<img style="-webkit-user-select: none; cursor: zoom-in;" src="http://s3.amazonaws.com/codecademy-content/courses/ltp/img/lodging.png" width="722" height="282">
