 
function enviar(){
    //texto digitado pelo user
    var nome = document.getElementById("lbl_atualiza_nome")
    var idade = document.getElementById("lbl_atualiza_idade")
    var localizacao = document.getElementById("lbl_atualiza_localizacao")
    var biografia = document.getElementById("txtA_atualiza_biografia")

    //texto alterado assim que clicar em salvar
    var lbl_nome = document.getElementById("lbl_nome")
    var lbl_idade = document.getElementById("lbl_idade")
    var lbl_localização = document.getElementById("lbl_localizacao")
    var txtA_biografia = document.getElementById("txtA_biografia") 

    lbl_nome.innerHTML = nome
    lbl_idade.innerHTML = idade
    lbl_localização.innerHTML = localizacao
    txtA_biografia.innerHTML = biografia
  
}
