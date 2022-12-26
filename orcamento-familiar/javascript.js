const todosCampos=document.querySelectorAll(".orcamentoCampos") //Campos do Orçamento | n está a ser usado.
const inserirCampos=document.querySelector(".orcamentocriado")
const btn_campos=document.querySelector("#btnAumentarCampos")
const btn_concluir=document.querySelector("#btnConcluir")
const tbodyCampos=document.querySelector("tbody")

btn_concluir.addEventListener("click", concluir_orcamente)
btn_campos.addEventListener("click", btn_add)
window.addEventListener("load", iniciarPagina())

function concluir_orcamente(){
    const camposDescricao=[...document.getElementsByClassName("descricao")]
    const camposValores=document.getElementsByClassName("valor")
    const camposSelect=document.getElementsByClassName("Select")
    const divActivo=document.getElementById("divActivo")
    const divPassivo=document.getElementById("divPassivo")
    const tabelaEstilo=document.getElementById("tabelaFinal")

    let estilo = "<style>"
    estilo += "#tabelaFinal {width: 60%; font: 25px Calibri;}"
    estilo += "td { border:solid}"
    estilo += "#divActivo {border: solid 2px #888; border-collapse: collapse;"
    estilo += "padding: 4px 8px; text-align:center;}"
    estilo += "#divPassivo {border: solid 2px #888; border-collapse: collapse;"
    estilo += "padding: 4px 8px; text-align:center;}"
    estilo += "</style>"
    tabelaEstilo.innerHTML= estilo

    let totalActivo=0
    let totalPassivo=0

    camposDescricao.map((el,indice)=>{
        if(!el.value==""){
            if(camposSelect[indice].value=="Activo"){
                let tabelaDescricao=document.createElement("td")
                let tabelaValor=document.createElement("td")
                tabelaDescricao.innerHTML = el.value
                tabelaValor.innerHTML=camposValores[indice].value
                totalActivo+=parseFloat(camposValores[indice].value)
                divActivo.appendChild(tabelaDescricao)
                divActivo.appendChild(tabelaValor)
                divActivo.appendChild(document.createElement("br"))

            }else{
                let tabelaDescricao=document.createElement("td")
                let tabelaValor=document.createElement("td")
                tabelaDescricao.innerHTML = el.value
                tabelaValor.innerHTML=camposValores[indice].value
                totalPassivo+=parseFloat(camposValores[indice].value)
                divPassivo.appendChild(tabelaDescricao)
                divPassivo.appendChild(tabelaValor)
                divPassivo.appendChild(document.createElement("br"))


            }
            console.log(el.value)
            console.log(camposValores[indice].value)
            console.log(camposSelect[indice].value)
            
        }


    })
}

function iniciarPagina(){
    addFields(3)
}

function btn_add(){
    addFields(1)
}

//Variáveis da função addField
var n_campos=0
//Função para criar do zero e adicionar todos os campos de input, parametro para quantidade de campos
function addFields(numeroCampos){   
    const container = document.getElementById("orcamentoCampos") //Div que vai receber os elementos 

    for (let i = 0;i<numeroCampos;i++){
        //Cria campo descrição
        let td1 = document.createElement("td")
        let input = document.createElement("input")
        input.type = "text"
        input.setAttribute("class", "descricao")
        input.minLength = 50
        input.size = 50
        td1.appendChild(input)
        //Cria campo valor
        let td2 = document.createElement("td")
        let input2 = document.createElement("input")
        input2.type = "number"
        input2.setAttribute("class", "valor")
        td2.appendChild(input2)
        //Cria campo MENU SELECT para o tipo Activo/PAssivo
        let td3 = document.createElement("td")
        let boxOpt = document.createElement("SELECT") //cria Select 
        boxOpt.setAttribute("class", "Select");
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
            
        }
}


