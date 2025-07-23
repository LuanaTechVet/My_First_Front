const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Expressão Regular para validação

formulario.addEventListener('submit', function(event) { //ouvidor de eventos ao formulário, sempre que o usuario clica em enviar/submit
  
    event.preventDefault(); //previne o padrão(recarregar) e executa a função
  
    const campoNome = document.querySelector('#name'); //input
    const txtNome = document.querySelector('#txtNome'); //span de erro
  
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus(); //torna o elemento atualmente ativo, recebendo eventos e outras interações
      return;//impedindo que o formulário seja enviado
    }else{
      txtNome.innerHTML = ''; //vazia=sem erros
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) { //A função match() pesquisa uma string em busca de correspondências com uma Expressão Regular.Caso a correspondência não seja encontrada, ele retornará nulo (null)
      txtEmail.innerHTML = 'Endereço de e-mail inválido - Exemplo: exemplo@exemplo.com';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = '' 
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''
    //Limpa todos os inputs e o text area do formulário, após o envio bem sucedido.
  });
