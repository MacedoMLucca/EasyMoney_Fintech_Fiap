// ideia pro login
function trocarItem() {
  // Obtenha o elemento que deseja trocar
  var elemento = document.getElementById('item');

  // Defina o novo conteúdo
  elemento.innerHTML = 'Novo conteúdo';
}
function voltarItem() {
  // Obtenha o elemento que deseja trocar
  var elemento = document.getElementById('item');

  // Defina o novo conteúdo
  elemento.innerHTML = 'Conteúdo original';
}

// menu
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('aberto');
  }


// var conteudoOriginal; // Variável para armazenar o conteúdo original

// function trocarItem() {
// var elemento = document.getElementById('item');

// if (!conteudoOriginal) {
// // Armazena o conteúdo original na primeira troca
// conteudoOriginal = elemento.innerHTML;
// elemento.innerHTML = 'Novo conteúdo';
// } else {
// // Restaura o conteúdo original
// elemento.innerHTML = conteudoOriginal;
// conteudoOriginal = null; // Reseta a variável de conteúdo original
// }
// }

