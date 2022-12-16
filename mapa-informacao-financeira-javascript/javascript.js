const todosCampos=[...document.querySelectorAll("td > input")] //Campos de input
const camposResultado=[...document.querySelectorAll("td > div")] //campos para exibir resultados


console.log(todosCampos)
console.log(camposResultado)



todosCampos.map((el)=>{
    el.addEventListener("load",calcularExibirValores())
    el.addEventListener("change",calcularExibirValores)
})


function calcularExibirValores(){
    //Calculos________________________________________________________________________________
    
    //Calculos para determinar total de proveitos
    let proveitosN2 = parseFloat(todosCampos[3].value) * parseFloat(todosCampos[6].value)
    let proveitosN1 = parseFloat(todosCampos[4].value) * parseFloat(todosCampos[7].value)
    let proveitosA = parseFloat(todosCampos[5].value) * parseFloat(todosCampos[8].value)
    let proveitosVs = proveitosN1 - proveitosN2
    let vendasVs = parseFloat(todosCampos[4].value) - parseFloat(todosCampos[3].value)
    let prestacaoVs = parseFloat(todosCampos[7].value) - parseFloat(todosCampos[6].value)

    //Calculos para determinar total de custos
    let custosN2 = parseFloat(todosCampos[9].value) + parseFloat(todosCampos[12].value) + parseFloat(todosCampos[15].value)
    let custosN1 = parseFloat(todosCampos[10].value) + parseFloat(todosCampos[13].value) + parseFloat(todosCampos[16].value)
    let custosA = parseFloat(todosCampos[11].value) + parseFloat(todosCampos[14].value) + parseFloat(todosCampos[17].value)
    let custosVs = custosN2 - custosN1
    let custoPessoalVs = parseFloat(todosCampos[10].value) - parseFloat(todosCampos[9].value)
    let cmvcVs = parseFloat(todosCampos[13].value) - parseFloat(todosCampos[12].value)
    let outrosVs = parseFloat(todosCampos[14].value) - parseFloat(todosCampos[15].value)

    //Calculos para determinar o total da margem de lucro
    var margemBrutoN2 = proveitosN2 - custosN2
    var margemBrutoN1 = proveitosN1 - custosN1
    var margemBrutoA = proveitosA - custosA
    var margemBrutoVs = proveitosVs - proveitosVs

    //exibir Resultados_________________________________________________________________

    //exibe resultados nos campos proveitos e verifica se está vazio, caso esteja mete 0
    camposResultado[0].innerHTML = (proveitosN2 ? proveitosN2 : 0) + "€"
    camposResultado[1].innerHTML = (proveitosN1 ? proveitosN1 : 0) + "€"
    camposResultado[2].innerHTML = (proveitosA ? proveitosA : 0) + "€"
    camposResultado[3].innerHTML = (proveitosVs ? proveitosVs : 0) + "€"
    camposResultado[4].innerHTML = (vendasVs ? vendasVs : 0) + "€"
    camposResultado[5].innerHTML = (prestacaoVs ? prestacaoVs : 0) + "€"

    //exibe resultados nos campos custos e verifica se está vazio, caso esteja mete 0
    camposResultado[6].innerHTML = (custosN2 ? custosN2 : 0) + "€"
    camposResultado[7].innerHTML = (custosN1 ? custosN1 : 0) + "€"
    camposResultado[8].innerHTML = (custosA ? custosA : 0) + "€"
    camposResultado[9].innerHTML = (custosVs ? custosVs : 0) + "€"
    camposResultado[10].innerHTML = (custoPessoalVs ? custoPessoalVs : 0) + "€"
    camposResultado[11].innerHTML = (cmvcVs ? cmvcVs : 0) + "€"
    camposResultado[12].innerHTML = (outrosVs ? outrosVs : 0) + "€"

    //exibe resultados nos campos margem bruta e verifica se está vazio, caso esteja mete 0
    camposResultado[13].innerHTML = (margemBrutoN2 ? margemBrutoN2 : 0) + "€"
    camposResultado[14].innerHTML = (margemBrutoN1 ? margemBrutoN1 : 0) + "€"
    camposResultado[15].innerHTML = (margemBrutoA ? margemBrutoA : 0) + "€"
    camposResultado[16].innerHTML = (margemBrutoVs ? margemBrutoVs : 0) + "€"

}