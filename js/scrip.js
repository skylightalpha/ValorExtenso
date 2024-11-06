
function extenso()
{
    const valor = document.getElementById("valor").value;
    testaValor(valor);
    
    //document.getElementById("result").innerText = "OK"
}

function testaValor(valor)
{
    if (valor < 0) {
        alert("Valor menor que zero!")
    }
}