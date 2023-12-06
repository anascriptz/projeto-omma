console.log('do you think?');

 console.log("tá funcionando!");
//1 e 2: adicionando link para nova página
// selecionando a lista de links
let listaMenu = document.querySelector("header .menu nav ul");
// criando o novo elemento
let novoItemMenu = "<li> <a href='quem-somos.html'> Quem Somos </a> </li>";
// adicionando o novo link no HTML
listaMenu.innerHTML += novoItemMenu;
// 3 - alterar texto
// selecionando elemento
let tituloReceitasPrincipais = document.querySelector(
  ".receitas-principais h2"
);
// alterando texto
tituloReceitasPrincipais.innerText = "receitas de sucesso";
    
    
  
  

