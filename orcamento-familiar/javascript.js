const todosCampos=[...document.querySelectorAll(".orcamentoCampos")] //Campos do Orçamento | n está a ser usado.
const inserirCampos=document.querySelector(".orcamentocriado")
const btn_campos=document.querySelector("#btnAumentarCampos")
const btn_concluir=document.querySelector("#btnConcluir")
const tbodyCampos=document.querySelector("tbody")


// Captura os 3 elementos input da div, e assim poderei obte-los pelo índice, por ser o mesmo número.
const camposDescricao = [...document.getElementsByName("descricao")] 
const camposValor = [...document.getElementsByName("valor")]     
const camposTipo = document.getElementsByName("tipo")      

camposDescricao.map((elm,ind,cd)=>{
    document.write(elm.value + " ------------ " + camposValor[ind].value + "<br>")
    document.write(camposValor[ind].value)

    
})
const fm=document.forms["f_orcamento"]
document.write(fm.innerHTML)
document.write(fm.innerHTML)
document.write(fm.innerHTML)

console.log(fm.innerHTML)

console.log(todosCampos)
console.log(camposDescricao)
console.log(tbodyCampos)