const todosCampos=document.querySelectorAll(".orcamentoCampos") //Campos do Orçamento | n está a ser usado.
const inserirCampos=document.querySelector(".orcamentocriado")
const btn_campos=document.querySelector("#btnAumentarCampos")
const btn_concluir=document.querySelector("#btnConcluir")
const tbodyCampos=document.querySelector("tbody")


//Var da função addField
var n_campos=5

function addFields(){
    const container = document.getElementById("orcamentoCampos")    

    for (var i = 0;i<n_campos;i++){
        //container.appendChild(document.createTextNode("campo" + (i+1)))

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

        //Cria campo tipo
        let td3 = document.createElement("td")
        const boxOpt =  selectBox.options [selectBox.selectedIndex];
        boxOpt[0].text = "a Pagar"
        boxOpt[0].value = "Passivo"

        td3.appendChild(boxOpt)


        //adiciona os campos na Div
        container.appendChild(td1)        
        container.appendChild(td2)
        container.appendChild(td3)  

        //Faz parágrafo
        const para = document.createElement("br")
        container.appendChild(para)   

        console.log("ola" + i)

    }
}
/*                        <td><input type="number" name="valor" step="0.01" min="0.00"></td>
                        <td><select name="tipo" size="1">
                                <option value="A">a Receber</option>
                                <option value="P">a Pagar</option>
                            </select></td>
*/
btn_campos.addEventListener("click", addFields())
n_campos=1