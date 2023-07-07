function funcao_nao_disponivel() {
  alert('Em Breve');
}

function esquciSenha(){
  var email = prompt('Digite seu email, para refazer a senha!')
  setTimeout(function() {
    alert('email enviado para "'+email+'" com sucesso!')
  }, 1000);
}

function validarCampos(){
  var email = document.getElementById("btn-email").value;
  var pass = document.getElementById("btn-pw").value;
  
  if (pass === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  return true
}