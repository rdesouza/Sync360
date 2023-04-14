  function enviar() {
        // Pega os valores digitados
        const nome = document.getElementById('lbl_atualiza_nome').value;
        const idade = document.getElementById('lbl_atualiza_idade').value;
        const localizacao = document.getElementById('lbl_atualiza_localizacao').value;
        const biografia = document.getElementById('txtA_atualiza_biografia').value;

        // Atualiza os campos com a tag filedset disabled 
        document.getElementById('lbl_nome').value = nome;
        document.getElementById('lbl_idade').value = idade;
        document.getElementById('lbl_localizacao').value = localizacao;
        document.getElementById('txtA_biografia').value = biografia;


        // Impede que a página seja recarregada apos clicar no botão salvar
        event.preventDefault();
      }
  

