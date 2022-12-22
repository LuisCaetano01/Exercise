const todosCampos=document.querySelectorAll(".orcamentoCampos") //Campos do Orçamento | n está a ser usado.
const inserirCampos=document.querySelector(".orcamentocriado")
const btn_campos=document.querySelector("#btnAumentarCampos")
const btn_concluir=document.querySelector("#btnConcluir")
const tbodyCampos=document.querySelector("tbody")


btn_campos.addEventListener("click", btn_add)
window.addEventListener("load", iniciarPagina())

function iniciarPagina(){
    addFields(3)
}

function btn_add(){
    addFields(1)
}

//Variáveis da função addField
var n_campos=0
var forContar=0
//Função para criar do zero e adicionar todos os campos de input, parametro para quantidade de campos
function addFields(numeroCampos){
    n_campos = numeroCampos
    forContar+=numeroCampos
    const container = document.getElementById("orcamentoCampos")    

    for (let i = 0;i<n_campos;i++){
        if(i < forContar){ //if para quando adicionar apenas 1 campo, não tentar criar todos os campos novamente 
            //Cria campo descrição
            let td1 = document.createElement("td")
            let input = document.createElement("input")
            input.type = "text"
            input.id = "descricao" + (i+1)
            input.minLength = 50
            input.size = 50
            td1.appendChild(input)
            //Cria campo valor
            let td2 = document.createElement("td")
            let input2 = document.createElement("input")
            input2.type = "number"
            input2.id = "valor" + (i+1)
            td2.appendChild(input2)
            //Cria campo MENU SELECT para o tipo Activo/PAssivo
            let td3 = document.createElement("td")
            let boxOpt = document.createElement("SELECT") //cria Select 
            boxOpt.setAttribute("id", "mySelect");
            //cria option 1
            let option1 = document.createElement("option"); 
            option1.setAttribute("value", "Activo");
            let option1text = document.createTextNode("a Receber");
            option1.appendChild(option1text);
            //cria option 2
            let option2 = document.createElement("option");
            option2.setAttribute("value", "Passivo");
            let option2text = document.createTextNode("a Pagar");
            option2.appendChild(option2text);

            boxOpt.appendChild(option1); //Insere os campos OPTION no SELECT
            boxOpt.appendChild(option2);
            td3.appendChild(boxOpt) //Insere o select/option no TD (tabela)

            //adiciona os campos na Div
            container.appendChild(td1)        
            container.appendChild(td2)
            container.appendChild(td3)  

            //Faz parágrafo
            const paragrafo = document.createElement("br")
            container.appendChild(paragrafo)
            
            forContar+=i //contagem do nº de campos já existente
        }
    }
}


